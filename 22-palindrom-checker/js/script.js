const inputEl = document.getElementById("input");
const resultEl = document.getElementById("result");

const checkPalindrom = () => {
  const text = inputEl.value.trim();
  resultEl.classList.remove("hide");

  if (text.length == 0) {
    resultEl.classList.add("error");
    resultEl.classList.remove("success");
    resultEl.textContent = "Input text can't be empty!";
    return;
  }

  const textClean = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  const textReversed = textClean.split("").reverse().join("");

  if (textClean === textReversed) {
    resultEl.classList.add("success");
    resultEl.classList.remove("error");
    resultEl.textContent = `"${text}" is a palindrome!`;
  } else {
    resultEl.classList.add("error");
    resultEl.classList.remove("success");
    resultEl.textContent = `"${text}" is not a palindrome.`;
  }
};
