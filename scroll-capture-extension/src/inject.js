(function () {
  const script = document.createElement("script");
  script.src = chrome.runtime.getURL("html2canvas.min.js");
  script.onload = () => {
    const logic = document.createElement("script");
    logic.src = chrome.runtime.getURL("logic.js");
    document.body.appendChild(logic);
  };
  document.body.appendChild(script);
})();