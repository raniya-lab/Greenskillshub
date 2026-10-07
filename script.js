let points = 0;

function startJourney() {
    document.getElementById("skills").scrollIntoView({
        behavior: "smooth"
    });
}

function completeChallenge() {
    points += 10;

    document.getElementById("points").innerText =
        "Green Points: " + points;

    alert("🌱 Great job! You earned 10 Green Points!");
}

function startQuiz() {
    alert("🧠 Green Quiz coming soon!");
}
