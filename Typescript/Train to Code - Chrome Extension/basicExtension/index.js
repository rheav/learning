async function sayHello() {
  let [tab] = await chrome.tabs.query({ active: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      document.body; //esse body aqui é o body da aba ativa atual
      alert("Hello from my extension");
    },
  });
}

document.getElementById("myButton").addEventListener("click", sayHello);
