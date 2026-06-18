alert("JS Loaded");
const logo = document.getElementById("logo");
const startBtn = document.getElementById("startBtn");
const howBtn = document.getElementById("howBtn");
const devMenu = document.getElementById("devMenu");

let logoClicks = 0;

let teamNames = [];
let currentTeam = 0;

let currentCategoryTeam = 0;

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
"Western Celebrities",
"Khaleji Celebrities",
"Charades",
"Animals",
"Logos",
"Flowers",
"Sea Animals",
"TikTok",
"Memes",
"Drinks",
"Restaurants",
"DC",
"Cartoon Network",
"Ramadan",
"Nickelodeon",
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
"Tongue Twisters",
"Vegetables",
"Musical Instruments",
"Airlines",
"Hotels",
"Airports",
"Board Games",
"Olympics",
"Harry Potter",
"Pokémon",
"Minecraft",
"Roblox",
"Star Wars",
"Pixar",
"DreamWorks",
"Football Players",
"Basketball",
"Formula 1",
"Ancient Civilizations",
"Toys",
"School Subjects",
"Scrabble",
"Programming and Coding",
"Red Sea Mall",
"Dates",
"Disney Descendants & Zombies",
"Guess The Sound",
"Guess The Picture",
"Before & After",
"Finish The Quote",
"Name The Character",
"Name The Song",
"What’s Missing?",
"Guess The Logo",
"This Or That",
"Speed Round",
"Mystery Category",
"AI & ChatGPT",
"Internet History",
"Viral Videos",
"Guess The Emoji",
"Famous Quotes",
"Mythology",
"Weather",
"World Records",
"Inventions",
"Riddles",
"Guess The Flag",
"Famous Buildings",
"Jeddah",
"Riyadh",
"Makkah",
"Madinah",
"Anime",
"Studio Ghibli",
"DreamWorks Characters",
"Pixar Characters",
"Streaming Services",
"Mobile Apps",
"Internet Slang",
"Chess",
"Formula E"
];

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
showScreen("teamScreen");
});

howBtn.addEventListener("click", () => {
showScreen("howScreen");
});

logo.addEventListener("click", () => {

logoClicks++;
if(logoClicks >= 5){
    const password = prompt("Developer Password");
    if(password === "ramahb0w4"){
        devMenu.style.display = "block";
        alert("Developer Mode Activated");
    }else{
        alert("Wrong Password");
    }
    logoClicks = 0;
}

});

document.querySelectorAll(".powerCard").forEach(card => {

card.addEventListener("click", () => {
    if(card.classList.contains("selected")){
        card.classList.remove("selected");
    }else{
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

document
.getElementById("powerupContinue")
.addEventListener("click", () => {

const selected =
document.querySelectorAll(".powerCard.selected");
if(selected.length !== 3){
    alert("Choose exactly 3 power-ups.");
    return;
}
