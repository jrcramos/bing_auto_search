# 📥 Installation Guide - Bing Auto Search

This guide will walk you through installing the Bing Auto Search extension step-by-step.

## 🎯 Quick Start (2 minutes)

1. **Download**: Get the extension files
2. **Extract**: Unzip if downloaded as ZIP
3. **Load**: Install in Chrome via Developer mode
4. **Use**: Click the extension icon and start searching!

---

## 📋 Detailed Installation Steps

### Step 1: Download the Extension Files

#### Option A: Git Clone (Recommended for developers)
```bash
git clone https://github.com/jrcramos/bing_auto_search.git
cd bing_auto_search
```

#### Option B: Direct Download
1. Go to the [GitHub repository](https://github.com/jrcramos/bing_auto_search)
2. Click the green "Code" button
3. Select "Download ZIP"
4. Extract the ZIP file to a folder of your choice

### Step 2: Prepare Chrome Browser

1. **Open Google Chrome**
   - Make sure you're using a recent version of Chrome
   - Update Chrome if necessary: `Menu → Help → About Google Chrome`

2. **Navigate to Extensions Page**
   - Type `chrome://extensions/` in the address bar and press Enter
   - Or go to `Menu → More tools → Extensions`

### Step 3: Enable Developer Mode

1. **Find Developer Mode Toggle**
   - Look for "Developer mode" in the top-right corner of the extensions page
   
2. **Enable Developer Mode**
   - Click the toggle switch to turn it ON
   - The toggle should be blue when enabled
   
3. **New Buttons Appear**
   - You'll see "Load unpacked", "Pack extension", and "Update" buttons

### Step 4: Load the Extension

1. **Click "Load unpacked"**
   - This button appears after enabling Developer mode
   
2. **Select Extension Folder**
   - Navigate to the folder containing the extension files
   - Select the folder that contains `manifest.json`
   - Click "Select Folder" (Windows) or "Open" (Mac)

3. **Extension Loads**
   - The extension should appear in your extensions list
   - You'll see the Bing Auto Search card with version info

### Step 5: Pin the Extension (Recommended)

1. **Find the Puzzle Piece Icon**
   - Look for the extensions icon (puzzle piece) in Chrome's toolbar
   - It's usually to the right of the address bar

2. **Open Extensions Menu**
   - Click the puzzle piece icon
   - You'll see a dropdown with all your extensions

3. **Pin Bing Auto Search**
   - Find "Bing Rewards Auto Search" in the list
   - Click the pin icon next to it
   - The extension icon (🔍) will appear directly in the toolbar

---

## ✅ Verification Steps

### Confirm Successful Installation

1. **Extension Icon Visible**
   - Look for the 🔍 icon in your Chrome toolbar
   - If pinned properly, it should be easily visible

2. **Test the Popup**
   - Click the extension icon
   - The popup window should open with search controls
   - You should see options for search count and delay settings

3. **Check Extension Status**
   - Go back to `chrome://extensions/`
   - Find "Bing Rewards Auto Search"
   - Status should show "Enabled"
   - No error messages should be visible

### Test Basic Functionality

1. **Open the Extension**
   - Click the 🔍 icon in your toolbar
   
2. **Check Default Settings**
   - Number of searches: 42 (default)
   - Delay range: 5 to 15 seconds (default)
   
3. **Test Interface Elements**
   - All buttons should be visible and clickable
   - Input fields should accept numbers
   - Status area should show "Ready to start searching..."

---

## 🔧 Troubleshooting Installation

### Common Issues and Solutions

#### ❌ "Load unpacked" button is missing
**Problem**: Developer mode is not enabled
**Solution**: Make sure the Developer mode toggle is switched ON (blue)

#### ❌ Extension doesn't appear after loading
**Problem**: Wrong folder selected or missing files
**Solution**: 
- Ensure you selected the folder containing `manifest.json`
- Check that all required files are present:
  - `manifest.json`
  - `background.js`
  - `popup.html`
  - `popup.js`
  - `icons/icon16.png`

#### ❌ Extension shows error after loading
**Problem**: Invalid manifest or missing permissions
**Solution**:
- Check the Chrome extensions page for error details
- Ensure `manifest.json` is valid JSON
- Try downloading fresh files from the repository

#### ❌ Popup doesn't open when clicking icon
**Problem**: JavaScript errors or popup file issues
**Solution**:
- Right-click the extension icon and select "Inspect popup"
- Check the console for any JavaScript errors
- Verify `popup.html` and `popup.js` files are present

#### ❌ Extension permissions warnings
**Problem**: Chrome is warning about required permissions
**Solution**: 
- This is normal - the extension needs tab permissions to function
- Review the permissions in the popup and click "Accept" if you agree

---

## 🔄 Updating the Extension

### When New Versions Are Released

1. **Download Updated Files**
   - Pull latest changes: `git pull` (if using Git)
   - Or download new ZIP file and extract

2. **Reload Extension**
   - Go to `chrome://extensions/`
   - Find Bing Auto Search
   - Click the refresh/reload icon
   - The extension will update automatically

3. **Clear Browser Cache** (if needed)
   - Sometimes required for major updates
   - Press `Ctrl+Shift+Delete` and clear browsing data

---

## 🔒 Security and Privacy

### What the Extension Can Access

- **Tabs**: Create and manage Bing search tabs
- **Active Tab**: Interact with currently open tabs
- **Bing.com**: Access to Bing search pages only

### What the Extension CANNOT Do

- Access your browsing history
- Read content from non-Bing websites
- Access your passwords or personal data
- Make network requests to other sites

### Data Storage

- All settings are stored locally in your browser
- No data is sent to external servers
- No tracking or analytics

---

## 🆘 Getting Help

If you encounter issues during installation:

1. **Check this guide again** - make sure you followed all steps
2. **Review troubleshooting section** - common issues are covered above
3. **Check the repository issues** - someone might have had the same problem
4. **Create a new issue** - provide details about your problem and browser version

### When Reporting Issues Include:

- Chrome version number
- Operating system (Windows, Mac, Linux)
- Exact error messages (if any)
- Steps you followed
- Screenshots of any error screens

---

**Installation complete!** 🎉 

You're now ready to use Bing Auto Search to earn Microsoft Rewards points automatically. Click the extension icon to get started!