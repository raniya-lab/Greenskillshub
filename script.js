let points = 0;

// Start Green Journey
function startJourney() {
    document.getElementById("skills").scrollIntoView({
        behavior: "smooth"
    });
}


// Green Challenge
function completeChallenge() {
    points += 10;

    document.getElementById("points").innerText =
        "Green Points: " + points;

    alert("🌱 Great job! You earned 10 Green Points!");
}


// Green Quiz
function startQuiz() {

    let score = 0;

    let answer1 = prompt(
        "🌱 Question 1:\nWhich is a renewable source of energy?\n\nA. Coal\nB. Solar Energy\nC. Petrol"
    );

    if (answer1 && answer1.toUpperCase() === "B") {
        score++;
    }

    let answer2 = prompt(
        "♻️ Question 2:\nWhich action helps reduce waste?\n\nA. Reuse items\nB. Throw everything away\nC. Use more plastic"
    );

    if (answer2 && answer2.toUpperCase() === "A") {
        score++;
    }

    let answer3 = prompt(
        "💧 Question 3:\nWhich action helps save water?\n\nA. Leave the tap running\nB. Turn off the tap while brushing\nC. Waste water"
    );

    if (answer3 && answer3.toUpperCase() === "B") {
        score++;
    }

    if (score === 3) {

        points += 20;

        document.getElementById("points").innerText =
            "Green Points: " + points;

        alert(
            "🏆 Excellent!\nYou scored 3/3 and earned 20 Green Points!"
        );

    } else {

        alert(
            "🌍 Quiz Complete!\nYour Score: " + score + "/3"
        );
    }
}


// Waste Sorting Challenge
function sortWaste(type) {

    let item = document.getElementById("waste-item").innerText;
    let result = document.getElementById("waste-result");

    if (item.includes("Banana Peel")) {

        if (type === "organic") {

            result.innerText =
                "✅ Correct! Banana peels are organic waste.";

            points += 10;

        } else {

            result.innerText =
                "❌ Try again! Banana peels belong in the organic bin.";
        }

    }

    document.getElementById("points").innerText =
        "Green Points: " + points;
}


// Carbon Footprint Calculator
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
}
