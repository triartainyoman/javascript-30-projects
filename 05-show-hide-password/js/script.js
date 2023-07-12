const password = document.getElementById("password");
const togglePassword = document.getElementById("toggle-password");

togglePassword.addEventListener("click", () => {
  const type = password.getAttribute("type");
  const switchType = type === "password" ? "text" : "password";

  password.setAttribute("type", switchType);
  togglePassword.classList.toggle("fa-eye-slash");
});
