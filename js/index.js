// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.
const form = document.getElementById("newsletterInputForm");
const email = document.getElementById("email");
const toastContainer = document.getElementById("toastContainer");
const toastStatus = document.getElementById("toastStatus");
const toastMsg = document.getElementById("toastMsg");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

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
    validityContainer.innerHTML = "Please enter a valid email address.";
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
    const formData = new FormData(form);
    try {
      const response = await fetch(
        "https://www.greatfrontend.com/api/projects/challenges/newsletter",
        {
          method: "POST",
          body: JSON.stringify({ email: formData.get("email") }),
        }
      );
      if (response.status === 200) {
        toastContainer.classList.remove("bg-red-50");
        toastContainer.classList.add("bg-green-50");
        toastStatus.innerHTML = "Success";
        toastStatus.classList.remove("text-red-700");
        toastStatus.classList.add("text-green-700");
        toastMsg.innerHTML =
          "Subscription successful! Please check your email to confirm.";
        toastMsg.classList.remove("text-red-700");
        toastMsg.classList.add("text-green-700");
      } else {
        toastContainer.classList.remove("bg-green-50");
        toastContainer.classList.add("bg-red-50");
        toastStatus.innerHTML = "Error";
        toastStatus.classList.remove("text-green-700");
        toastStatus.classList.add("text-red-700");
        toastMsg.innerHTML =
          "Failed to subscribe. Please ensure your email is correct or try again later.";
        toastMsg.classList.remove("text-green-700");
        toastMsg.classList.add("text-red-700");
      }
    } catch (error) {
      toastContainer.classList.remove("bg-green-50");
      toastContainer.classList.add("bg-red-50");
      toastStatus.innerHTML = "Error";
      toastStatus.classList.remove("text-green-700");
      toastStatus.classList.add("text-red-700");
      toastMsg.innerHTML =
        "Failed to subscribe. Please ensure your email is correct or try again later.";
      toastMsg.classList.remove("text-green-700");
      toastMsg.classList.add("text-red-700");
    }
  }
});
