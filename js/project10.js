const difficultySelect = document.getElementById("difficulty-select");
const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("restart-button");
const trainerContainer = document.getElementById("trainer-container");
const targetText = document.getElementById("target-text");
const inputArea = document.getElementById("input-area");
const wpmDisplay = document.getElementById("wpm-display");
const accuracyDisplay = document.getElementById("accuracy-display");

let targetString = "";
let startTime = null;
let timer = null;

// Generate random strings based on difficulty
function generateRandomString(difficulty) {
    const easyWords = ["cat", "dog", "tree", "bird", "sun", "hat", "cup"];
    const mediumWords = ["TypingTest", "KeyboardTrainer", "ExampleWords"];
    const hardWords = [
        "Type@123!",
        "Hard&*Test",
        "Difficult%String",
    ];

    const source = difficulty === "easy" ? easyWords : difficulty === "medium" ? mediumWords : hardWords;
    return source[Math.floor(Math.random() * source.length)];
}

// Start the typing trainer
function startTrainer() {
    const difficulty = difficultySelect.value;
    targetString = generateRandomString(difficulty);
    targetText.textContent = targetString;
    inputArea.value = "";
    inputArea.disabled = false;
    inputArea.focus();

    // Reset stats
    startTime = Date.now();
    clearInterval(timer);
    timer = setInterval(updateWPM, 1000);
    wpmDisplay.textContent = "0";
    accuracyDisplay.textContent = "100%";
}

// Restart the trainer
function restartTrainer() {
    inputArea.value = "";
    inputArea.disabled = false;
    wpmDisplay.textContent = "0";
    accuracyDisplay.textContent = "100%";
    clearInterval(timer);
}

// Calculate WPM
function calculateWPM() {
    const elapsedMinutes = (Date.now() - startTime) / 60000; // Convert ms to minutes
    const wordsTyped = inputArea.value.length / 5; // Average word length = 5
    return Math.floor(wordsTyped / elapsedMinutes);
}

// Calculate Accuracy
function calculateAccuracy() {
    const typed = inputArea.value;
    let correctChars = 0;

    for (let i = 0; i < typed.length; i++) {
        if (typed[i] === targetString[i]) {
            correctChars++;
        }
    }

    return Math.floor((correctChars / targetString.length) * 100);
}

// Update WPM and Accuracy
function updateWPM() {
    wpmDisplay.textContent = calculateWPM();
    accuracyDisplay.textContent = calculateAccuracy() + "%";
}

// Real-time typing feedback
inputArea.addEventListener("input", () => {
    const typed = inputArea.value;

    // Highlight errors
    if (typed !== targetString.slice(0, typed.length)) {
        inputArea.classList.add("error");
    } else {
        inputArea.classList.remove("error");
    }

    // Update stats
    if (typed === targetString) {
        clearInterval(timer);
        inputArea.disabled = true;
        commentary.textContent = "Great job! You completed the exercise.";
    }
    updateWPM();
});

// Event listeners
startButton.addEventListener("click", startTrainer);
restartButton.addEventListener("click", restartTrainer);
