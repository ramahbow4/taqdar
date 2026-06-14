const logo = document.getElementById("logo");
const startBtn = document.getElementById("startBtn");
const howBtn = document.getElementById("howBtn");
const devMenu = document.getElementById("devMenu");

let logoClicks = 0;
let teamNames = [];

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

    window.scrollTo(0, 0);
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
function selectTeams(numberOfTeams){

const container = document.getElementById("teamInputs");
let html = "<h2>Enter Team Names</h2>";
for(let i = 1; i <= numberOfTeams; i++){
    html += `
        <input
            type="text"
            id="team${i}"
            placeholder="Team ${i}"
        >
    `;
}
html += `
    <button onclick="saveTeams(${numberOfTeams})">
        Continue
    </button>
`;
container.innerHTML = html;

}
function saveTeams(numberOfTeams){

teamNames = [];
for(let i = 1; i <= numberOfTeams; i++){
    const name =
        document.getElementById(`team${i}`).value.trim();
    if(name === ""){
        alert("Please enter all team names.");
        return;
    }
    teamNames.push(name);
}
document.getElementById("powerupTeamName").textContent =
    teamNames[0];
showScreen("powerupScreen");

}
let selectedPowerups = [];

document.querySelectorAll(”.powerCard”).forEach(card => {

card.addEventListener("click", () => {
    const powerup = card.textContent;
    if(card.classList.contains("selected")){
        card.classList.remove("selected");
        selectedPowerups =
            selectedPowerups.filter(
                item => item !== powerup
            );
    } else {
        if(selectedPowerups.length >= 3){
            alert("Choose only 3 power-ups.");
            return;
        }
        card.classList.add("selected");
        selectedPowerups.push(powerup);
    }
});

});
