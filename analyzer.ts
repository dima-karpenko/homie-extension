chrome.runtime.onInstalled.addListener((details) => {
    if(details.reason !== "install" && details.reason !== "update") return;
    chrome.contextMenus.create({
      "id": "sampleContextMenu",
      "title": "Sample Context Menu",
      "contexts": ["selection"]
    });
  });