document.addEventListener('DOMContentLoaded', function () {
    getCurrentTab();
})

async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    document.getElementById(`1`).innerHTML = tab.title;
    return tab;
}

async function getAllTab() {
    let tabs = [];
    chrome.tabs.query({}, function (tabs) {
        tabs.forEach(function (tab) {
            tabs.push(tab);
        });
    });
    return tabs;
}

