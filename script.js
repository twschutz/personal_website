function openModalPW() {
  var modal = document.getElementById("modal-pw");
  var btn = document.getElementById("btn-pw");
  modal.style.display = "block";
  showSlidesPW(1);
}

function openModalEA() {
  var modal = document.getElementById("modal-ea");
  var btn = document.getElementById("btn-ea");
  modal.style.display = "block";
  showSlidesEA(1);
}

function openModalTM() {
  var modal = document.getElementById("modal-tm");
  var btn = document.getElementById("btn-tm");
  modal.style.display = "block";
}

function closeModalPW() {
  var modal = document.getElementById("modal-pw");
  var btn = document.getElementById("btn-pw");
  modal.style.display = "none";
}

function closeModalEA() {
  var modal = document.getElementById("modal-ea");
  var btn = document.getElementById("btn-ea");
  modal.style.display = "none";
}

function closeModalTM() {
  var modal = document.getElementById("modal-tm");
  var btn = document.getElementById("btn-tm");
  modal.style.display = "none";
}

var slideIndexPW = 1;
showSlidesPW(slideIndexPW);

function plusSlidesPW(n) {
  showSlidesPW(slideIndexPW += n);
}

function currentSlidePW(n) {
  showSlidesPW(slideIndexPW = n);
}

var slideIndexEA = 1;
showSlidesEA(slideIndexEA);

function plusSlidesEA(n) {
  showSlidesEA(slideIndexEA += n);
}

function currentSlideEA(n) {
  showSlidesEA(slideIndexEA = n);
}

var slideIndexTM = 1;
showSlidesEA(slideIndexTM);

function plusSlidesTM(n) {
  showSlidesEA(slideIndexTM += n);
}

function currentSlideTM(n) {
  showSlidesEA(slideIndexTM = n);
}

function showSlidesPW(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesPW");
  var dots = document.getElementsByClassName("dotPW");
  if (n > slides.length) {slideIndexPW = 1}
  if (n < 1) {slideIndexPW = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexPW-1].style.display = "block";
  dots[slideIndexPW-1].className += " active";
}

function showSlidesEA(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesEA");
  var dots = document.getElementsByClassName("dotEA");
  if (n > slides.length) {slideIndexEA = 1}
  if (n < 1) {slideIndexEA = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexEA-1].style.display = "block";
  dots[slideIndexEA-1].className += " active";
}
