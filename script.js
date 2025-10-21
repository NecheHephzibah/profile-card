document.addEventListener("DOMContentLoaded", () => {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');
  if (timeElement) {
    timeElement.textContent = new Date().getTime();
  }

  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("test-contact-success");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const subject = document.getElementById("contact-subject").value.trim();
    const message = document.getElementById("contact-message").value.trim();

    let valid = true;

    // Name validation
    const nameError = document.getElementById("test-contact-error-name");
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      nameError.textContent = "Please enter a valid name.";
      valid = false;
    } else {
      nameError.textContent = "";
    }

    // Email validation
    const emailError = document.getElementById("test-contact-error-email");
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      emailError.textContent = "Please enter a valid email address.";
      valid = false;
    } else {
      emailError.textContent = "";
    }

    // Subject validation
    const subjectError = document.getElementById("test-contact-error-subject");
    if (subject.length < 10) {
      subjectError.textContent = "Subject must be at least 10 characters.";
      valid = false;
    } else {
      subjectError.textContent = "";
    }

    // Message validation
    const messageError = document.getElementById("test-contact-error-message");
    if (message.length < 10) {
      messageError.textContent = "Message must be at least 10 characters.";
      valid = false;
    } else {
      messageError.textContent = "";
    }

    // Final success message
    if (valid) {
      successMessage.textContent = "✅ Message sent successfully!";
      form.reset();
    } else {
      successMessage.textContent = "";
    }
  });
});
