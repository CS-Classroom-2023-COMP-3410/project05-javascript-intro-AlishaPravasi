const story = {
    start: {
        text: "You find yourself in a dark forest. Two paths lie ahead. Do you take the left path or the right path?",
        choices: [
            { text: "Take the left path", next: "leftPath" },
            { text: "Take the right path", next: "rightPath" },
        ],
    },
    leftPath: {
        text: "The left path leads to a peaceful clearing. A friendly fox approaches. Do you pet the fox or continue walking?",
        choices: [
            { text: "Pet the fox", next: "petFox" },
            { text: "Continue walking", next: "continueWalking" },
        ],
    },
    rightPath: {
        text: "The right path leads to a raging river. You see a rickety bridge. Do you cross the bridge or turn back?",
        choices: [
            { text: "Cross the bridge", next: "crossBridge" },
            { text: "Turn back", next: "start" },
        ],
    },
    petFox: {
        text: "The fox wags its tail happily and shows you a hidden treasure. Congratulations, you found the treasure!",
        choices: [{ text: "Restart", next: "start" }],
    },
    continueWalking: {
        text: "You continue walking and find your way out of the forest. You feel accomplished.",
        choices: [{ text: "Restart", next: "start" }],
    },
    crossBridge: {
        text: "The bridge creaks loudly but holds your weight. On the other side, you find a wise old owl who gives you advice.",
        choices: [{ text: "Restart", next: "start" }],
    },
};

const storyText = document.getElementById("story-text");
const choicesContainer = document.getElementById("choices-container");
const saveButton = document.getElementById("save-button");
const resetButton = document.getElementById("reset-button");

let currentNode = "start";

// Load saved progress
function loadProgress() {
    const savedNode = localStorage.getItem("currentNode");
    if (savedNode && story[savedNode]) {
        currentNode = savedNode;
    }
    renderStory();
}

// Save progress to localStorage
function saveProgress() {
    localStorage.setItem("currentNode", currentNode);
    alert("Progress saved!");
}

// Reset the game
function resetGame() {
    currentNode = "start";
    localStorage.removeItem("currentNode");
    renderStory();
}

// Render the current story node
function renderStory() {
    const node = story[currentNode];
    storyText.textContent = node.text;
    choicesContainer.innerHTML = "";

    node.choices.forEach((choice) => {
        const button = document.createElement("button");
        button.textContent = choice.text;
        button.classList.add("choice");
        button.addEventListener("click", () => {
            currentNode = choice.next;
            renderStory();
        });
        choicesContainer.appendChild(button);
    });
}

// Event listeners
saveButton.addEventListener("click", saveProgress);
resetButton.addEventListener("click", resetGame);

// Initialize the game
loadProgress();
