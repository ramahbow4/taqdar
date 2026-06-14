const logo = document.getElementById(“logo”);
const startBtn = document.getElementById(“startBtn”);
const howBtn = document.getElementById(“howBtn”);
const devMenu = document.getElementById(“devMenu”);

let logoClicks = 0;
let teamNames = [];
let currentTeam = 0;
let teamPowerups = {};

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

startBtn.addEventListener(“click”, () => {
showScreen(“teamScreen”);
});

howBtn.addEventListener(“click”, () => {
showScreen(“howScreen”);
});

logo.addEventListener(“click”, () => {

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
        document.getElementById(\`team\${i}\`).value.trim();
    if(name === ""){
        alert("Please enter all team names.");
        return;
    }
    teamNames.push(name);
}
currentTeam = 0;
document.getElementById("powerupTeamName").textContent =
    teamNames[currentTeam];
showScreen("powerupScreen");

}

document.querySelectorAll(”.powerCard”).forEach(card => {

card.addEventListener("click", () => {
    if(card.classList.contains("selected")){
        card.classList.remove("selected");
    } else {
        const selected =
            document.querySelectorAll(".powerCard.selected");
        if(selected.length >= 3){
            alert("Choose only 3 power-ups.");
            return;
        }
        card.classList.add("selected");
    }
});

});

const powerupContinue =
document.getElementById(“powerupContinue”);

powerupContinue.addEventListener(“click”, () => {

const selected =
    document.querySelectorAll(".powerCard.selected");
if(selected.length !== 3){
    alert("Choose exactly 3 power-ups.");
    return;
}
teamPowerups[teamNames[currentTeam]] = [];
selected.forEach(card => {
    teamPowerups[teamNames[currentTeam]].push(
        card.textContent
    );
});
currentTeam++;
document.querySelectorAll(".powerCard").forEach(card => {
    card.classList.remove("selected");
});
if(currentTeam < teamNames.length){
    document.getElementById("powerupTeamName").textContent =
        teamNames[currentTeam];
} else {
    console.log(teamPowerups);
    showScreen("categoryScreen");
}

});
