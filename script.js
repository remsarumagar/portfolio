//================ scroll sections active link =================

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");

        document
          .querySelector('header nav a[href*="' + id + '"]')
          .classList.add("active");
      });
    }
  });

  /*================ sticky navbar =================*/

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);
};

//================ mobile menu =================

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

//================ close menu after clicking link =================

document.querySelectorAll(".navbar a").forEach((link) => {
  link.onclick = () => {
    menuIcon.classList.remove("fa-xmark");
    navbar.classList.remove("active");
  };
});
//================ typing animation =================

const typingText = document.querySelector("#typing-text");

const text = "Frontend Developer";

let index = 0;
let deleting = false;

function typeEffect() {

    if (!deleting) {

        // Type one letter
        typingText.textContent = text.substring(0, index + 1);

        index++;

        // When complete, wait before deleting
        if (index === text.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

        setTimeout(typeEffect, 100);

    } else {

        // Delete one letter
        typingText.textContent = text.substring(0, index - 1);

        index--;

        // When completely deleted, start typing again
        if (index === 0) {

            deleting = false;

            setTimeout(typeEffect, 500);

            return;
        }

        setTimeout(typeEffect, 60);
    }
}

typeEffect();