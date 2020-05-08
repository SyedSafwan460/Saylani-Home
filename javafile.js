
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}



// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
  
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  setTimeout(showSlides,4000);
}

//-----------------------------------------------------------------------------------

//Get the button
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//------------------------------------------------------------------------------------
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "navbt") {
    x.className += " responsive";
  } else {
    x.className = "navbt";
  }
  
}