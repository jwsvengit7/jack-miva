const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();

  const email = document.getElementById("email").value.trim();

  const phone = document.getElementById("phone").value.trim();

  const message = document.getElementById("message").value.trim();

  const nameError = document.getElementById("nameError");

  const emailError = document.getElementById("emailError");

  const phoneError = document.getElementById("phoneError");

  const messageError = document.getElementById("messageError");

  const successMessage = document.getElementById("successMessage");

  nameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";

  let valid = true;

  /* Name validation */

  if (name === "") {
    nameError.textContent = "Name is required.";

    valid = false;
  }

  /* Email validation */

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    emailError.textContent = "Email is required.";

    valid = false;
  } else if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email address.";

    valid = false;
  }

  /* Phone validation */

  const phonePattern = /^[0-9]+$/;

  if (phone === "") {
    phoneError.textContent = "Phone number is required.";

    valid = false;
  } else if (!phonePattern.test(phone)) {
    phoneError.textContent = "Phone number must contain digits only.";

    valid = false;
  }

  /* Message validation */

  if (message === "") {
    messageError.textContent = "Message is required.";

    valid = false;
  }

  /* Successful submission */

  if (valid) {
    successMessage.textContent =
      "Your message has been submitted successfully!";

    contactForm.reset();
  }
});
