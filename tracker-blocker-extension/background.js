// background.js

let trackerDomains = [];
let blockedCount = 0;

// Load tracker list
fetch('data/trackers.json')
    .then(response => response.json())
    .then(data => {
        trackerDomains = data.map(domain => `*://*.${domain}/*`);

        chrome.webRequest.onBeForeRequest.addListener(
            function(details) {
                blockedCount++;
                chrome.action.setBadgeText({ text: blockedCount.toString() });
                chrome.action.setBadgeBackgroundColor({ color: "#FF0000" });
                return { cancel: true };
            },
            { urls: trackerDomains },
            ["blocking"]
        );
    });
