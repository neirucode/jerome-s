document.addEventListener("DOMContentLoaded", function () {
    // Smoothly fade in the love letter container
    let loveContainer = document.querySelector(".love-container");
    loveContainer.style.opacity = "0";
    loveContainer.style.transition = "opacity 1.5s ease-in-out"; // Smooth transition
    setTimeout(() => {
        loveContainer.style.opacity = "1";
    }, 500);

    // Letter-by-letter animation delay
    const letters = document.querySelectorAll(".magic-text span");
    letters.forEach((letter, index) => {
        letter.style.animationDelay = `${index * 0.05}s`; // Adjust timing per letter
    });

    // Audio handling
    let audio = document.getElementById("background-audio");
    let playButton = document.getElementById("play-button");

    // Lower volume for a smoother experience
    audio.volume = 0.4;

    // Attempt autoplay
    let playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.then(() => {
            console.log("Autoplay successful.");
        }).catch(() => {
            console.log("Autoplay blocked. Showing play button.");
            playButton.style.display = "block"; // Show button if autoplay is blocked
        });
    }

    // If the user clicks the button, play the audio
    playButton.addEventListener("click", function () {
        audio.play();
        playButton.style.display = "none"; // Hide button after playing
    });
});
