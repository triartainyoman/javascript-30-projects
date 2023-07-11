const handleGenerate = () => {
  let letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  document.getElementById("colorCode").value = color;
  document.body.style.backgroundColor = color;
};

const handleCopy = () => {
  let btnCopy = document.getElementById("btnCopy");
  let copyText = document.getElementById("colorCode");

  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  btnCopy.innerHTML = "Copied";
  setInterval(function () {
    btnCopy.innerHTML = '<img src="img/icon-copy.svg" alt="Copy Icon" /> Copy';
  }, 2000);
};
