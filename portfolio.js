function darkmode() {
  var dark = document.body;
  dark.classList.toggle("dark-mode");
  var light = document.getElementById("dark-mode");
  if (light.textContent === "Dark-mode🌙") {
    var bright = (light.textContent = "Light-mode ☀️");
    console.log(bright);
  } else {
    light.textContent = "Dark-mode🌙";
  }
}
