let points = 0;


// =========================
// START GREEN JOURNEY
// =========================

function startJourney() {
    document.getElementById("skills").scrollIntoView({
        behavior: "smooth"
    });
}


// =========================
// GREEN CHALLENGE
// =========================

function completeChallenge() {
    points += 10;

    document.getElementById("points").innerText =
        "Green Points: " + points;

    updateProgress();

    alert("🌱 Great job! You earned 10 Green Points!");
}


// =========================
// 5-QUESTION GREEN QUIZ
// =========================

function startQuiz() {

    let score = 0;

    let answer1 = prompt(
        "🌱 Question 1:\nWhich of these is a renewable source of energy?\n\nA. Coal\nB. Solar energy\nC. Petrol\nD. Natural gas"
    );

    if (answer1 && answer1.toUpperCase() === "B") {
        score++;
    }


    let answer2 = prompt(
        "♻️ Question 2:\nWhich action best follows the 3R principle?\n\nA. Buy more plastic products\nB. Throw away reusable items\nC. Reduce, reuse and recycle\nD. Burn waste"
    );

    if (answer2 && answer2.toUpperCase() === "C") {
        score++;
    }


    let answer3 = prompt(
        "💧 Question 3:\nWhich action helps conserve water?\n\nA. Keep the tap running while brushing\nB. Take unnecessarily long showers\nC. Fix leaking taps\nD. Leave water running"
    );

    if (answer3 && answer3.toUpperCase() === "C") {
        score++;
    }


    let answer4 = prompt(
        "🌍 Question 4:\nWhich activity can help reduce carbon emissions?\n\nA. Walking or cycling for short journeys\nB. Leaving lights on all day\nC. Burning waste\nD. Using more fuel than necessary"
    );

    if (answer4 && answer4.toUpperCase() === "A") {
        score++;
    }


    let answer5 = prompt(
        "🌿 Question 5:\nWhich is an example of sustainable living?\n\nA. Wasting food\nB. Using reusable bags and bottles\nC. Using more single-use plastic\nD. Leaving electronic devices on unnecessarily"
    );

    if (answer5 && answer5.toUpperCase() === "B") {
        score++;
    }


    // Give 5 points for every correct answer
    points += earnedPoints;

document.getElementById("points").innerText =
    "Green Points: " + points;

updateProgress();


    alert(
        "🌍 Quiz Complete!\n\n" +
        "Your Score: " + score + "/5\n" +
        "🏆 Green Points Earned: " + earnedPoints
    );


    // Show Back to Dashboard button
    document.getElementById("quizDashboardBtn").style.display =
        "inline-block";
}


// =========================
// WASTE SORTING
// =========================

function sortWaste(type) {

    let item = document.getElementById("waste-item").innerText;

    let result = document.getElementById("waste-result");


    if (type === "organic") {
    result.innerText =
        "✅ Correct! Banana peels are organic waste.";

    points += 10;

    updateProgress();
} else {

            result.innerText =
                "❌ Try again! Banana peels belong in the organic bin.";
        }
    }


    document.getElementById("points").innerText =
        "Green Points: " + points;
}


// =========================
// CARBON FOOTPRINT CALCULATOR
// =========================

function calculateCarbon() {

    let carHours =
        Number(document.getElementById("carHours").value);

    let electricityHours =
        Number(document.getElementById("electricityHours").value);

    let plasticBottles =
        Number(document.getElementById("plasticBottles").value);


    let footprint =
        (carHours * 2) +
        (electricityHours * 0.5) +
        (plasticBottles * 0.1);


    document.getElementById("carbonResult").innerText =
        "🌍 Your estimated daily carbon footprint score is " +
        footprint.toFixed(1) + " points.";
updateProgress();
}


// =========================
// DASHBOARD NAVIGATION
// =========================

function scrollToWaste() {

    document.getElementById("waste-game").scrollIntoView({
        behavior: "smooth"
    });
}


function scrollToCarbon() {

    document.getElementById("carbon").scrollIntoView({
        behavior: "smooth"
    });
}


function scrollToChallenges() {

    document.getElementById("challenges").scrollIntoView({
        behavior: "smooth"
    });
}


function scrollToCareers() {

    document.getElementById("careers").scrollIntoView({
        behavior: "smooth"
    });
}


// =========================
// BACK TO DASHBOARD
// =========================

function backToDashboard() {

    document.getElementById("dashboard").scrollIntoView({
        behavior: "smooth"
    });
}
// =========================
// GREEN PROGRESS SYSTEM
// =========================

function updateProgress() {

    // Update points
    document.getElementById("points-display").innerText =
        "Green Points: " + points;

    let progressFill = document.getElementById("progress-fill");
    let progressText = document.getElementById("progress-text");
    let level = document.getElementById("level");
    let badgeName = document.getElementById("badge-name");
    let badgeIcon = document.getElementById("badge-icon");
    let badgeDescription = document.getElementById("badge-description");


    // Eco Beginner
    if (points < 50) {

        level.innerText = "🌱 Eco Beginner";

        progressFill.style.width =
            (points / 50 * 100) + "%";

        progressText.innerText =
            points + " / 50 points to Eco Explorer";

        badgeIcon.innerText = "🌱";
        badgeName.innerText = "Eco Beginner";
        badgeDescription.innerText =
            "Keep learning and completing green activities!";

    }


    // Eco Explorer
    else if (points < 100) {

        level.innerText = "🌿 Eco Explorer";

        progressFill.style.width =
            ((points - 50) / 50 * 100) + "%";

        progressText.innerText =
            points + " / 100 points to Green Champion";

        badgeIcon.innerText = "🌿";
        badgeName.innerText = "Eco Explorer";
        badgeDescription.innerText =
            "You're becoming a true green skills explorer!";

    }


    // Green Champion
    else {

        level.innerText = "🏆 Green Champion";

        progressFill.style.width = "100%";

        progressText.innerText =
            "100+ Green Points — You are a Green Champion!";

        badgeIcon.innerText = "🏆";
        badgeName.innerText = "Green Champion";
        badgeDescription.innerText =
            "Amazing! You are making a positive difference for the planet.";

    }
}
updateProgress();

