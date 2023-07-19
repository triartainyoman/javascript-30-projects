const foods = [
  "Fried Rice",
  "Stinky Tofu",
  "Ichiraku Ramen",
  "Smoke BBQ Pork",
  "Bakso Beranak",
];

const filterInput = document.getElementById("filter-input");
const list = document.getElementById("list");

const filterFoods = (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredFoods = foods.filter((food) =>
    food.toLowerCase().includes(searchTerm)
  );
  populateList(filteredFoods);
};

const populateList = (filteredFoods) => {
  list.innerHTML = "";
  filteredFoods.forEach((food) => {
    const listItem = document.createElement("li");
    listItem.textContent = food;
    list.appendChild(listItem);
  });
};

window.onload = populateList(foods);

filterInput.addEventListener("input", filterFoods);
