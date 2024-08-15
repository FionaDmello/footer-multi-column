// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.
const form = document.getElementById("newsletterInputForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("email");
  const validityContainer = document.getElementById("validityMsgContainer");
  if (email.validity.valueMissing) {
    validityContainer.innerHTML = "Email address is required";
    email.classList.remove(
      "focus:outline-none",
      "focus:outline-1",
      "focus:outline-indigo-900",
      "focus:ring-2",
      "focus:ring-indigo-100",
      "focus:ring-offset-4"
    );
    email.classList.add(
      "focus:outline-none",
      "focus:outline-1",
      "focus:outline-[#DC2626]",
      "focus:ring-2",
      "focus:ring-red-200",
      "focus:ring-offset-4"
    );
  } else if (email.validity.typeMismatch) {
    validityContainer.innerHTML = "Please enter a valid email address";
    email.classList.remove(
      "focus:outline-none",
      "focus:outline-1",
      "focus:outline-indigo-900",
      "focus:ring-2",
      "focus:ring-indigo-100",
      "focus:ring-offset-4"
    );
    email.classList.add(
      "focus:outline-none",
      "focus:outline-1",
      "focus:outline-[#DC2626]",
      "focus:ring-2",
      "focus:ring-red-200",
      "focus:ring-offset-4"
    );
  } else {
    validityContainer.innerHTML = "";
    email.classList.add(
      "focus:outline-none",
      "focus:outline-1",
      "focus:outline-indigo-900",
      "focus:ring-2",
      "focus:ring-indigo-100",
      "focus:ring-offset-4"
    );
    email.classList.remove(
      "focus:outline-none",
      "focus:outline-1",
      "focus:outline-[#DC2626]",
      "focus:ring-2",
      "focus:ring-red-200",
      "focus:ring-offset-4"
    );
  }
});
