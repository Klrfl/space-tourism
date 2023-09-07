const navOpenBtn = document.querySelector("nav .nav-btn.open");
const navCloseBtn = document.querySelector("nav .nav-btn.close");
const navLinks = document.querySelector(".nav-links");

navOpenBtn.addEventListener("click", () => {
  navLinks.classList.add("active");
});

navCloseBtn.addEventListener("click", () => {
  navLinks.classList.remove("active");
});
