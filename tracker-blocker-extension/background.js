// background.js 

// Store logs in chrome.storage 
function logBlockedTracker(domain) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const currentPage = tabs[0]?.url || "Unknown Page";

        chrome.storage.local.get({ logs: [] }, function (result) {
            const logs = result.logs;

            logs.push({
                tracker: domain,
                page: currentPage,
                time: new Date().toLocaleString()
            });
            chrome.storage.local.set({ logs: logs });
            chrome.action.setBadgeText({ text: logs.length.toString() });
            chrome.action.setBadgeBackgroundColor({ color: "#ff0000" });
        });
    });
}

// Clear logs on install
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ logs: [] });
    chrome.action.setBadgeText({ text: "" });
});

// Listen for matched rules
if (chrome.declarativeNetRequest.onRuleMatchedDebug) {
    chrome.declarativeNetRequest.onRuleMatchedDebug.addListener((info) => {
        const blockedURL = info.request?.url || "Unknown Tracker";
        logBlockedTracker(blockedURL);
    });
}
