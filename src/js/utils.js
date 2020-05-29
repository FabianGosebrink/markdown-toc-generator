function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function getDate() {
    document.getElementById("date").innerHTML = new Date().getUTCFullYear();
}