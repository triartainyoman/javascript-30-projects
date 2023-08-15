const heightEl = document.getElementById("height");
const weightEl = document.getElementById("weight");
const errorEl = document.getElementById("error");
const resultNumber = document.getElementById("result-number");
const resultCategory = document.getElementById("result-category");
const resultCard = document.querySelector(".result");

const calculateBMI = () => {
  const height = parseFloat(heightEl.value);
  const weight = parseFloat(weightEl.value);

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    errorEl.style.display = "block";
    return false;
  }

  const bmi = weight / (height / 100) ** 2;
  const bmiCategory = getCategory(bmi);

  resultNumber.innerHTML = bmi.toFixed(2);
  resultCategory.innerHTML = bmiCategory;

  showResult();
};

const getCategory = (bmi) => {
  if (bmi < 18.5) return "underweight";
  else if (bmi < 24.9) return "normal weight";
  else if (bmi < 29.9) return "overweight";
  else return "obese";
};

const showResult = () => {
  resultCard.style.scale = 1;
  errorEl.style.display = "none";
};

const hideResult = () => {
  resultCard.style.scale = 0;
};
