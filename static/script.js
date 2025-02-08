document.addEventListener("DOMContentLoaded", function() {
    const yesButton = document.getElementById("yes");
    const noButton = document.getElementById("no");
    const questionBox = document.getElementById("question-box");
    const question = document.getElementById("question");
    const balloonsContainer = document.getElementById("balloons-container");

    function createBalloons() {
        for (let i = 0; i < 30; i++) {
            let balloon = document.createElement("div");
            balloon.classList.add("balloon");
            balloon.style.left = Math.random() * 100 + "vw";
            balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 60%)`;
            balloon.style.animationDuration = (Math.random() * 3 + 2) + "s";
            balloonsContainer.appendChild(balloon);
            setTimeout(() => balloon.remove(), 5000);
        }
    }

    noButton.addEventListener("click", function() {
        question.innerText = "Are you sure? 😢";
        noButton.style.display = "none";
    });

    yesButton.addEventListener("click", function() {
        questionBox.innerHTML = "<h1>Yay! ❤️ See you on Valentine's Day! 🎉</h1>";
        createBalloons();
    });
});
