// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// DARK MODE

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

});


// BACK TO TOP

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// RESERVATION FORM

const reservationForm =
document.getElementById("reservationForm");

reservationForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Your demo reservation request has been received!");

    reservationForm.reset();

});


// NEWSLETTER

const newsletterForm =
document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Thank you for subscribing to Aurelia!");

    newsletterForm.reset();

});