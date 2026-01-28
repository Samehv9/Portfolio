// Typed.js Initialization
var typed = new Typed(".text", {
    strings: ["Website Designer.", "Front-End Developer."],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Contact Form Submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const status = document.getElementById("form-status");
  status.textContent = "Sending...";

  emailjs.sendForm(
    "service_psflg8r",
    "template_pbth25p",
    this,
    "nGr94jSY7HCphGG7N"
  ).then(
    () => {
      status.textContent = "Message sent successfully ✅";
      this.reset();
    },
    () => {
      status.textContent = "Failed to send message ❌";
    }
  );
});
