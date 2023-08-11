const captcha = document.getElementById("captcha");
const inputEl = document.getElementById("input");
const alertEl = document.querySelector(".alert");

const generateCaptcha = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < 6; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  captcha.value = result;
  inputEl.value = "";
};

const validateCaptcha = () => {
  const userInput = inputEl.value;
  const captchaText = captcha.value;

  alertEl.style.display = "block";
  alertEl.innerHTML =
    userInput === captchaText
      ? "CAPTCHA solved correctly!"
      : "CAPTCHA is incorrect. Please try again.";

  alertEl.classList.remove("danger", "success");
  alertEl.classList.add(userInput === captchaText ? "success" : "danger");
};
