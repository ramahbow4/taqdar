const logo = document.getElementById("logo");
const startBtn = document.getElementById("startBtn");
const howBtn = document.getElementById("howBtn");
const devMenu = document.getElementById("devMenu");
let logoClicks = 0;
let teamNames = [];
let currentTeam = 0;
function showScreen(screenId) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });
    document.getElementById(screenId).classList.add("active");
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
function selectTeams(numberOfTeams) {
    const teamInputs = document.getElementById("teamInputs");
    let html = "<h2>Enter Team Names</h2>";
    for (let i = 1; i <= numberOfTeams; i++) {
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
    teamInputs.innerHTML = html;
}
function saveTeams(numberOfTeams) {
    teamNames = [];
    for (let i = 1; i <= numberOfTeams; i++) {
        const name =
            document.getElementById(`team${i}`).value.trim();
        if (name === "") {
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
document.querySelectorAll(".powerCard").forEach(card => {
    card.addEventListener("click", () => {
        if (card.classList.contains("selected")) {
            card.classList.remove("selected");
        } else {
            const selected =
                document.querySelectorAll(".powerCard.selected");
            if (selected.length >= 3) {
                alert("Choose only 3 power-ups.");
                return;
            }
            card.classList.add("selected");
        }
    });
});
let selectedCategories = [];
const categories = [
"Marvel",
"Disney",
"Cars",
"Soccer",
"Anime",
"Space",
"Foods",
"Geography",
"Minecraft",
"Roblox",
"History",
"Technology"
];
let currentCategoryTeam = 0;
function loadCategories() {
    const container = document.getElementById("categoryCards");
    container.innerHTML = "";
    categories.forEach(category => {
        const button = document.createElement("button");
        button.className = "categoryCard";
        button.textContent = category;
        if (selectedCategories.includes(category)) {
            button.disabled = true;
            button.style.opacity = "0.5";
        }
        button.addEventListener("click", () => {
            if (button.classList.contains("selected")) {
                button.classList.remove("selected");
            } else {
                const selected =
                    document.querySelectorAll(".categoryCard.selected");
                if (selected.length >= 3) {
                    alert("Choose only 3 categories.");
                    return;
                }
                button.classList.add("selected");
            }
        });
        container.appendChild(button);
    });
}
document.getElementById("powerupContinue")
.addEventListener("click", () => {
    const selected =
        document.querySelectorAll(".powerCard.selected");
    if (selected.length !== 3) {
        alert("Choose exactly 3 power-ups.");
        return;
    }
    loadCategories();
    currentCategoryTeam = 0;
    document.getElementById("categoryTeamName").textContent =
        teamNames[currentCategoryTeam];
    showScreen("categoryScreen");
});
document.getElementById("categoryContinue")
.addEventListener("click", () => {
    const selected =
        document.querySelectorAll(".categoryCard.selected");
    if (selected.length !== 3) {
        alert("Choose exactly 3 categories.");
        return;
    }
    selected.forEach(card => {
        selectedCategories.push(card.textContent);
    });
    currentCategoryTeam++;
    if (currentCategoryTeam < teamNames.length) {
        document.getElementById("categoryTeamName").textContent =
            teamNames[currentCategoryTeam];
        loadCategories();
    } else {
        buildBoard();
        showScreen("boardScreen");
    }
});
function buildBoard() {
    const board = document.getElementById("boardGrid");
    if (!board) return;
    board.innerHTML = "";
    selectedCategories.forEach(category => {
        const categoryDiv =
            document.createElement("div");
        categoryDiv.className =
            "boardCategory";
        categoryDiv.innerHTML = `
            <h3>${category}</h3>
            <button class="questionBtn">200</button>
            <button class="questionBtn">400</button>
            <button class="questionBtn">600</button>
        `;
        board.appendChild(categoryDiv);
    });
}
