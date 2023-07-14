const password = document.getElementById("password");
const togglePassword = document.getElementById("toggle-password");

togglePassword.addEventListener("click", () => {
  const type = password.getAttribute("type");
  const switchType = type === "password" ? "text" : "password";

  password.setAttribute("type", switchType);
  togglePassword.classList.toggle("fa-eye-slash");
});

const validationItems = [
  { id: "eight-character", regex: /^.{8,}$/, textId: "eight-character-text" },
  { id: "lowercase", regex: /[a-z]/, textId: "lowercase-text" },
  { id: "uppercase", regex: /[A-Z]/, textId: "uppercase-text" },
  { id: "one-number", regex: /\d/, textId: "one-number-text" },
  {
    id: "special-character",
    regex: /[!@#$%^&*(),.?":{}|<>]/,
    textId: "special-character-text",
  },
];

const handleChange = () => {
  const inputPassword = password.value;

  validationItems.forEach((item) => {
    const isValid = item.regex.test(inputPassword);
    const icon = document.getElementById(item.id);
    const text = document.getElementById(item.textId);

    icon.src = `/img/icon_${isValid ? "check" : "circle"}.svg`;
    text.style.opacity = isValid ? "0.5" : "1";
  });
};

password.addEventListener("input", handleChange);
