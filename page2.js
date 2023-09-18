document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const response = document.getElementById("response");

    noButton.addEventListener("click", function () {
        const randomX = Math.random() * (window.innerWidth - 100);
        const randomY = Math.random() * (window.innerHeight - 100);
        noButton.style.position = "absolute";
        noButton.style.left = randomX + "px";
        noButton.style.top = randomY + "px";
    });

    yesButton.addEventListener("click", function () {
        response.textContent = "are you serious!??";
    });
});
