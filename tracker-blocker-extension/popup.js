// popup.js

document.getElementById("status").textContent = "No trackers allowed 🚫";

// Show logs
chrome.storage.local.get("logs", function (data) {
    const logs = data.logs || [];
    const logContainer = document.getElementById("logs");

    if (logs.length === 0) {
        logContainer.innerHTML = "<p>No trackers blocked yet.</p>";
    } else {
        logContainer.innerHTML = "<ul>" + 
        logs.map(log => 
            `<li><strong>${log.tracker}</strong><br>on <i>${log.page}</i><br><small>${log.time}</small></li>`
        ).join("") +
        "</ul>";
    }
})
