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
setInterval(loadSlides,5000);
function loadSlides(){
  slideIndex++;
  currentSlide(slideIndex);
}