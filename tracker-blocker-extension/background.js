// background.js

const trackerDomains = [
    "google-analytics.com",
    "facebook.net",
    "doubleclick.net",
    "googletagmanager.com"
];

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return { cancel: true};
    },
    {
        url: trackerDomains.map(domain => `*://*.${domain}/*`)
    },
    ["blocking"]
);
