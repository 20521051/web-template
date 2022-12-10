/* Load  file */
loadFile();
function loadFile(){
  let slide = "slide_";
  let min = 1;
  let max = 12;
  let random = [];
  random[1]  = Math.floor(Math.random() * (max - min - 1) ) + min + 1;
  random[0]= getRndInteger(min,random[1]);
  random[2]= getRndInteger(random[1], max);
  for(let i =1;i<=3;i++){
    let _slide = slide + i;
    let x = "/src/data/img/slide"+ random[i-1]+"png";
    document.getElementsByClassName(_slide).src=x;
  }

}
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
/* navbar */
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange();//calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");//replacing the iocns class
  }
}
/* slideshow */
var slideIndex = 1;
showSlides(slideIndex);
var slides = document.getElementsByClassName("mySlides");
function setIndex(n) {
  if (n > slides.length) { return 1 }
  if (n < 1) { return slides.length }
  if (n == "prev") { return setIndex(slideIndex - 1) }
  if (n == "next") { return setIndex(slideIndex + 1) }
  return n;
}
function currentSlide(n) {
  slideIndex = setIndex(n);
  showSlides(slideIndex);
}
function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[n-1].style.display = "block";

  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  dots[n-1].className += " active";
}
setInterval(loadSlides,10000);
function loadSlides(){
  slideIndex++;
  currentSlide(slideIndex);
}
