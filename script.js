const logo = document.getElementById("logo");
const startBtn = document.getElementById("startBtn");
const howBtn = document.getElementById("howBtn");
const devMenu = document.getElementById("devMenu");

let logoClicks = 0;

let teamNames = [];
let currentTeam = 0;

let teamPowerups = {};
let selectedCategories = [];
let currentCategoryTeam = 0;

function showScreen(screenId){

document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
});
document.getElementById(screenId).classList.add("active");
if(screenId === "homeScreen"){
    logo.style.visibility = "visible";
}else{
    logo.style.visibility = "hidden";
}
window.scrollTo(0,0);

}

startBtn.addEventListener("click", () => {
showScreen(“teamScreen”);
});

howBtn.addEventListener("click", () => {
showScreen("howScreen");
});

logo.addEventListener("click", () => {

logoClicks++;
if(logoClicks >= 5){
    const password =
    prompt("Developer Password");
    if(password === "ramahb0w4"){
        devMenu.style.display = "block";
        alert(
            "Developer Mode Activated"
        );
    }else{
        alert("Wrong Password");
    }
    logoClicks = 0;
}

});

function selectTeams(numberOfTeams){

const teamInputs =
document.getElementById("teamInputs");
let html =
"<h2>Enter Team Names</h2>";
for(let i=1;i<=numberOfTeams;i++){
    html += `
        <input
            type="text"
            id="team${i}"
            placeholder="Team ${i}"
        >
    `;
}
html += `
    <button
        onclick="saveTeams(${numberOfTeams})"
    >
        Continue
    </button>
`;
teamInputs.innerHTML = html;

}

function saveTeams(numberOfTeams){

teamNames = [];
for(let i=1;i<=numberOfTeams;i++){
    const name =
    document.getElementById(
        `team${i}`
    ).value.trim();
    if(name === ""){
        alert(
            "Please enter all team names."
        );
        return;
    }
    teamNames.push(name);
}
currentTeam = 0;
document.getElementById(
    "powerupTeamName"
).textContent =
teamNames[currentTeam];
showScreen("powerupScreen");

}

document.querySelectorAll(
".powerCard"
).forEach(card => {

card.addEventListener(
    "click",
    () => {
    if(
        card.classList.contains(
            "selected"
        )
    ){
        card.classList.remove(
            "selected"
        );
    }else{
        const selected =
        document.querySelectorAll(
            ".powerCard.selected"
        );
        if(
            selected.length >= 3
        ){
            alert(
                "Choose only 3 power-ups."
            );
            return;
        }
        card.classList.add(
            "selected"
        );
    }
});

});

document.getElementById(
"powerupContinue"
).addEventListener(
"click",
() => {

const selected =
document.querySelectorAll(
    ".powerCard.selected"
);
if(selected.length !== 3){
    alert(
        "Choose exactly 3 power-ups."
    );
    return;
}
teamPowerups[
    teamNames[currentTeam]
] = [];
selected.forEach(card => {
    teamPowerups[
        teamNames[currentTeam]
    ].push(
        card.textContent
    );
});
currentTeam++;
document.querySelectorAll(
    ".powerCard"
).forEach(card => {
    card.classList.remove(
        "selected"
    );
});
if(
    currentTeam <
    teamNames.length
){
    document.getElementById(
        "powerupTeamName"
    ).textContent =
    teamNames[currentTeam];
    alert(
        teamNames[currentTeam] +
        ", choose your 3 power-ups."
    );
}else{
    alert(
        "Power-Ups Complete!"
    );
}

});
const categories = [
"Islamic",
"Quran",
"Western Music",
"Khaleji Music",
"Medicine",
"Nerds",
"Girls Interests",
"Handbag",
"Makeup",
"Brands",
"Perfume",
"Cars",
"Soccer",
"Sports",
"Trends",
"Disney",
"Marvel",
"English Language and Literature",
"Arabic Language and Literature",
"Supermarket",
"Movies",
"Shahid",
"Disney+",
"Netflix",
"Flags",
"Languages",
"General Knowledge",
"Saudi History",
"One Piece",
"Capital Cities",
"Math",
"Technology",
"Animals",
"Logos",
"Flowers",
"Sea Animals",
"TikTok",
"Memes",
"Drinks",
"Restaurants",
"History",
"Geography",
"Video Games",
"Space",
"Books",
"Foods",
"Desserts",
"Fast Foods",
"Inventors",
"Landmarks",
"Physics",
"Chemistry",
"Biology",
"World History",
"Brain Teasers",
"Football Players",
"Basketball",
"Formula 1",
"Harry Potter",
"Pokémon",
"Minecraft",
"Roblox",
"Star Wars",
"Pixar",
"DreamWorks",
"Programming and Coding",
"Red Sea Mall",
"Dates",
"AI & ChatGPT",
"Internet History",
"Viral Videos",
"Jeddah",
"Riyadh",
"Makkah",
"Madinah",
"Anime",
"Studio Ghibli",
"Chess",
"Formula E"
];

