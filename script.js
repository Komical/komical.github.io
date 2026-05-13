
// =========================================================
// INIT (RUN ON PAGE LOAD)
// =========================================================

window.addEventListener("DOMContentLoaded", () =>
{
    initAchievements();
});

// =========================================================
// ACHIEVEMENT SYSTEM
// =========================================================

function initAchievements()
{
    // reset only once per browser session
    if (!sessionStorage.getItem("sessionStarted"))
    {
        localStorage.clear();

        sessionStorage.setItem(
            "sessionStarted",
            "true"
        );
    }

    const requiredPages =
    [
        "about.html",
        "projects.html",
        "faq.html",
        "pr_rat_tale.html",
        "pr_chesstcg.html"
    ];

    const currentPage =
        window.location.pathname.split("/").pop();

    let visited =
        JSON.parse(localStorage.getItem("visitedPages")) || [];

    if (!visited.includes(currentPage))
    {
        visited.push(currentPage);

        localStorage.setItem(
            "visitedPages",
            JSON.stringify(visited)
        );
    }

    const unlocked =
        localStorage.getItem("achievement_explorer");

    if (
        requiredPages.every(page => visited.includes(page)) &&
        !unlocked
    )
    {
        localStorage.setItem(
            "achievement_explorer",
            "true"
        );

        showAchievement();
    }
}

// =========================================================
// ACHIEVEMENT POPUP
// =========================================================

function showAchievement()
{
    const popup = document.createElement("div");
    popup.id = "achievement-popup";
    popup.innerText = "Achievement Unlocked: Explorer";

    document.body.appendChild(popup);

    setTimeout(() =>
    {
        popup.remove();
    }, 4000);
}

// =========================================================
// SLIDESHOW SYSTEM
// =========================================================

const slideshows =
{
    rat:
    {
        index: 0,
        id: "slide-image",
        images:
        [
            "images/rt_lvl1.png",
            "images/rt_surreal.png",
            "images/rt_lvl3.png",
            "images/rt_lvl4.png",
            "images/rt_toilet.png"
        ]
    },

    chess:
    {
        index: 0,
        id: "chess-slide-image",
        images:
        [
            "images/ctcg_Advance!.png",
            "images/ctcg_Advantage!.png",
            "images/ctcg_Counter!.png",
            "images/ctcg_Double Attack.png",
            "images/ctcg_Fork.png",
            "images/ctcg_Heart Knight.png",
            "images/ctcg_Opening!.png",
            "images/ctcg_The London.png",
            "images/ctcg_Thinking.png"
        ]
    }
};

// =========================================================
// SLIDESHOW CONTROLLER
// =========================================================

function changeSlide(name, direction)
{
    const show = slideshows[name];
    if (!show) return;

    const img = document.getElementById(show.id);
    if (!img) return;

    show.index += direction;

    if (show.index < 0)
    {
        show.index = show.images.length - 1;
    }

    if (show.index >= show.images.length)
    {
        show.index = 0;
    }

    img.src = show.images[show.index];
}

// expose to HTML onclick
window.changeSlide = changeSlide;