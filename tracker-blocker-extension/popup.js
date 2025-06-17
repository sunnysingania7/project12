document.getElementById("status").textContent = "No trackers allowed 🚫";

function loadLogs() {
    chrome.storage.local.get("logs", function (data) {
        const logs = data.logs || [];
        const logContainer = document.getElementById("logs");

        if (logs.length === 0) {
            logContainer.innerHTML = "<p>No trackers blocked yet.</p>";
        } else {
            logContainer.innerHTML = "<ul>" +
                logs.map(log =>
                    `<li>
                     <a href="${log.tracker}" target="_blank" rel="noopener noreferrer">${log.tracker}</a><br>
                    on <i>${log.page}</i>
                    <small>${log.time}</small>
                </li>`
                ).join("") +
                "</ul>";
        }
    });
}

// Clear logs button 
document.getElementById("clearBtn").addEventListener("click", () => {
    chrome.storage.local.set({ logs: [] }, () => {
        document.getElementById("logs").innerHTML = "<p>No trackers blocked yet.</p>";
        chrome.action.setBadgeText({ text: "" });
    });
});

// Load logs on popup open 
loadLogs();
