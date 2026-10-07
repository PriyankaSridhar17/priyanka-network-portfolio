/* =========================
   MOBILE NAVIGATION
========================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navigationLinks = document.querySelectorAll(".nav-links a");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
});


/* Close mobile menu after clicking a nav link */

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
    ".about-grid, " +
    ".experience-item, " +
    ".skill-card, " +
    ".project-card, " +
    ".certification-card, " +
    ".education-item, " +
    ".publication-card, " +
    ".contact-grid"
);


revealElements.forEach(function (element) {
    element.classList.add("reveal");
});


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


revealElements.forEach(function (element) {
    revealObserver.observe(element);
});


/* =========================
   ACTIVE NAV LINK
========================= */

const sections = document.querySelectorAll("main section[id]");


const sectionObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                const currentId = entry.target.getAttribute("id");

                navigationLinks.forEach(function (link) {
                    link.classList.remove("active");

                    if (link.getAttribute("href") === "#" + currentId) {
                        link.classList.add("active");
                    }
                });

            }

        });

    },
    {
        rootMargin: "-35% 0px -55% 0px"
    }
);


sections.forEach(function (section) {
    sectionObserver.observe(section);
});