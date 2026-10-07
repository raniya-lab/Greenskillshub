let points = 0;

const questions = [
    {
        question: "Which of these is a renewable source of energy?",
        options: ["Coal", "Solar energy", "Petrol", "Natural gas"],
        answer: "Solar energy"
    },
    {
        question: "Which action helps reduce waste?",
        options: ["Reuse items", "Use more plastic", "Throw everything away", "Burn waste"],
        answer: "Reuse items"
    },
    {
        question: "Which action saves water?",
        options: [
            "Leave the tap running",
            "Take longer showers",
            "Turn off the tap while brushing",
            "Waste clean water"
        ],
        answer: "Turn off the tap while brushing"
    },
    {
        question: "What does recycling help us do?",
        options: [
            "Create more waste",
            "Save resources",
            "Increase pollution",
            "Waste energy"
        ],
        answer: "Save resources"
    },
    {
        question: "Which is an example of sustainable transport?",
        options: [
            "Walking",
            "Using a car for every short trip",
            "Leaving a vehicle running",
            "Using more fuel"
        ],
        answer: "Walking"
    }
];

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

    let score = 0;

    for (let i = 0; i < questions.length; i++) {

        let q = questions[i];

        let answer = prompt(
            "🌱 Question " + (i + 1) + " of " + questions.length +
            "\n\n" + q.question +
            "\n\nA. " + q.options[0] +
            "\nB. " + q.options[1] +
            "\nC. " + q.options[2] +
            "\nD. " + q.options[3]
        );

        if (!answer) {
            continue;
        }

        let choice = answer.toUpperCase();

        let selectedAnswer;

        if (choice === "A") selectedAnswer = q.options[0];
        if (choice === "B") selectedAnswer = q.options[1];
        if (choice === "C") selectedAnswer = q.options[2];
        if (choice === "D") selectedAnswer = q.options[3];

        if (selectedAnswer === q.answer) {
            score++;
        }
    }

    let earnedPoints = score * 5;
    points += earnedPoints;

    document.getElementById("points").innerText =
        "Green Points: " + points;

    alert(
        "🌍 Quiz Complete!\n\n" +
        "Your Score: " + score + "/" + questions.length +
        "\nGreen Points Earned: " + earnedPoints
    );
}
