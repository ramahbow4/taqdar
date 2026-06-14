<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>تقدر؟</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container">
<img src="logo.png" id="logo" class="logo" alt="Taqdar Logo">
<!-- Home Screen -->
<div id="homeScreen" class="screen active">
    <h1>تقدر؟</h1>
    <p class="subtitle">
        The Ultimate Game Show Experience
    </p>
    <button id="startBtn">Start Game</button>
    <button id="howBtn">How To Play</button>
</div>
<!-- How To Play Screen -->
<div id="howScreen" class="screen">
    <h2>How To Play</h2>
    <p>Create 2–10 teams.</p>
    <p>Choose 3 power-ups.</p>
    <p>Choose 3 categories.</p>
    <p>Highest score wins.</p>
    <button onclick="showScreen('homeScreen')">
        Back
    </button>
</div>
<!-- Team Screen -->
<div id="teamScreen" class="screen">
    <h2>Choose Number of Teams</h2>
    <button onclick="selectTeams(2)">2 Teams</button>
    <button onclick="selectTeams(3)">3 Teams</button>
    <button onclick="selectTeams(4)">4 Teams</button>
    <button onclick="selectTeams(5)">5 Teams</button>
    <button onclick="selectTeams(6)">6 Teams</button>
    <button onclick="selectTeams(7)">7 Teams</button>
    <button onclick="selectTeams(8)">8 Teams</button>
    <button onclick="selectTeams(9)">9 Teams</button>
    <button onclick="selectTeams(10)">10 Teams</button>
    <div id="teamInputs"></div>
    <button onclick="showScreen('homeScreen')">
        Back
    </button>
</div>
<!-- Power-Up Screen -->
<div id="powerupScreen" class="screen">
    <h2 id="powerupTeamName">
        Team Name
    </h2>
    <p>Choose 3 Power-Ups</p>
    <div id="powerupCards">
        <button class="powerCard">Double Points</button>
        <button class="powerCard">Two Answers</button>
        <button class="powerCard">Block Team</button>
        <button class="powerCard">First Letter</button>
        <button class="powerCard">20 Second Search</button>
    </div>
    <button id="powerupContinue">
        Continue
    </button>
</div>
<!-- Category Screen -->
<div id="categoryScreen" class="screen">
    <h2 id="categoryTeamName">
        Team Name
    </h2>
    <p>Choose 3 Categories</p>
    <div id="categoryCards">
        <button class="categoryCard">Islamic</button>
        <button class="categoryCard">Quran</button>
        <button class="categoryCard">Disney</button>
        <button class="categoryCard">Marvel</button>
        <button class="categoryCard">Movies</button>
        <button class="categoryCard">Soccer</button>
        <button class="categoryCard">Science</button>
        <button class="categoryCard">History</button>
        <button class="categoryCard">Geography</button>
        <button class="categoryCard">Video Games</button>
    const categories = [
"Islamic",
"Quran",
"Western Music",
"Khaleji Music",
"Medicine",
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
"Posters",
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
"E.G.O.T. Award Winners",
"Sci-Fi Movies",
"Comedy Movies",
"Movie Posters",
"YouTubers",
"Influencers",
"TV Shows",
"Sitcoms",
"Horror Movies",
"Action Movies",
"Superheroes",
"Villains",
"Harry Potter",
"Pokémon",
"Minecraft",
"Roblox",
"Star Wars",
"Pixar",
"DreamWorks",
"Video Game Characters",
"App Icons",
"Emoji",
"Football Players",
"Basketball",
"Formula 1",
"Ancient Civilizations",
"Toys",
"School Subjects",
"Scrabble",
"Marvel Defenders Universe",
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
"What's Missing?",
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
    </div>
    <button id="categoryContinue">
        Continue
    </button>
</div>
<!-- Board Screen -->
<div id="boardScreen" class="screen">
    <h2>Board</h2>
    <p>
        Board coming soon...
    </p>
</div>
<!-- Question Screen -->
<div id="questionScreen" class="screen">
    <h2>Question</h2>
    <p>
        Question coming soon...
    </p>
</div>
<!-- Answer Screen -->
<div id="answerScreen" class="screen">
    <h2>Answer</h2>
    <p>
        Answer coming soon...
    </p>
</div>
<!-- Winner Screen -->
<div id="winnerScreen" class="screen">
    <h2>Winner</h2>
    <p>
        Winner coming soon...
    </p>
</div>
<!-- Developer Menu -->
<div id="devMenu">
    <button onclick="showScreen('homeScreen')">Home</button>
    <button onclick="showScreen('teamScreen')">Teams</button>
    <button onclick="showScreen('powerupScreen')">Power-Ups</button>
    <button onclick="showScreen('categoryScreen')">Categories</button>
    <button onclick="showScreen('boardScreen')">Board</button>
</div>
</div>
<script src="script.js"></script>
</body>
</html>
