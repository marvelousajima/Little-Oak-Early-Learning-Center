/* Little Oaks website interactions and enquiry form validation. */
(() => {
  "use strict";

  const menuToggle = document.getElementById("menuToggle");
  const primaryNav = document.getElementById("primaryNav");

  function closeMenu() {
    if (!menuToggle || !primaryNav) return;
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    primaryNav.classList.remove("is-open");
  }

  if (menuToggle && primaryNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
      primaryNav.classList.toggle("is-open", !isOpen);
    });
    primaryNav.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && primaryNav.classList.contains("is-open")) {
        closeMenu();
        menuToggle.focus();
      }
    });
    window.addEventListener("resize", () => {
      if (window.matchMedia("(min-width: 761px)").matches) closeMenu();
    });
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const form = document.getElementById("enquiryForm");
  const status = document.getElementById("formStatus");
  if (!form || !status) return;

  const fields = {
    parentName: document.getElementById("parentName"),
    email: document.getElementById("email"),
    programme: document.getElementById("programme"),
    message: document.getElementById("message")
  };
  const errorElements = {
    parentName: document.getElementById("parentNameError"),
    email: document.getElementById("emailError"),
    programme: document.getElementById("programmeError"),
    message: document.getElementById("messageError")
  };

  function setError(key, message) {
    const field = fields[key];
    const error = errorElements[key];
    if (error) error.textContent = message;
    if (field) {
      if (message) field.setAttribute("aria-invalid", "true");
      else field.removeAttribute("aria-invalid");
      if (error && error.id) field.setAttribute("aria-describedby", error.id);
    }
  }

  function validate() {
    const name = fields.parentName.value.trim();
    const email = fields.email.value.trim();
    const programme = fields.programme.value;
    const message = fields.message.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const checks = {
      parentName: name.length >= 2 ? "" : "Please enter your name (at least 2 characters).",
      email: emailPattern.test(email) ? "" : "Please enter a valid email address.",
      programme: programme ? "" : "Please select a programme of interest.",
      message: message.length >= 10 ? "" : "Please enter a message of at least 10 characters."
    };
    let valid = true;
    Object.entries(checks).forEach(([key, error]) => {
      setError(key, error);
      if (error) valid = false;
    });
    return valid;
  }

  Object.entries(fields).forEach(([key, field]) => {
    const eventName = field.tagName === "SELECT" ? "change" : "input";
    field.addEventListener(eventName, () => {
      if (errorElements[key]?.textContent) validate();
    });
  });

  form.addEventListener("submit", event => {
    event.preventDefault();
    status.hidden = true;
    if (!validate()) {
      form.querySelector('[aria-invalid="true"]')?.focus();
      return;
    }
    // No form endpoint is configured. Do not transmit or retain the entered information.
    status.innerHTML = "<strong>Your details have been checked.</strong>This enquiry form is not connected to the centre’s email or enquiry system yet, so your message has not been sent. Please contact the centre through its confirmed contact channels once they are available.";
    status.hidden = false;
    status.focus();
  });
})();