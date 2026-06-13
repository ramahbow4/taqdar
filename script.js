const logo = document.getElementById("logo");
const startBtn = document.getElementById("startBtn");
const howBtn = document.getElementById("howBtn");
const devMenu = document.getElementById("devMenu");

let logoClicks = 0;

function showScreen(screenId) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    const screen = document.getElementById(screenId);

    if (screen) {
        screen.classList.add("active");
    }

if (screenId === "homeScreen") {
    logo.style.visibility = "visible";
} else {
    logo.style.visibility = "hidden";
}
}

startBtn.addEventListener("click", () => {
    showScreen("teamScreen");
});

howBtn.addEventListener("click", () => {
    showScreen("howScreen");
});

logo.addEventListener("click", () => {

    logoClicks++;

    if (logoClicks >= 5) {
        const password = prompt("Developer Password");

        if (password === "ramahb0w4") {
            devMenu.style.display = "block";
            alert("Developer Mode Activated");
        } else {
            alert("Wrong Password");
        }

        logoClicks = 0;
    }
});
