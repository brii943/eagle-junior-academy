function toggleMenu() {
    document.getElementById("nav").classList.toggle("show");
}

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("nav").classList.remove("show");
    });
});