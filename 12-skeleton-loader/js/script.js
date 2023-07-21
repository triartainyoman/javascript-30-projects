const skeleton = document.querySelector(".skeleton-wrapper");
const card = document.querySelector(".card-wrapper");

const delay = 5000;

const runSkeleton = () => {
  setInterval(() => {
    skeleton.style.display = "none";
    card.style.display = "flex";
  }, delay);
};

runSkeleton();
