// Create shadowroot with content
const container = document.getElementById("shadowContainer");
const shadowroot = container.attachShadow({ mode: "closed" });
const shadowContent = document.createElement('div');
shadowContent.textContent = "Inside a shadow root";
shadowroot.appendChild(shadowContent);

console.log("Firefox API test");

console.log("browser.dom is undefined:")
console.log(browser.dom);

console.log("element.openOrClosedShadowRoot works as expected:")
console.log(container.openOrClosedShadowRoot);
