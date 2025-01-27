const display = document.getElementById("calc-display");
const memoryIndicator = document.getElementById("memory-indicator");
let memory = null;
let currentInput = "";
let lastOperation = null;

// Clear all inputs and reset
function clearCalculator() {
    currentInput = "";
    lastOperation = null;
    display.value = "0";
}

// Update display
function updateDisplay(value) {
    display.value = value;
}

// Perform a calculation
function calculate(operator, value1, value2) {
    switch (operator) {
        case "add":
            return value1 + value2;
        case "subtract":
            return value1 - value2;
        case "multiply":
            return value1 * value2;
        case "divide":
            return value2 === 0 ? "Error" : value1 / value2;
        default:
            return value2;
    }
}

// Perform advanced operations
function advancedOperation(operation, value) {
    switch (operation) {
        case "sqrt":
            return value < 0 ? "Error" : Math.sqrt(value);
        case "percent":
            return value / 100;
        default:
            return value;
    }
}

// Handle button clicks
document.querySelector(".buttons").addEventListener("click", (e) => {
    const action = e.target.dataset.action;
    if (!action) return;

    // Number and decimal input
    if (!isNaN(action) || action === "decimal") {
        if (action === "decimal" && currentInput.includes(".")) return;
        currentInput += action;
        updateDisplay(currentInput);
        return;
    }

    // Advanced operations (sqrt, percent)
    if (action === "sqrt" || action === "percent") {
        currentInput = advancedOperation(action, parseFloat(currentInput)) + "";
        updateDisplay(currentInput);
        return;
    }

    // Memory functions
    if (action === "memory-recall") {
        if (memory !== null) {
            currentInput = memory.toString();
            updateDisplay(currentInput);
        }
        return;
    }

    // Clear input
    if (action === "clear") {
        clearCalculator();
        return;
    }

    // Equals button
    if (action === "equals") {
        if (lastOperation && currentInput) {
            currentInput = calculate(lastOperation, parseFloat(display.value), parseFloat(currentInput)) + "";
            updateDisplay(currentInput);
            lastOperation = null;
        }
        return;
    }

    // Handle basic arithmetic operations
    if (["add", "subtract", "multiply", "divide"].includes(action)) {
        if (lastOperation && currentInput) {
            currentInput = calculate(lastOperation, parseFloat(display.value), parseFloat(currentInput)) + "";
            updateDisplay(currentInput);
        }
        lastOperation = action;
        memory = parseFloat(currentInput);
        memoryIndicator.style.display = "inline";
        currentInput = "";
        return;
    }
});