let scores = {};

function loadCategories(){

const container =
document.getElementById(
    "categoryCards"
);
container.innerHTML = "";
categories.forEach(category => {
    const button =
    document.createElement(
        "button"
    );
    button.className =
    "categoryCard";
    button.textContent =
    category;
    button.addEventListener(
        "click",
        () => {
        if(
            button.classList.contains(
                "selected"
            )
        ){
            button.classList.remove(
                "selected"
            );
        }else{
            const selected =
            document.querySelectorAll(
                ".categoryCard.selected"
            );
            if(
                selected.length >= 3
            ){
                alert(
                    "Choose only 3 categories."
                );
                return;
            }
            button.classList.add(
                "selected"
            );
        }
    });
    container.appendChild(
        button
    );
});

}

document.getElementById(
"categoryContinue"
).addEventListener(
"click",
() => {

const selected =
document.querySelectorAll(
    ".categoryCard.selected"
);
if(
    selected.length !== 3
){
    alert(
        "Choose exactly 3 categories."
    );
    return;
}
selected.forEach(card => {
    selectedCategories.push(
        card.textContent
    );
});
currentCategoryTeam++;
if(
    currentCategoryTeam <
    teamNames.length
){
    document.getElementById(
        "categoryTeamName"
    ).textContent =
    teamNames[currentCategoryTeam];
    document.querySelectorAll(
        ".categoryCard"
    ).forEach(card => {
        card.classList.remove(
            "selected"
        );
    });
    alert(
        teamNames[currentCategoryTeam] +
        ", choose your 3 categories."
    );
}else{
    buildBoard();
    setupScoreBoard();
    showScreen(
        "boardScreen"
    );
}

});

function buildBoard(){

const board =
document.getElementById(
    "boardGrid"
);
board.innerHTML = "";
selectedCategories.forEach(category => {
    const div =
    document.createElement(
        "div"
    );
    div.className =
    "boardCategory";
    div.innerHTML = `
        <h3>${category}</h3>
        <button class="questionBtn">
            200
        </button>
        <button class="questionBtn">
            400
        </button>
        <button class="questionBtn">
            600
        </button>
    `;
    board.appendChild(div);
});

}

function setupScoreBoard(){

const selector =
document.getElementById(
    "teamSelector"
);
const board =
document.getElementById(
    "scoreBoard"
);
selector.innerHTML = "";
board.innerHTML = "";
teamNames.forEach(team => {
    scores[team] = 0;
    selector.innerHTML += `
        <option value="${team}">
            ${team}
        </option>
    `;
    board.innerHTML += `
        <p id="score-${team}">
            ${team}: 0
        </p>
    `;
});

}

function changeScore(points){

const team =
document.getElementById(
    "teamSelector"
).value;
scores[team] += points;
document.getElementById(
    `score-${team}`
).textContent =
`${team}: ${scores[team]}`;

}
