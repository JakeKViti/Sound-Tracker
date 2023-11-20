async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
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

