// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.
const form = document.getElementById("newsletterInputForm");

form.addEventListener("submit", (event) => {
  const email = document.getElementById("email");
  console.log("here", email.validity);

  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
    email.reportValidity();
  } else {
    email.setCustomValidity("");
    email.reportValidity();
  }
});
