// Display current time in milliseconds
const timeElement = document.querySelector('[data-testid="test-user-time"]');

// Render current time on page load
timeElement.textContent = Date.now();

// Optionally update every second (uncomment to show real-time)
setInterval(() => {
  timeElement.textContent = Date.now();
}, 1000);
