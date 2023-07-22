const textArea = document.getElementById("input");

const handleCountWords = () => {
  const text = textArea.value;
  const words = text.trim().split(/\s+/);

  document.getElementById("result").textContent = words.length;
};

textArea.addEventListener("input", handleCountWords);
