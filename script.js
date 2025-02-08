document.getElementById("unlock-btn").addEventListener("click", function() {
    this.innerHTML = "Mengalihkan...";
    this.style.backgroundColor = "#ff6600";
    setTimeout(() => {
        window.location.href = "https://adbluemedia.com";
    }, 2000);
});