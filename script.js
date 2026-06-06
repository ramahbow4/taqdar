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
`HOW TO PLAY

1. Create 2-10 teams.

2. Each team chooses 3 power-ups:
• Double Points
• 20 Second Search
• Two Answers
• Block Team
• First Letter

3. Each team selects 3 categories.
Duplicate categories are not allowed.

4. All selected categories create one shared game board.

5. Teams take turns choosing a question.

6. The active team locks in their answer first.

7. Other teams may also answer, but cannot use an answer that has already been locked.

8. If a team shouts out an answer before it is locked, other teams may use that idea.

9. Any team with the correct answer can earn the points.

10. Double Points doubles the value of the question for everyone.

11. Block Team prevents one chosen team from answering that question.

12. Two Answers allows a team to submit two answers.

13. First Letter reveals the first letter of the answer.

14. 20 Second Search gives all teams an extra 20 seconds to research.

15. The team with the highest score at the end wins the game.

GOOD LUCK!`
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
