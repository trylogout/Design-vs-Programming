const sliderBgEle = document.querySelector(".slider");
const starsEle = document.querySelector(".stars");
const sphereEle = document.querySelector(".sphere");
const moonEle = document.querySelector(".moon");
const cloudsEle = document.querySelector(".clouds");
const bodyEle = document.body;

sliderBgEle.addEventListener("click", () => {
  sliderBgEle.classList.toggle("night");
  starsEle.classList.toggle("night");
  sphereEle.classList.toggle("night");
  moonEle.classList.toggle("night");
  cloudsEle.classList.toggle("night");
  bodyEle.classList.toggle("night");
});