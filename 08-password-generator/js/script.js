const generatePassword = () => {
  const passwordLength = document.getElementById("password-length").value;
  const randomCharacters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    const random = Math.floor(Math.random() * randomCharacters.length);
    password += randomCharacters[random];
  }

  document.getElementById("result-password").value = password;
};

const handleCopy = () => {
  const copyText = document.getElementById("result-password");

  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
};
