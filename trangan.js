var slideIndexTran = 1;
showSlideTran(slideIndexTran);

function plusSildeTran(n) {
  showSlideTran(slideIndexTran += n);
}

function currentSlideTran(n) {
  showSlideTran(slideIndexTran = n);
}

function showSlideTran(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("cham");
  if (n > slides.length) {slideIndexTran = 1}    
  if (n < 1) {slideIndexTran = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexTran-1].style.display = "block";  
  dots[slideIndexTran-1].className += " active";
}