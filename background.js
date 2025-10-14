class BingSearchManager {
    constructor() {
        this.isRunning = false;
        this.searchTabs = [];
        this.currentSearch = 0;
        this.totalSearches = 0;
        this.searchTimeout = null;
        this.autoCloseTabs = true;

        this.wordList = [
            // Core Research Areas
            "bioprocess engineering", "systems biology", "computational biology", "hybrid modeling",
            "mechanistic modeling", "constraint-based modeling", "genome-scale models", "metabolic flux analysis",
            "flux balance analysis", "dynamic modeling", "kinetic modeling", "parameter estimation",
            "bioreactor optimization", "cell culture dynamics", "mammalian cell culture", "CHO cells",
            "HEK293 cells", "MDCK cells", "suspension cell culture", "fed-batch process",
            "perfusion culture", "continuous culture", "batch culture", "cell line development",

            // Machine Learning & AI in Biotech
            "machine learning bioprocesses", "LSTM neural networks", "deep neural networks", "neural ODEs",
            "time series forecasting", "hybrid AI models", "mechanistic machine learning", "PyTorch biotech",
            "TensorFlow bioengineering", "scikit-learn biotechnology", "AI bioprocess optimization",
            "deep learning cell culture", "predictive modeling biotech", "digital twins bioprocesses",
            "artificial intelligence bioreactors", "data-driven modeling", "physics-informed neural networks",

            // Metabolic Engineering & Systems
            "metabolic engineering", "pathway optimization", "carbon metabolism", "glucose metabolism",
            "amino acid metabolism", "lipid metabolism", "energy metabolism", "redox balance",
            "cofactor regeneration", "metabolic networks", "flux variability analysis", "elementary modes",
            "metabolomics", "proteomics", "transcriptomics", "multi-omics integration", "SBML modeling",
            "Systems Biology Markup Language", "metabolite profiling", "isotope labeling",

            // Virus & Vaccine Production
            "virus production", "vaccine manufacturing", "influenza virus", "viral vectors", "adenovirus",
            "lentivirus", "baculovirus expression", "virus infection dynamics", "viral kinetics",
            "vaccine process development", "viral clearance", "downstream processing", "purification",
            "virus quantification", "plaque assays", "RT-qPCR", "flow cytometry",

            // Biopharmaceuticals & Protein Production
            "recombinant protein production", "monoclonal antibodies", "therapeutic proteins", "biosimilars",
            "protein folding", "glycosylation", "post-translational modifications", "quality by design",
            "process analytical technology", "PAT implementation", "critical quality attributes", "CQA",
            "critical process parameters", "CPP", "design space", "process validation",
            "biopharmaceutical manufacturing", "GMP guidelines", "regulatory compliance",

            // Industry & Companies
            "GlaxoSmithKline", "Novartis", "Roche", "Pfizer", "Johnson & Johnson", "Merck KGaA",
            "Biogen", "Amgen", "Genentech", "Sanofi", "AstraZeneca", "Takeda", "Gilead",
            "Lonza", "Catalent", "WuXi Biologics", "Samsung Biologics", "Fujifilm Diosynth",
            "Thermo Fisher Scientific", "Merck Millipore", "Sartorius", "Cytiva", "Eppendorf",
            "CRISPR Therapeutics", "Moderna", "BioNTech", "Vertex Pharmaceuticals",

            // Academic & Research Institutions
            "Max Planck Institute", "FCT NOVA University", "MIT biotechnology", "Stanford bioengineering",
            "Cambridge systems biology", "ETH Zurich bioprocess", "DTU biosustain", "KTH biotech",
            "UC Berkeley synthetic biology", "Caltech bioengineering", "Imperial College bioprocessing",
            "RWTH Aachen biotech", "TU Delft biotechnology", "University of Cambridge metabolic",
            "Harvard systems biology", "Princeton computational biology",

            // Software & Tools
            "MATLAB biotechnology", "Python bioprocessing", "COBRA toolbox", "CellNetAnalyzer",
            "SBML2HYB", "COBRApy", "Jupyter notebooks", "Docker containers", "Git version control",
            "COPASI modeling", "CellDesigner", "Cytoscape networks", "R bioconductor",
            "Escher pathway maps", "MetaboAnalyst", "KEGG pathways", "BiGG models",
            "optlang optimization", "GLPK solver", "CPLEX optimization", "Gurobi solver",

            // Conferences & Journals
            "ESACT conference", "FOSBE conference", "YCOPE symposium", "Metabolic Pathway Analysis",
            "Cell Culture Engineering", "Biotechnology Progress", "Biotechnology and Bioengineering",
            "Metabolic Engineering", "Systems Biology", "Nature Biotechnology", "Science Translational Medicine",
            "PNAS biotechnology", "Journal of Biotechnology", "Biochemical Engineering Journal",
            "Bioprocess and Biosystems Engineering", "Frontiers in Bioengineering", "Computers Chemical Engineering",

            // Funding & Grants
            "ERC grants", "Horizon Europe", "Marie Curie fellowships", "FCT grants Portugal",
            "NIH biotechnology", "NSF bioengineering", "BMBF Germany", "ANR France",
            "EPSRC UK", "NWO Netherlands", "SNSF Switzerland", "DFG Germany",
            "Wellcome Trust", "Gates Foundation", "Chan Zuckerberg Initiative",

            // Emerging Technologies
            "single cell analysis", "microfluidics", "organ-on-chip", "3D cell culture", "spheroids",
            "organoids", "synthetic biology", "CRISPR gene editing", "base editing", "prime editing",
            "protein design", "directed evolution", "cell-free systems", "biosensors", "optogenetics",
            "tissue engineering", "regenerative medicine", "stem cell culture", "iPSC culture",
            "continuous manufacturing", "intensified processes", "miniaturization", "automation",

            // Data Science & Bioinformatics
            "bioinformatics", "computational genomics", "machine learning genomics", "data mining biology",
            "statistical modeling", "Bayesian inference", "MCMC sampling", "sensitivity analysis",
            "uncertainty quantification", "model validation", "cross-validation", "overfitting",
            "regularization", "dimensionality reduction", "PCA biology", "t-SNE", "UMAP",
            "clustering algorithms", "classification models", "regression analysis",

            // Quality & Regulatory
            "quality by design", "process validation", "analytical method validation", "ICH guidelines",
            "FDA guidance", "EMA guidelines", "USP standards", "Ph. Eur. standards",
            "good manufacturing practice", "quality assurance", "quality control", "deviation investigation",
            "change control", "risk assessment", "HACCP", "ISO standards",

            // Sustainability & Green Tech
            "sustainable bioprocessing", "green biotechnology", "circular bioeconomy", "carbon footprint",
            "life cycle assessment", "environmental impact", "waste reduction", "energy efficiency",
            "renewable feedstocks", "bio-based chemicals", "biodegradable plastics", "carbon capture",
            "industrial biotechnology", "white biotechnology", "enzyme engineering", "biocatalysis",

            // Career & Professional Development
            "postdoc positions", "industry positions", "biotech careers", "computational biology jobs",
            "research scientist", "process development", "manufacturing science", "technical writing",
            "project management", "team leadership", "scientific communication", "patent writing",
            "technology transfer", "startup biotechnology", "venture capital", "licensing agreements",

            // Portuguese Research Ecosystem
            "Portuguese biotech", "iBET institute", "ITQB NOVA", "i3S Porto", "CNC Coimbra",
            "INESC TEC", "Champalimaud Foundation", "Gulbenkian Institute", "Portuguese startups",
            "Portugal 2030", "PRR recovery plan", "FCT scholarships", "COMPETE funding",

            // Current Trends & Hot Topics
            "mRNA technology", "COVID-19 vaccines", "pandemic preparedness", "personalized medicine",
            "precision medicine", "companion diagnostics", "biomarker discovery", "liquid biopsy",
            "CAR-T therapy", "gene therapy", "AAV vectors", "immunotherapy", "checkpoint inhibitors",
            "ADC antibody drug conjugates", "bispecific antibodies", "nanobodies", "protein degraders",
            "digital health", "telemedicine", "wearable biosensors", "point-of-care diagnostics"
        ];

        this.setupMessageListener();
    }

    setupMessageListener() {
        chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
            this.handleMessage(request, sender, sendResponse);
            return true; // Keep the message channel open for async response
        });
    }

    async handleMessage(request, sender, sendResponse) {
        try {
            switch (request.action) {
                case 'startSearches':
                    this.autoCloseTabs = request.autoCloseTabs !== undefined ? request.autoCloseTabs : true;
                    const result = await this.startSearches(request.searchCount, request.minDelay, request.maxDelay);
                    sendResponse(result);
                    break;

                case 'stopSearches':
                    this.stopSearches();
                    sendResponse({ success: true });
                    break;

                case 'closeAllTabs':
                    const closeResult = await this.closeAllTabs();
                    sendResponse(closeResult);
                    break;

                case 'getProgress':
                    sendResponse(this.getProgress());
                    break;

                case 'scheduleSearch':
                    const scheduleResult = await this.scheduleSearch(request.time, request.searchCount, request.minDelay, request.maxDelay, request.autoCloseTabs);
                    sendResponse(scheduleResult);
                    break;

                case 'cancelSchedule':
                    const cancelResult = await this.cancelSchedule();
                    sendResponse(cancelResult);
                    break;

                case 'getSchedule':
                    const schedule = await this.getSchedule();
                    sendResponse(schedule);
                    break;

                default:
                    sendResponse({ success: false, error: 'Unknown action' });
            }
        } catch (error) {
            console.error('Error handling message:', error);
            sendResponse({ success: false, error: error.message });
        }
    }

    async startSearches(searchCount, minDelay, maxDelay) {
        if (this.isRunning) {
            return { success: false, error: 'Searches already running' };
        }

        console.log(`Starting ${searchCount} searches with delays between ${minDelay}-${maxDelay} seconds`);
        
        this.isRunning = true;
        this.searchTabs = [];
        this.currentSearch = 0;
        this.totalSearches = searchCount;

        try {
            await this.performSearches(searchCount, minDelay, maxDelay);
            return { success: true };
        } catch (error) {
            this.isRunning = false;
            console.error("Error during performSearches:", error);
            return { success: false, error: error.message };
        }
    }

    async performSearches(searchCount, minDelay, maxDelay) {
        for (let i = 0; i < searchCount; i++) {
            if (!this.isRunning) {
                console.log("Search process interrupted.");
                break; // Exit loop if stopSearches was called
            }

            try {
                // Generate random query
                const wordCount = Math.floor(Math.random() * 3) + 2; // 2-4 words
                const selectedWords = this.getRandomWords(wordCount);
                const query = selectedWords.join(' ');

                // Create search URL
                const searchUrl = `https://www.bing.com/search?q=${encodeURIComponent(query)}&qs=n&form=QBLH&sp=-1&lq=0`;

                // Open new tab
                const tab = await chrome.tabs.create({
                    url: searchUrl,
                    active: false // Don't switch to the new tab
                });

                this.searchTabs.push(tab.id);
                this.currentSearch = i + 1;
                console.log(`Search ${this.currentSearch}/${this.totalSearches}: ${query}`);

                // Wait random delay before next search, but not after the last one
                if (i < searchCount - 1 && this.isRunning) {
                    const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
                    console.log(`Waiting ${delay} seconds before next search...`);
                    
                    const startTime = Date.now();
                    await this.sleep(delay * 1000); // Convert seconds to milliseconds
                    const actualDelay = (Date.now() - startTime) / 1000;
                    console.log(`Actually waited ${actualDelay.toFixed(1)} seconds`);
                }
            } catch (error) {
                console.error(`Error on search ${i + 1}:`, error);
                // Continue with next search even if one fails
            }
        }
        
        if (this.isRunning) {
            this.isRunning = false; // Mark as not running after the loop finishes
            console.log("All searches completed.");
            
            // Auto-close tabs if option is enabled
            if (this.autoCloseTabs) {
                console.log("Auto-closing tabs after search completion...");
                await this.sleep(2000); // Wait 2 seconds before closing
                await this.closeAllTabs();
            }
        }
    }

    getRandomWords(count) {
        const shuffled = [...this.wordList].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    sleep(ms) {
        return new Promise((resolve, reject) => {
            this.searchTimeout = setTimeout(() => {
                this.searchTimeout = null;
                resolve();
            }, ms);
        });
    }

    stopSearches() {
        console.log("Stop requested.");
        this.isRunning = false;
        if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
            this.searchTimeout = null;
            console.log("Cleared pending timeout.");
        }
    }

    async closeAllTabs() {
        console.log(`Attempting to close search tabs. Tracked tabs: ${this.searchTabs.length}`);
        
        // Stop any running searches first
        this.stopSearches();

        // Query for all Bing search tabs
        const allTabs = await chrome.tabs.query({});
        const bingSearchTabs = allTabs.filter(tab => 
            tab.url && tab.url.includes('bing.com/search')
        );

        console.log(`Found ${bingSearchTabs.length} Bing search tabs to close`);

        if (bingSearchTabs.length === 0) {
            console.log("No Bing search tabs found to close");
            return { success: false, error: 'No search tabs to close' };
        }

        let closedCount = 0;
        const tabIdsToClose = bingSearchTabs.map(tab => tab.id);
        this.searchTabs = []; // Clear the tracked array

        for (const tabId of tabIdsToClose) {
            try {
                await chrome.tabs.remove(tabId);
                closedCount++;
                console.log(`Closed tab ${tabId}`);
                // Small delay between closing tabs to avoid overwhelming the browser
                await this.sleep(100);
            } catch (error) {
                console.error(`Error closing tab ${tabId}:`, error);
                // Tab might already be closed, continue with next
            }
        }

        // Reset search state
        this.currentSearch = 0;
        this.totalSearches = 0;
        this.isRunning = false;

        console.log(`Successfully closed ${closedCount} tabs`);
        return { success: true, closedCount };
    }

    getProgress() {
        const progress = {
            completed: this.currentSearch,
            total: this.totalSearches,
            isRunning: this.isRunning,
            finished: !this.isRunning && this.currentSearch === this.totalSearches && this.totalSearches > 0,
            status: this.isRunning ?
                `Searching... (${this.currentSearch}/${this.totalSearches})` :
                (this.currentSearch === this.totalSearches && this.totalSearches > 0) ?
                    'All searches completed!' :
                    'Ready',
            tabsTracked: this.searchTabs.length // Add tab count for debugging
        };
        
        console.log(`Progress: ${progress.completed}/${progress.total}, Running: ${this.isRunning}, Tabs tracked: ${this.searchTabs.length}`);
        return progress;
    }

    async scheduleSearch(time, searchCount, minDelay, maxDelay, autoCloseTabs) {
        try {
            // Parse the time string (HH:MM format)
            const [hours, minutes] = time.split(':').map(Number);
            
            // Get current time
            const now = new Date();
            const scheduledTime = new Date();
            scheduledTime.setHours(hours, minutes, 0, 0);
            
            // If scheduled time is in the past, schedule for tomorrow
            if (scheduledTime <= now) {
                scheduledTime.setDate(scheduledTime.getDate() + 1);
            }
            
            // Calculate delay in minutes
            const delayInMinutes = Math.ceil((scheduledTime - now) / (1000 * 60));
            
            // Save schedule info to storage
            await chrome.storage.local.set({
                scheduledSearch: {
                    time: scheduledTime.toISOString(),
                    searchCount,
                    minDelay,
                    maxDelay,
                    autoCloseTabs,
                    formattedTime: time
                }
            });
            
            // Create alarm
            await chrome.alarms.create('scheduledSearch', {
                delayInMinutes: delayInMinutes
            });
            
            console.log(`Search scheduled for ${scheduledTime.toLocaleString()}`);
            return { 
                success: true, 
                scheduledTime: scheduledTime.toLocaleString(),
                delayMinutes: delayInMinutes
            };
        } catch (error) {
            console.error('Error scheduling search:', error);
            return { success: false, error: error.message };
        }
    }

    async cancelSchedule() {
        try {
            await chrome.alarms.clear('scheduledSearch');
            await chrome.storage.local.remove('scheduledSearch');
            console.log('Scheduled search cancelled');
            return { success: true };
        } catch (error) {
            console.error('Error cancelling schedule:', error);
            return { success: false, error: error.message };
        }
    }

    async getSchedule() {
        try {
            const data = await chrome.storage.local.get('scheduledSearch');
            if (data.scheduledSearch) {
                return { 
                    success: true, 
                    scheduled: true,
                    ...data.scheduledSearch
                };
            }
            return { success: true, scheduled: false };
        } catch (error) {
            console.error('Error getting schedule:', error);
            return { success: false, error: error.message };
        }
    }
}

// Initialize the search manager
const searchManager = new BingSearchManager();

// Listen for alarms
chrome.alarms.onAlarm.addListener(async (alarm) => {
    if (alarm.name === 'scheduledSearch') {
        console.log('Scheduled search alarm triggered');
        
        // Get scheduled search details
        const data = await chrome.storage.local.get('scheduledSearch');
        if (data.scheduledSearch) {
            const { searchCount, minDelay, maxDelay, autoCloseTabs } = data.scheduledSearch;
            
            // Set auto-close option
            searchManager.autoCloseTabs = autoCloseTabs;
            
            // Start the searches
            await searchManager.startSearches(searchCount, minDelay, maxDelay);
            
            // Clear the schedule after execution
            await chrome.storage.local.remove('scheduledSearch');
            console.log('Scheduled search completed and cleared');
        }
    }
});