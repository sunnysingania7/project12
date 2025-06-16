// background.js 

// Helper: Store logs in local storage 
function logBlockedTracker(domain) {
    chrome.storage.local.get({ logs: [] }, function (result) {
        const logs = result.logs;
        const newLog = {
            tracker: domain,
            page: "Blocked by rule", 
            time: new Date().toLocaleString()
        };
        logs.push(newLog);
        chrome.storage.local.set({ logs: logs });

        // Update badge 
        chrome.action.setBadgeText({ text: logs.lenth.toString() });
        chrome.action.setBadgeBackgroundColor({ color: "#ff0000" });
    });
}

// Log once on install (optional)
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ logs: [] }); // clear logs 
    chrome.action.setBadgeText({ text: "" });  
});
