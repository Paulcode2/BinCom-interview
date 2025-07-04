const carousel = document.getElementById("images");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
// const toggleBtn = document.getElementById("menu-toggle");
// const nav = document.querySelector("nav");
// const navLinks = document.querySelectorAll(".nav-link");

const scrollAmount = 320;

nextBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});

// NavBar
// toggleBtn.addEventListener("click", () => {
//   nav.classList.toggle("open");
// });

// navLinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     nav.classList.remove("open");

//     navLinks.forEach((l) => l.classList.remove("active"));
//     link.classList.add("active");
//   });
// });
