document.addEventListener('DOMContentLoaded', function () {
    //getCurrentTab();
    getAllTabs();
})

async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    document.getElementById(`1`).innerHTML = tab.title;
    return tab;
}

async function getAllTabs() {
    let tabs = [];
    i = 1;
    chrome.tabs.query({}, function (tabs) {
        tabs.forEach(function (tab) {
            document.getElementById(i).innerHTML = tab.title;
            i++
        });
    });
    return tabs;
}

