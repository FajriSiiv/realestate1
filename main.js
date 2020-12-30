const nav = document.querySelector(".navbar");
// const arrowFot = document.querySelector("footer span");
// const linkText = document.querySelectorAll(".link-text");
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    nav.style.top = "0";
    nav.style.backgroundColor = "white";
  } else {
    nav.style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
};
