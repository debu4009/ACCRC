// Email validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  const email = document.getElementById("email");
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.match(emailPattern)) {
    email.classList.add("is-invalid");
    e.preventDefault();
  } else {
    email.classList.remove("is-invalid");
  }
});
