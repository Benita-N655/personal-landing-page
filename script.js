const toggle = document.getElementById("theme-toggle");

function setTheme(isDark) {
  document.body.classList.toggle("dark", isDark);
  toggle.textContent = isDark ? "Light mode" : "Dark mode";
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

// On page load, restore the saved choice
setTheme(localStorage.getItem("theme") === "dark");

toggle.addEventListener("click", () => {
  setTheme(!document.body.classList.contains("dark"));
});