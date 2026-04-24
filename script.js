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