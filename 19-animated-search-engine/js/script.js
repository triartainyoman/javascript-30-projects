const searchBar = document.querySelector(".search-bar__container");
const iconSearch = document.querySelector(".icon-search");

const inputEl = document.getElementById("input");

const redirectToGoogle = (event) => {
  if (event.key == "Enter") {
    let text = inputEl.value;
    let textFormated = text.replace(/ /g, "+");
    let url = `https://www.google.com/search?q=${textFormated}`;

    window.location.href = url;
  }
};

iconSearch.addEventListener("click", () => {
  searchBar.classList.toggle("active");
});

inputEl.addEventListener("keydown", redirectToGoogle);
