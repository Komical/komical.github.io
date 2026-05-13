// ===== Typewriter Effect =====
function typeWriter(elementId, text, speed = 40) {
    let i = 0;
    const el = document.getElementById(elementId);

    function typing() {
        if (i < text.length) {
            el.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }

    typing();
}

window.addEventListener("DOMContentLoaded", () => {
    const el = document.getElementById("typed-text");
    el.classList.add("cursor");

    typeWriter(
        "typed-text",
        "Welcome to Hand Craft Games.",
        35
    );
});

// ===== ACHIEVEMENT SYSTEM =====
const requiredPages = ["about.html", "projects.html"];
const currentPage = window.location.pathname.split("/").pop();
let visited = JSON.parse(localStorage.getItem("visitedPages")) || [];

if (!visited.includes(currentPage)) {
    visited.push(currentPage);
    localStorage.setItem("visitedPages", JSON.stringify(visited));
}

const unlocked = localStorage.getItem("achievement_explorer");

// If all pages visited and not already unlocked
if (
    requiredPages.every(page => visited.includes(page)) &&
    !unlocked
) {
    localStorage.setItem("achievement_explorer", "true");
    showAchievement();
}

// Popup function
function showAchievement() {
    const popup = document.createElement("div");
    popup.id = "achievement-popup";
    popup.innerText = "Achievement Unlocked: Explorer";

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.remove();
    }, 4000);
}

// First-visit reset logic
if (!sessionStorage.getItem("sessionStarted")) {
    localStorage.clear();
    sessionStorage.setItem("sessionStarted", "true");
}


// SLIDES /////////////////////////////////////

// RAT TALE
const ratSlides = [
    "images/rt_lvl1.png",
    "images/rt_surreal.png",
    "images/rt_lvl3.png",
    "images/rt_lvl4.png",
    "images/rt_toilet.png"
];

let ratIndex = 0;

window.changeRatSlide = function(direction)
{
    const img = document.getElementById("slide-image");
    if (!img) return;

    ratIndex += direction;

    if (ratIndex < 0)
    {
        ratIndex = ratSlides.length - 1;
    }

    if (ratIndex >= ratSlides.length)
    {
        ratIndex = 0;
    }

    img.src = ratSlides[ratIndex];
};

// CHESS TCG

// CHESS TCG
const chessSlides = [
    "images/ctcg_Advance!.png",
    "images/ctcg_Advantage!.png",
    "images/ctcg_Counter!.png",
    "images/ctcg_Double Attack.png",
    "images/ctcg_Fork.png",
    "images/ctcg_Heart Knight.png",
    "images/ctcg_Opening!.png",
    "images/ctcg_The London.png",
    "images/ctcg_Thinking.png"
];

let chessIndex = 0;

window.changeChessSlide = function(direction)
{
    const img = document.getElementById("chess-slide-image");
    if (!img) return;

    chessIndex += direction;

    if (chessIndex < 0)
    {
        chessIndex = chessSlides.length - 1;
    }

    if (chessIndex >= chessSlides.length)
    {
        chessIndex = 0;
    }

    img.src = chessSlides[chessIndex];
};