const inputNumber = document.getElementById("inputNumber");
const resultCard = document.getElementById("result");
const errorCard = document.getElementById("error");

const convertToRoman = () => {
  let result = "";
  let number = inputNumber.valueAsNumber;

  if (isNaN(number) || number < 1 || number > 4999) {
    errorCard.style.display = "block";
    resultCard.style.display = "none";
    errorCard.innerHTML = "Please enter a valid number between 1 and 4999!";
    return false;
  }

  const romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  for (const numeral of romanNumerals) {
    while (number >= numeral.value) {
      result += numeral.numeral;
      number -= numeral.value;
    }
  }

  errorCard.style.display = "none";
  resultCard.innerText = result;
  resultCard.style.display = "block";
};
