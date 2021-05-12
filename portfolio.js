function togglenav() {
  var nav = document.querySelector(".list");
  console.log(nav.style.display);
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}
function darkmode() {
  var dark = document.body;
  dark.classList.toggle("dark-mode");
}
