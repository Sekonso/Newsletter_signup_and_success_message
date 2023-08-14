const form = document.querySelector("form");
const signUp = document.querySelector(".sign-up");
const success = document.querySelector(".success-message");
const dismiss = document.querySelector(".dismiss");
const emailLink = document.querySelector(".email-link");
const emailInput = document.querySelector("#email");

// Checking the size of the viewport
checkScreenSize();
window.addEventListener("resize", () => {
  checkScreenSize();
});

// Submit event
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValue = emailInput.value.trim();
  const emailPattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // Email validation
  if (emailValue.match(emailPattern)) {
    signUp.classList.add("hidden");
    success.classList.remove("hidden");
    addEmail(emailValue);
    emailInput.value = "";
    emailInput.style.border = "1px solid hsl(234, 29%, 20%)";
    emailInput.style.backgroundColor = "";
    emailInput.style.color = "";
    document.querySelector(".form p").classList.add("hidden");
  } else {
    emailInput.style.border = "1px solid red";
    emailInput.style.backgroundColor = "pink";
    emailInput.style.color = "red";
    document.querySelector(".form p").classList.remove("hidden");
  }
});

// Changing display from success message to sign-up page
dismiss.addEventListener("click", () => {
  signUp.classList.remove("hidden");
  success.classList.add("hidden");
});

// Adding email input to the success message
function addEmail(value) {
  emailLink.innerText = value;
}

// Check viewport size and swap image
function checkScreenSize() {
  if (window.innerWidth < 768) {
    document.querySelector("#image-mobile").classList.remove("hidden");
    document.querySelector("#image-desktop").classList.add("hidden");
  } else if (window.innerWidth > 768) {
    document.querySelector("#image-mobile").classList.add("hidden");
    document.querySelector("#image-desktop").classList.remove("hidden");
  }
}
