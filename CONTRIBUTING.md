# Contributing to Bing Auto Search

Thank you for your interest in contributing to Bing Auto Search! This document provides guidelines for contributing to the project.

## 🚀 Getting Started

### Prerequisites
- Google Chrome browser
- Basic knowledge of JavaScript, HTML, and CSS
- Understanding of Chrome Extension APIs (helpful but not required)

### Development Environment Setup

1. **Fork and Clone**
   ```bash
   git clone https://github.com/YOUR-USERNAME/bing_auto_search.git
   cd bing_auto_search
   ```

2. **Load the Extension for Development**
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" in the top-right corner
   - Click "Load unpacked" and select the project directory
   - The extension will be loaded and ready for testing

3. **Make Changes**
   - Edit the relevant files (`background.js`, `popup.js`, `popup.html`, etc.)
   - The extension will automatically reload in most cases
   - For major changes, you may need to click the refresh button in `chrome://extensions/`

## 🛠️ Development Guidelines

### Code Style

- Use consistent indentation (2 spaces for HTML/CSS, 4 spaces for JavaScript)
- Use meaningful variable and function names
- Add comments for complex logic
- Follow existing code patterns and conventions

### File Structure
```
bing_auto_search/
├── manifest.json          # Extension metadata and permissions
├── background.js          # Service worker with search logic
├── popup.html            # Extension popup UI
├── popup.js              # Popup interaction handlers
├── icons/                # Extension icons
├── README.md             # Main documentation
├── CONTRIBUTING.md       # This file
└── docs/                 # Additional documentation (if any)
```

### Key Components

#### Background Script (`background.js`)
- Contains the `BingSearchManager` class
- Handles search automation logic
- Manages tab creation and timing
- Contains the keyword database

#### Popup Interface (`popup.html` + `popup.js`)
- Provides user interface for configuration
- Handles user input validation
- Displays progress and status updates
- Manages communication with background script

#### Manifest (`manifest.json`)
- Defines extension metadata and permissions
- Specifies required Chrome APIs
- Must be updated for any new permissions

## 🔧 Types of Contributions

### 🐛 Bug Fixes
- Check existing issues before creating a new one
- Provide detailed reproduction steps
- Include browser version and extension version
- Test your fix thoroughly before submitting

### ✨ New Features
- Discuss major features in an issue first
- Ensure features align with the extension's purpose
- Add appropriate error handling
- Update documentation as needed

### 📝 Documentation
- Improve existing documentation
- Add code comments
- Create tutorials or guides
- Fix typos and improve clarity

### 🎨 UI/UX Improvements
- Maintain consistency with existing design
- Test on different screen sizes
- Consider accessibility guidelines
- Preserve existing functionality

## 🧪 Testing

### Manual Testing
1. Load the extension in Chrome
2. Test all functionality:
   - Starting/stopping searches
   - Progress tracking
   - Tab management
   - Error handling
3. Test edge cases:
   - Invalid input values
   - Network connectivity issues
   - Tab permission scenarios

### Test Scenarios
- [ ] Extension loads without errors
- [ ] Popup opens and displays correctly
- [ ] Input validation works properly
- [ ] Searches execute with proper delays
- [ ] Progress updates in real-time
- [ ] Stop functionality works immediately
- [ ] Tab cleanup works correctly
- [ ] Error messages are user-friendly

## 📋 Pull Request Process

### Before Submitting
1. **Test thoroughly** on your local environment
2. **Update documentation** if needed
3. **Follow the existing code style**
4. **Ensure no console errors** appear during normal operation

### PR Description Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] UI/UX improvement
- [ ] Other (please describe)

## Testing
- [ ] Manual testing completed
- [ ] Edge cases considered
- [ ] No console errors

## Screenshots (if applicable)
[Add screenshots of UI changes]

## Additional Notes
[Any additional information]
```

### Review Process
1. Maintainers will review your PR
2. Address any feedback or requested changes
3. Once approved, your PR will be merged
4. Thank you for contributing! 🎉

## 🚨 Important Considerations

### Legal and Ethical Guidelines
- **Respect Rate Limits**: Don't create features that could overwhelm servers
- **User Privacy**: Don't collect or transmit user data
- **Terms of Service**: Ensure compliance with Microsoft's ToS
- **Responsible Usage**: Promote ethical use of the extension

### Technical Limitations
- Follow Chrome Extension Manifest V3 requirements
- Respect Chrome's permission model
- Consider performance impact of changes
- Maintain compatibility with current Chrome versions

## 🤔 Questions?

- Check existing issues and discussions
- Create an issue for questions about contributing
- Be respectful and patient with responses

## 🏆 Recognition

Contributors will be acknowledged in:
- README.md file
- Release notes (for significant contributions)
- GitHub contributor statistics

Thank you for helping make Bing Auto Search better for everyone! 🙏