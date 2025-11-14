const menuBtn = document.getElementById("menuBtn");
const menuLinks = document.getElementById("menuLinks");

menuBtn.addEventListener("click", () => {
  menuLinks.classList.toggle("show");
});
