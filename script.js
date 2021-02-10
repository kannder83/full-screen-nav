const navBar = document.getElementById("navBar");
const closeBtn = document.getElementById("closeBtn");
const openBtn = document.getElementById("openBtn");

closeBtn.addEventListener("click", () => {
  navBar.style.height = "0";
});

openBtn.addEventListener("click", () => {
  navBar.style.height = "100%";
});
