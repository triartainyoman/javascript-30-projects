const textArea = document.getElementById("input");

const convertToLowerCase = () => {
  let inputText = textArea.value;
  var convertedText = inputText.toLowerCase();
  textArea.value = convertedText;
};

const convertToUpperCase = () => {
  let inputText = textArea.value;
  var convertedText = inputText.toUpperCase();
  textArea.value = convertedText;
};

const convertToCapitalizeCase = () => {
  let inputText = textArea.value;
  let words = inputText.toLowerCase().split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  let convertedText = words.join(" ");
  textArea.value = convertedText;
};

const copyResults = () => {
  let copyText = document.getElementById("input");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
};
