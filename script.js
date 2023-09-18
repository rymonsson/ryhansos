document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("nameInput");
    const goButton = document.getElementById("goButton");
    const result = document.getElementById("result");
    const loadingOverlay = document.getElementById("loadingOverlay");
    const sweetContainer = document.getElementById("sweetContainer");

    goButton.addEventListener("click", function () {
        const name = nameInput.value;

        if (name.toLowerCase() === "anya") {
            loadingOverlay.style.display = "block";
            setTimeout(function () {
                loadingOverlay.style.display = "none";
                sweetContainer.style.display = "block";
                // Arahkan ke halaman kedua setelah loading selesai
                window.location.href = "page2.html";
            }, 5000); // Menunggu 5 detik sebelum menampilkan pesan selamat datang
        } else {
            result.textContent = "I don't know you";
        }
    });
});

