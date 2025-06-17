# Tracker Blocker - Chrome Extension 

Welcome to **Tracker Blocker** - a privacy-focused Chrome extensin built using **Manifest V3**, crafted ruring my internship to understand how online tracking works and how we can prevent it at the browser level. 

This lightweight tool quitly blocks known tracking domains while logging their activity. Each blocked request is recorded with the tracker URL, the site it appeared on, and the exact time - all viewable inside a clean, popup-based interface. 

--- 

## Behind the Build 

The idea was to build a privacy utility that doesn't just block - but also educates. I wanted users (and myself) to see which trackers are being blocked in real time, and understand how they behave across different websites. 
The project taught me how browser APIs work, especially `declarativeNetRequest`, how Chorme extensions are structured, and how local storage and dynamic UI updates work together to form a smooth user experience. 

--- 

## Key Highlights 

- Blocks tracking scripts from domains like: 
    - `google-analytics.com`
    - `doubleclick.net`
    - `facebook.net`
    - `gooletagmanager.com`
- Each blocked tracker is : 
    - Logged with URL, website, and timestamp 
    - Displayed in a styled scrollable popup 
- Includes a 🔴 badge count of total blocked trackers 
- Comes with a 🗑️ "Clear Logs" button 
- Fully silent - doesn't interrupt browsing 

--- 

## Tech Stack 

Layer       : Tools/Techonologies 
Backend     : JavaScript (Manifest V3)
Frontend    : HTML, CSS 
Chrome APIs : declarativeNetRequest, storage, tabs, action 

--- 

## Project Structure 

tracker-blocker-extension/ 
    - background.js                                                    # Handles rule matches and logging 
    - manifest.json                                                    # Extension config (Manifest V3)
    - popup.html                                                       # UI shown on clicking the extension icon 
    - popup.js                                                         # Loads & display logs, clear button logic 
    - style.css                                                        # UI styling 
    - data/ 
        - rules.json                                                   # Tracking domains to block 
    - icons/ 
        - icon48.png                                                   # Extension icon 
    - docs/ 
        - README.md                                                    # This file 
        - Internship Report - Tracker Blocker - Chrome Extension.pdf   # internship submission report 

--- 

## How to Use 

```bash 
1. Clone the repo or download the folder 
2. Go to chrome://extension 
3. Enable "Developer Mode" 
4. Click "Load unpacked" and select the folder
```

Once loaded, visit any website - tracckers will be blocked and shown in the popup. You can click 🗑️ to clear the log anytime. 

--- 

## Internship Reflection 

This project was built as part of my internship submission. The entire extension logic, rule definitions, logging system, and UI were developed independently by me. 

*A small amount of help was taken from OpenAI's ChatGPT for correcting syntax errors and understanding Manifest V3 limitations - especially while setting up dynamic rules and logging* 

--- 

## License 

This extension is open-source and MIT licensed. 

--- 

## Internship Report 

A complete PDF report is available inside : 
[`docs/TrackerBlocker_Report.pdf`] 
(./docs/TrackerBlocker_Report.pdf) 

--- 

Thank you for reading! 
If you're passionate about privacy, feel free to fork the repo or suggest improvements.
