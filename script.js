// Get elements
const logo = document.getElementById("logo");
const startBtn = document.getElementById("startBtn");
const howBtn = document.getElementById("howBtn");
const devMenu = document.getElementById("devMenu");

let logoClicks = 0;

// Show a screen
function showScreen(screenId) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(screenId).classList.add("active");

    // Hide logo everywhere except home
    if (screenId === "homeScreen") {
        logo.style.display = "block";
    } else {
        logo.style.display = "none";
    }
}

// Start Game
startBtn.addEventListener("click", () => {
    showScreen("teamScreen");
});

// How To Play
howBtn.addEventListener("click", () => {
    alert(
        "Create teams.\n\nChoose power-ups.\n\nChoose categories.\n\nAnswer questions.\n\nHighest score wins."
    );
});

// Developer Mode
logo.addEventListener("click", () => {

    logoClicks++;

    if (logoClicks >= 5) {

        const password = prompt("Developer Password");

        if (password === "mattmurdock") {

            devMenu.style.display = "block";

            alert("Developer Mode Activated");

        } else {

            alert("Wrong Password");

        }

        logoClicks = 0;
    }
});
