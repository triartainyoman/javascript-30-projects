const digitInputs = document.querySelectorAll('input[type="number"]');

digitInputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    const inputValue = e.target.value;

    if (inputValue.length === 1) {
      if (index < digitInputs.length - 1) {
        digitInputs[index + 1].focus();
      }
    } else if (inputValue === "" && index > 0) {
      digitInputs[index - 1].focus();
    }
  });
});
