const message = document.getElementById("message");
const xWrapper = document.getElementById("x-wrapper");
const yWrapper = document.getElementById("y-wrapper");
const xAxis = document.getElementById("xAxis");
const yAxis = document.getElementById("yAxis");

window.addEventListener("mousemove", (event) => {
  message.style.display = "none";
  xWrapper.style.display = "block";
  yWrapper.style.display = "block";

  let x = event.clientX;
  let y = event.clientY;

  xAxis.innerHTML = `${x}px`;
  yAxis.innerHTML = `${y}px`;
});
