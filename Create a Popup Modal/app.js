let body = document.querySelector("body");
let modalBtn = document.querySelector(".modalBtn");
let clickMe = document.querySelector(".clickMe");

clickMe.addEventListener('click',() => {
  body.classList.add("active");
})
modalBtn.addEventListener('click',() => {
  body.classList.remove("active");
})
