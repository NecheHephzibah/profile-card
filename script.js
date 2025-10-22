// Wrapped all functionality inside DOMContentLoaded to ensure the DOM is fully loaded before executing scripts

document.addEventListener("DOMContentLoaded", () => {
  
  // time counter in milliseconds
  const timeElement = document.querySelector('[data-testid="test-user-time"]');
  if (timeElement) {
    timeElement.textContent = new Date().getTime();
  }

  // Validation functions for contact form
  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("test-contact-success");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const subject = document.getElementById("contact-subject").value.trim();
    const message = document.getElementById("contact-message").value.trim();

    let valid = true;

    // Validates user name
    const nameError = document.getElementById("test-contact-error-name");
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      nameError.textContent = "Please enter a valid name.";
      valid = false;
    } else {
      nameError.textContent = "";
    }

    // Validate user email
    const emailError = document.getElementById("test-contact-error-email");
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      emailError.textContent = "Please enter a valid email address.";
      valid = false;
    } else {
      emailError.textContent = "";
    }

    // Validate subject
    const subjectError = document.getElementById("test-contact-error-subject");
    if (subject.length < 3) {
      subjectError.textContent = "Subject must be at least 3 characters.";
      valid = false;
    } else {
      subjectError.textContent = "";
    }

    // Validate message
    const messageError = document.getElementById("test-contact-error-message");
    if (message.length < 10) {
      messageError.textContent = "Message must be at least 10 characters.";
      valid = false;
    } else {
      messageError.textContent = "";
    }

    // If message is valid, show confirmation message
    if (valid) {
      successMessage.textContent = "✅ Message sent successfully!";
      form.reset();
    } else {
      successMessage.textContent = "";
    }
  });
});
