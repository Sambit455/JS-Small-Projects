let currentPage = 0;
let pages = document.querySelectorAll(".page");
let nextButton = document.querySelector(".next");
let prevButton = document.querySelector(".prev");

// function for NextButton
function next(){
  if(currentPage == pages.length-1){
    return;
  }
  pages[currentPage++].classList.remove("active");
  pages[currentPage].classList.add("active");
}

// Add a EventListener in nextButton fn.
nextButton.addEventListener('click',next);


// function for PrevButton
function prev(){
  if(currentPage == 0){
    return;
  }
  pages[currentPage--].classList.remove("active");
  pages[currentPage].classList.add("active");
}

// Add a EventListener in nextButton fn.
prevButton.addEventListener('click',prev);

// function for other pages
for(let i=0;i<pages.length;i++)
  pages[i].addEventListener('click', () => {
    if(currentPage==i){
      return;
    }
    pages[currentPage].classList.remove("active");
    pages[i].classList.add("active");
    currentPage=i;
  })