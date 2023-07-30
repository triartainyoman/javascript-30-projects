const textArea = document.getElementById("input");
const textAreaResult = document.getElementById("result");

const flipWords = () => {
  if (isNaN(textArea.value)) {
    textAreaResult.style.display = "block";
    setTimeout(() => {
      textAreaResult.style.opacity = "1";
    }, 10);

    const words = textArea.value.split(" ");
    const reversed = words.reverse();
    const result = reversed.join(" ");
    textAreaResult.value = result;
  } else {
    textAreaResult.style.display = "none";
  }
};

const copyResult = () => {
  const copyText = document.getElementById("result");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
};

textArea.addEventListener("input", flipWords);
