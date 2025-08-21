const toggleSwitch = document.getElementById("theme_toggle");

// Apply saved theme on load
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark_mode");
    toggleSwitch.checked = true;
}

// Toggle theme
toggleSwitch.addEventListener("change", function () {
    if (this.checked) {
        document.body.classList.add("dark_mode");
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.remove("dark_mode");
        localStorage.setItem("theme", "light");
    }
});