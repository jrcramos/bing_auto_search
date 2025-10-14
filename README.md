# 🔍 Bing Auto Search - Microsoft Rewards Automator

A Chrome browser extension that automatically performs multiple Bing searches to help you earn Microsoft Rewards points efficiently and effortlessly.

![Extension UI](https://github.com/user-attachments/assets/dada2199-3ef0-4320-9773-00510dcad854)

> *Automate your Microsoft Rewards points with intelligent, natural-looking Bing searches*

## ✨ Features

### 🚀 Core Functionality
- **Automated Bing Searches**: Performs multiple searches with random biotechnology and research-related keywords
- **Daily Recurring Schedule**: Set it once and searches run automatically every day at the same time
- **Customizable Search Count**: Set the number of searches (1-100) to perform
- **Smart Delay System**: Random delays between searches (5-15 seconds) to appear more natural
- **Progress Tracking**: Real-time progress bar and status updates
- **Background Operation**: Runs in the background without interrupting your browsing

### 🎨 User Experience
- **Modern Gradient UI**: Beautiful purple gradient design with smooth animations
- **Real-time Feedback**: Live progress bar and status messages
- **Schedule Feature**: Set specific times for automatic search execution
- **One-Click Tab Cleanup**: "Close All Tabs" button for easy browser management
- **Auto-close Option**: Automatically clean up tabs after completion

### 🔧 Technical Excellence
- **Research-Focused Keywords**: Uses 200+ curated scientific and biotechnology terms
- **Manifest V3**: Built with the latest Chrome extension standard
- **Efficient Performance**: Minimal resource usage and smart tab management
- **No Data Collection**: Complete privacy with local-only processing

## 🚀 Installation

### Method 1: Manual Installation (Recommended)

1. **Download the Extension**
   ```bash
   git clone https://github.com/jrcramos/bing_auto_search.git
   ```
   Or [download as ZIP](https://github.com/jrcramos/bing_auto_search/archive/refs/heads/main.zip) and extract it.

2. **Enable Developer Mode in Chrome**
   - Open Chrome or Edge and navigate to:
     - Chrome: `chrome://extensions/`
     - Edge: `edge://extensions/`
   - Toggle **"Developer mode"** ON in the top-right corner

3. **Load the Extension**
   - Click the **"Load unpacked"** button
   - Navigate to and select the folder containing the extension files
   - The extension icon 🔍 should appear in your browser toolbar

4. **Pin the Extension (Optional but Recommended)**
   - Click the puzzle piece (🧩) icon in your Chrome toolbar
   - Find "Bing Rewards Auto Search" in the list
   - Click the pin icon to keep it visible in your toolbar

### Method 2: Chrome or Edge Web Store
*Note: This extension is not currently published on the Chrome Web Store*

> **💡 Tip**: For detailed installation instructions with screenshots, check out our [Installation Guide](INSTALLATION.md).

## 🎯 How It Works

The extension automates Bing searches to help you earn Microsoft Rewards points:

```
1. Click Extension Icon
         ↓
2. Configure Settings (searches, delays, schedule)
         ↓
3. Click "Start Searches"
         ↓
4. Extension Opens Tabs with Random Keywords
         ↓
5. Waits Random Delay Between Each Search
         ↓
6. Progress Bar Shows Real-time Status
         ↓
7. Automatically Closes Tabs (if enabled)
         ↓
8. Complete! Earn Your Microsoft Rewards Points
```

**Why Random Keywords?** The extension uses 200+ carefully curated scientific and biotechnology terms to make searches appear natural and relevant, reducing the chance of being flagged as automated.

## 📱 Usage

### Quick Start Guide

1. **Open the Extension**
   - Click the 🔍 icon in your Chrome toolbar
   - The extension popup will appear with all controls

2. **Configure Your Search Settings**
   - **Number of searches**: Enter 1-100 (default: 42)
     - *Recommended: 30-40 for daily Microsoft Rewards*
   - **Delay between searches**: Set min/max range (default: 5-15 seconds)
     - *Tip: Longer delays appear more natural*
   - **Auto-close tabs**: Keep checked to automatically clean up tabs

3. **Optional: Schedule a Search**
   - Set a specific time for automatic search execution
   - Click "Schedule" to activate the timer
   - Perfect for overnight or away-from-keyboard automation

4. **Start Your Automated Searches**
   - Click the **"Start Searches"** button
   - Watch the real-time progress bar and status updates
   - Click **"Stop"** anytime to halt the process

5. **Manage Your Tabs**
   - Click **"Close All Tabs"** to clean up all Bing search tabs
   - Keeps your browser organized and clutter-free

### Advanced Tips & Best Practices

- 🎯 **Optimal Search Count**: Microsoft Rewards typically allows 30-34 PC searches per day for maximum points
- ⏱️ **Natural Timing**: Random delays (5-15 seconds) help searches appear more human-like and avoid detection
- 🔄 **Background Operation**: Minimize your browser and let searches run while you work on other tasks
- 📊 **Monitor Progress**: Real-time progress bar shows current search count and status
- 🌐 **Account Safety**: Don't exceed reasonable daily limits or use very short delays
- 📅 **Daily Routine**: Schedule searches for the same time each day for consistency

### Understanding the Interface

The extension popup includes:
- **Search Controls**: Number of searches and delay configuration
- **Schedule Feature**: Set automatic execution at a specific time
- **Action Buttons**: Start, Stop, and Close All Tabs
- **Progress Tracking**: Real-time status updates and progress bar
- **Status Messages**: Clear feedback on what the extension is doing

## 📸 Screenshots & Visual Guide


### Key Features Highlighted


## ⚙️ Technical Details

### Architecture

- **Manifest Version**: 3 (latest Chrome extension standard)
- **Permissions**: 
  - `tabs`: For creating and managing search tabs
  - `activeTab`: For interacting with the current tab
  - `storage`: For saving schedule preferences
  - `alarms`: For scheduling recurring daily searches
- **Background Script**: `background.js` handles the search logic and scheduling
- **Popup Interface**: `popup.html` and `popup.js` provide the user interface

### Search Keywords

The extension uses 200+ carefully curated keywords related to:
- Bioprocess engineering and systems biology
- Machine learning in biotechnology
- Metabolic engineering
- Academic institutions and research
- Industry companies and tools
- Portuguese research ecosystem
- Current biotech trends

### File Structure
```
bing_auto_search/
├── manifest.json          # Extension configuration
├── background.js          # Main search logic
├── popup.html            # User interface
├── popup.js              # UI interaction logic
├── icons/
│   └── icon16.png        # Extension icon
├── screenshots/          # Visual documentation
│   └── popup-ui.png      # UI screenshots
├── README.md             # Main documentation
├── INSTALLATION.md       # Detailed installation guide
├── CONTRIBUTING.md       # Contribution guidelines
├── USAGE_GUIDE.md        # Comprehensive usage guide
├── USER_GUIDE.md         # User documentation
└── CHANGELOG.md          # Version history
```

## 🛠️ Troubleshooting

### Common Issues

**Extension doesn't start**
- Make sure you're logged into your Microsoft account on Bing
- Check that popup blockers aren't blocking new tabs
- Verify the extension has proper permissions

**Searches are too fast/slow**
- Adjust the delay settings in the popup
- Default range of 5-15 seconds is recommended
- Very short delays might trigger detection systems

**Not earning points**
- Ensure you're logged into your Microsoft Rewards account
- Check that you haven't exceeded daily search limits
- Verify your region is eligible for Microsoft Rewards

**Extension popup doesn't open**
- Try refreshing the extension: go to `chrome://extensions/` and click refresh
- Check if the extension is enabled
- Restart Chrome if issues persist

### Error Messages

- **"No Bing search tabs found"**: This appears when trying to close tabs but none are open
- **"Please enter valid delay times"**: Make sure minimum delay ≤ maximum delay
- **"Error starting searches"**: Check console logs and restart the extension

## ⚖️ Legal and Ethical Considerations

### Important Disclaimers

- **Use Responsibly**: This tool should be used in accordance with Microsoft's Terms of Service
- **Rate Limiting**: The built-in delays help avoid overwhelming Bing's servers
- **Account Safety**: Don't use excessively high search volumes that might flag your account
- **Educational Purpose**: This project is intended for learning about browser extensions and automation

### Best Practices

- Don't exceed reasonable daily search limits (recommended: 30-40 searches/day)
- Use realistic delay intervals (5-15 seconds minimum)
- Don't run multiple instances simultaneously
- Monitor your Microsoft Rewards account for any issues

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/new-feature`
3. **Make your changes and test thoroughly**
4. **Commit with clear messages**: `git commit -m "Add new feature"`
5. **Push to your fork**: `git push origin feature/new-feature`
6. **Create a Pull Request**

### Development Setup

```bash
# Clone the repository
git clone https://github.com/jrcramos/bing_auto_search.git
cd bing_auto_search

# Load the extension in Chrome for testing
# Go to chrome://extensions/, enable Developer mode, and click "Load unpacked"
```

## 📝 Changelog

### Version 1.2 (Current)
- **Daily Recurring Schedule**: Searches run automatically every day at the same time
- **Set and Forget**: Schedule once, runs indefinitely until canceled
- Background execution support for Chrome/Edge

### Version 1.1
- Enhanced UI with gradient design
- Improved error handling and validation
- Added progress tracking and status updates
- Auto-close tabs feature
- Better tab management functionality

### Version 1.0
- Initial release
- Basic automated search functionality
- Simple popup interface

## Privacy & Security

- **No Data Collection**: The extension does not collect or transmit any personal data
- **Local Processing**: All link detection happens locally in your browser
- **No External Requests**: Extension doesn't communicate with external servers
- **Temporary Storage**: Links are stored in memory only and cleared when tabs close
- **Open Source**: Code is publicly available for security review
  
## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Troubleshooting](#-troubleshooting) section
2. Search existing [Issues](https://github.com/jrcramos/bing_auto_search/issues)
3. Create a new issue with detailed information about your problem

## ⭐ Acknowledgments

- Built for the Microsoft Rewards program
- Keyword database focuses on biotechnology and research topics
- Inspired by the need for automated, efficient reward point collection

---

**Disclaimer**: This extension is not affiliated with Microsoft Corporation. Use responsibly and in accordance with Microsoft's Terms of Service and Microsoft Rewards program rules.
