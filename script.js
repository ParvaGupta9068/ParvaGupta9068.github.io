// ================= THEME BUTTON =================

const themeButton = document.getElementById("themeBtn");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        themeButton.innerHTML = "☀";

    } else {

        themeButton.innerHTML = "☾";

    }

});


// ================= PROJECT BUTTON =================

function viewproject() {

    window.open(
        "image/connect-project.jpeg",
        "_blank"
    );

}


// ================= CERTIFICATE =================

function viewCertificate() {

    window.open(
        "image/certificate.jpeg",
        "_blank"
    );

}


// ================= LINKEDIN / GITHUB =================

function viewproject() {

    window.open(
        "image/signup-project1.jpeg",
        "_blank"
    );

}