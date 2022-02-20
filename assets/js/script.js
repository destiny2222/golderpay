const navToggle = document.querySelector("#navToggle");
const navClosedIcon = document.querySelector("#navClosed");
const navOpenIcon = document.querySelector("#navOpen");
const navIcon = document.querySelectorAll(".navIcon");
const nav = document.querySelector("nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  navIcon.forEach((icon) => {
    icon.classList.toggle("hidden");
  });
});


window.addEventListener(
  "resize", () => {
    if (document.body.clientWidth > 720) {
      nav.classList.remove("open");
      navIcon.forEach((icon) => {
        icon.classList.remove("hidden");
      });
      navOpenIcon.classList.add("hidden");
    }
  },
  { passive: false }
);

var faq = document.getElementsByClassName("faq-page");
var i;

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}

