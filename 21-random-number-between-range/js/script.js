const minimumInput = document.getElementById("minimum");
const maximumInput = document.getElementById("maximum");
const resultCard = document.getElementById("result");
const errorCard = document.getElementById("error");

const generateNumber = () => {
  const minimum = parseInt(minimumInput.value, 10);
  const maximum = parseInt(maximumInput.value, 10);

  if (isNaN(minimum) || isNaN(maximum) || minimum >= maximum) {
    errorCard.style.display = "block";
    resultCard.style.display = "none";
    errorCard.innerText =
      "Please enter valid numbers with the minimum smaller than the maximum.";
  } else {
    const randomNumber = Math.random();
    const randomBetweenRange = randomNumber * (maximum - minimum) + minimum;

    resultCard.style.display = "block";
    errorCard.style.display = "none";
    resultCard.innerText = Math.floor(randomBetweenRange);
  }
};
