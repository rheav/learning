chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      alert("Hello from my extension!");
    },
  });
});

/* Notes
A linha chrome.xxx -> chrome API
chrome.action.onclicked-> uma ação quando clicar na extensão e vai passar pra aba

*/
