# Testing Recurring Daily Schedule Feature

## Overview
This document describes how to test the new recurring daily schedule feature that allows searches to run automatically every day at the same time.

## What Changed

### Core Changes
1. **background.js**:
   - Modified `scheduleSearch()` to add `recurring: true` flag to stored schedule data
   - Updated alarm listener to reschedule for the next day after execution instead of clearing
   - Automatically calculates next day's schedule after each execution

2. **popup.js**:
   - Updated UI messages to show "Daily schedule:" instead of "Scheduled for"
   - Displays recurring status to user

3. **Documentation**:
   - Updated USAGE_GUIDE.md with recurring schedule information
   - Enhanced README.md with scheduling features
   - Updated CHANGELOG.md to reflect version 1.2 changes
   - Updated manifest.json to version 1.2

## Testing Instructions

### Test 1: Schedule a Recurring Search
1. Load the extension in Chrome/Edge
2. Click the extension icon to open popup
3. Set a time (e.g., 2 minutes from now for quick testing)
4. Configure search settings (e.g., 5 searches, 5-10 sec delays)
5. Click "Schedule"
6. Verify status shows "Daily schedule: [time]"
7. Wait for scheduled time
8. Verify searches execute automatically
9. Check browser console for message: "Rescheduling recurring search for tomorrow"

### Test 2: Verify Persistence
1. Schedule a search
2. Close the popup
3. Reopen the popup
4. Verify the schedule is still shown
5. Close the browser completely
6. Reopen the browser
7. Open the extension popup
8. Verify schedule is still active

### Test 3: Cancel Schedule
1. Schedule a recurring search
2. Click "Cancel Schedule" button
3. Verify status clears
4. Verify no searches run at scheduled time

### Test 4: Schedule Persistence After Execution
1. Schedule a search for 1-2 minutes from now
2. Wait for execution
3. After searches complete, open popup
4. Verify schedule still exists for next day
5. Check storage: `chrome.storage.local.get('scheduledSearch')`
6. Verify `recurring: true` is set

### Test 5: Background Execution
1. Schedule a search
2. Close popup
3. Minimize browser
4. Wait for scheduled time
5. Verify searches execute in background
6. Open browser and check for Bing tabs

## Verification Checklist

- [ ] Schedule creates alarm with correct delay
- [ ] UI shows "Daily schedule:" message
- [ ] Schedule persists after browser restart
- [ ] Searches execute at scheduled time
- [ ] Schedule automatically reschedules for next day
- [ ] Cancel button stops future scheduled searches
- [ ] Background execution works with browser minimized
- [ ] No syntax errors in JavaScript
- [ ] manifest.json is valid
- [ ] Documentation is updated

## Expected Console Messages

When alarm triggers:
```
Scheduled search alarm triggered
Starting X searches with delays between Y-Z seconds
Rescheduling recurring search for tomorrow
Recurring search rescheduled for [next day time]
```

## Known Behavior

- If computer is off at scheduled time, that day's search is missed
- Next day's search will still run at scheduled time
- Only one recurring schedule can be active at a time
- Schedule uses settings configured at creation time
- Browser must be running (can be in background) for schedule to execute

## Rollback Plan

If issues are found, revert to previous version:
```bash
git revert HEAD~2
```

This will restore the one-time schedule behavior.
