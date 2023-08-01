const selectMenuEl = document.getElementById("menu");
const selectMenuTextEl = document.getElementById("menu-text");
const listMenuEl = document.getElementById("list-menu");

const listEl = document.querySelectorAll("#list-menu li");

const handleDropDown = () => {
  selectMenuEl.classList.toggle("rotate");
  listMenuEl.classList.toggle("hide");
};

listEl.forEach((liEl) => {
  liEl.addEventListener("click", () => {
    selectMenuTextEl.innerHTML = liEl.innerHTML;
    listMenuEl.classList.add("hide");
    selectMenuEl.classList.toggle("rotate");
  });
});

selectMenuEl.addEventListener("click", handleDropDown);
