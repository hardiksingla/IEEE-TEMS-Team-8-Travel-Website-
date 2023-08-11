// for changing text during loading
const lines = [
    "Cosmic plans in motion.",
    "Stars await your journey.",
    "Seeking celestial travel experiences.",
    "Venturing beyond earthly borders.",
    "Uncover planets, embrace exploration.",
    "Wandering galaxies for you.",
    "Warping space with you.",
    "New worlds, new adventures.",
    "Embrace interstellar travel dreams.",
    "Galactic tours await exploration.",
    "Crafting cosmic journeys together.",
    "Beyond horizons, limitless adventures.",
    "Dreams fulfilled among stars.",
    "Journey to cosmic destinations.",
    "Boundless universe, endless exploration."
];

    const changingText = document.getElementById("changingText");
    let currentIndex = 0;

    function updateText() {
        changingText.textContent = lines[currentIndex];
        currentIndex = (currentIndex + 1) % lines.length;
    }

    setInterval(updateText, 3000); // Change text every 5 seconds

    function openForm() {
        document.getElementById("popup").style.display = "block";
    } 
    function closeForm() {
        document.getElementById("popup").style.display = "none";
    }