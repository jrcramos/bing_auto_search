document.addEventListener('DOMContentLoaded', () => {
    // Get all DOM elements with null checks
    const searchCountInput = document.getElementById('searchCount');
    const minDelayInput = document.getElementById('minDelay');
    const maxDelayInput = document.getElementById('maxDelay');
    const startSearchButton = document.getElementById('startSearch');
    const stopSearchButton = document.getElementById('stopSearch');
    const closeTabsButton = document.getElementById('closeTabs');
    const statusEl = document.getElementById('status');
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    const progressDiv = document.getElementById('progress');

    // Check if all elements exist
    const elements = {
        searchCountInput,
        minDelayInput,
        maxDelayInput,
        startSearchButton,
        stopSearchButton,
        closeTabsButton,
        statusEl,
        progressBar,
        progressText,
        progressDiv
    };

    for (const [name, element] of Object.entries(elements)) {
        if (!element) {
            console.error(`Element not found: ${name}`);
            return; // Exit if any element is missing
        }
    }

    let isRunning = false;
    let progressInterval;

    // Function to update the UI based on search progress
    function updateProgressUI(progress) {
        if (!progress) return;

        statusEl.textContent = progress.status;
        progressText.textContent = `${progress.completed} / ${progress.total}`;
        const percentage = progress.total > 0 ? (progress.completed / progress.total) * 100 : 0;
        progressBar.style.width = `${percentage}%`;

        if (progress.finished) {
            progressDiv.style.display = 'none';
            startSearchButton.disabled = false;
            stopSearchButton.disabled = true;
            closeTabsButton.disabled = false;
            isRunning = false;
            clearInterval(progressInterval);
        } else if (progress.isRunning) {
            progressDiv.style.display = 'block';
            startSearchButton.disabled = true;
            stopSearchButton.disabled = false;
            closeTabsButton.disabled = true; // Disable closing tabs while running
            isRunning = true;
        } else {
            progressDiv.style.display = 'none';
            startSearchButton.disabled = false;
            stopSearchButton.disabled = true;
            closeTabsButton.disabled = false; // Enable close tabs when not running
            isRunning = false;
        }
    }

    // Function to get and display search progress
    function getSearchProgress() {
        chrome.runtime.sendMessage({ action: 'getProgress' }, (response) => {
            if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError);
                statusEl.textContent = "Error getting progress.";
                return;
            }
            updateProgressUI(response);
        });
    }

    // Event listener for the "Start Searches" button
    startSearchButton.addEventListener('click', () => {
        const searchCount = parseInt(searchCountInput.value, 10);
        const minDelay = parseInt(minDelayInput.value, 10);
        const maxDelay = parseInt(maxDelayInput.value, 10);

        if (isNaN(searchCount) || searchCount <= 0) {
            statusEl.textContent = 'Please enter a valid number of searches.';
            return;
        }
        if (isNaN(minDelay) || minDelay <= 0 || isNaN(maxDelay) || maxDelay <= 0 || minDelay > maxDelay) {
            statusEl.textContent = 'Please enter valid delay times (min <= max).';
            return;
        }

        statusEl.textContent = 'Starting searches...';
        chrome.runtime.sendMessage({ action: 'startSearches', searchCount, minDelay, maxDelay }, (response) => {
            if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError);
                statusEl.textContent = "Error starting searches.";
                return;
            }
            if (response && response.success) {
                statusEl.textContent = 'Searches started!';
                getSearchProgress(); // Get initial progress
                // Start polling for progress updates
                progressInterval = setInterval(getSearchProgress, 1000); // Update every second
            } else {
                statusEl.textContent = `Error: ${response ? response.error : 'Unknown error'}`;
            }
        });
    });

    // Event listener for the "Stop" button
    stopSearchButton.addEventListener('click', () => {
        chrome.runtime.sendMessage({ action: 'stopSearches' }, (response) => {
            if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError);
                statusEl.textContent = "Error stopping searches.";
                return;
            }
            if (response && response.success) {
                statusEl.textContent = 'Searches stopped.';
                isRunning = false;
                clearInterval(progressInterval);
                getSearchProgress(); // Update UI to reflect stopped state
            } else {
                statusEl.textContent = `Error: ${response ? response.error : 'Unknown error'}`;
            }
        });
    });

    // Event listener for the "Close All Tabs" button
    closeTabsButton.addEventListener('click', () => {
        console.log('Close tabs button clicked'); // Debug log
        statusEl.textContent = 'Closing tabs...';
        
        chrome.runtime.sendMessage({ action: 'closeAllTabs' }, (response) => {
            if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError);
                statusEl.textContent = "Error closing tabs.";
                return;
            }
            if (response && response.success) {
                statusEl.textContent = `${response.closedCount} tabs closed.`;
                isRunning = false;
                clearInterval(progressInterval);
                getSearchProgress(); // Reset UI after closing tabs
            } else {
                const errorMsg = response ? response.error : 'Unknown error';
                if (errorMsg.includes('No Bing search tabs found')) {
                    statusEl.textContent = 'No Bing search tabs found to close.';
                } else {
                    statusEl.textContent = `Error: ${errorMsg}`;
                }
            }
        });
    });

    // Initial call to get progress when the popup opens
    getSearchProgress();
});