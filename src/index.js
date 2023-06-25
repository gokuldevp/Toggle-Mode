import "./styles.css";

var toggleBtn = document.getElementById("toggleBtn");
var content = document.getElementById("content");

toggleBtn.addEventListener("change", function () {
  content.classList.toggle("dark-mode");
  content.classList.toggle("light-mode");
});
