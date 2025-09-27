# 🔍 Bing Auto Search - Microsoft Rewards Automator

A Chrome browser extension that automatically performs multiple Bing searches to help you earn Microsoft Rewards points efficiently and effortlessly.

## ✨ Features

- **Automated Bing Searches**: Performs multiple searches with random biotechnology and research-related keywords
- **Customizable Search Count**: Set the number of searches (1-100) to perform
- **Smart Delay System**: Random delays between searches (5-15 seconds) to appear more natural
- **Progress Tracking**: Real-time progress bar and status updates
- **Tab Management**: Easy cleanup with "Close All Tabs" functionality
- **Background Operation**: Runs in the background without interrupting your browsing
- **Research-Focused Keywords**: Uses 200+ curated scientific and biotechnology terms

## 🚀 Installation

### Method 1: Manual Installation (Recommended)

1. **Download the Extension**
   ```bash
   git clone https://github.com/jrcramos/bing_auto_search.git
   ```
   Or download as ZIP and extract it.

2. **Enable Developer Mode in Chrome**
   - Open Chrome or edge and go to `chrome://extensions/` or `edge://extensions/`
   - Toggle "Developer mode" ON in the top-right corner

3. **Load the Extension**
   - Click "Load unpacked" button
   - Select the folder containing the extension files
   - The extension icon should appear in your toolbar

4. **Pin the Extension (Optional)**
   - Click the puzzle piece icon in Chrome toolbar
   - Find "Bing Rewards Auto Search" and pin it for easy access

### Method 2: Chrome or edge Web Store
*Note: This extension is not currently published on the Chrome Web Store*

## 📱 Usage

### Basic Usage

1. **Click the Extension Icon**
   - Look for the 🔍 icon in your Chrome toolbar
   - Click it to open the popup interface

2. **Configure Your Settings**
   - **Number of searches**: Choose between 1-100 searches (default: 42)
   - **Delay range**: Set minimum and maximum delay between searches (default: 5-15 seconds)

3. **Start Searching**
   - Click "Start Searches" to begin the automated process
   - Watch the progress bar fill up as searches complete
   - Use "Stop" to halt the process at any time

4. **Clean Up**
   - Click "Close All Tabs" to close all opened Bing search tabs
   - This helps keep your browser organized

### Advanced Tips

- **Optimal Search Count**: Microsoft Rewards typically allows 30-34 searches per day for maximum points
- **Natural Timing**: The random delays help make the searches appear more human-like
- **Background Operation**: You can minimize browser and let the searches run in the background
- **Monitor Progress**: The extension shows real-time progress and current search status

## ⚙️ Technical Details

### Architecture

- **Manifest Version**: 3 (latest Chrome extension standard)
- **Permissions**: 
  - `tabs`: For creating and managing search tabs
  - `activeTab`: For interacting with the current tab
- **Background Script**: `background.js` handles the search logic
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
└── README.md             # This file
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

### Version 1.1
- Enhanced UI with gradient design
- Improved error handling and validation
- Added progress tracking and status updates
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
