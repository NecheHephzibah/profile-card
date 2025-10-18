// js function that displays time in milliseconds 
const timeElement = document.querySelector('[data-testid="test-user-time"]');

timeElement.textContent = Date.now();

setInterval(() => {
  timeElement.textContent = Date.now();
}, 1000);
