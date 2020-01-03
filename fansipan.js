var slideIndex = 1;
showSlidesFan(slideIndex);

function plusSlidesFan(n) {
  showSlidesFan(slideIndex += n);
}

function currentSlideFan(n) {
  showSlidesFan(slideIndex = n);
}

function showSlidesFan(n) {
  var i;
  var slides = document.getElementsByClassName("slidesFan");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}