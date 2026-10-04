/* =========================
   MOBILE NAVIGATION
========================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");

    const menuIsOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", menuIsOpen);
});


/* Close mobile menu after clicking a navigation link */

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
    });
});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".section-label, " +
    ".section-title, " +
    ".experience-item, " +
    ".skill-card, " +
    ".project-card, " +
    ".certification-card, " +
    ".education-item, " +
    ".publication-block, " +
    ".contact-grid"
);


/* Add the reveal class */

revealElements.forEach(function (element) {
    element.classList.add("reveal");
});


/* Observe elements entering the screen */

const revealObserver = new IntersectionObserver(
    function (entries, observer) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


/* Start observing each reveal element */

revealElements.forEach(function (element) {
    revealObserver.observe(element);
});