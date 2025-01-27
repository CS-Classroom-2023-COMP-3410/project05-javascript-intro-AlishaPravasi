const arrayContainer = document.getElementById("array-container");
const commentary = document.getElementById("commentary");
const algorithmSelect = document.getElementById("algorithm-select");
const speedRange = document.getElementById("speed-range");
const startButton = document.getElementById("start-button");
const resetButton = document.getElementById("reset-button");

let array = [];
let animationSpeed = 1000;
const barCount = 20;

// Generate a random array
function generateArray() {
    array = Array.from({ length: barCount }, () => Math.floor(Math.random() * 100) + 10);
    renderArray();
}

// Render the array as bars
function renderArray() {
    arrayContainer.innerHTML = "";
    array.forEach((value) => {
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${value * 2}px`;
        bar.textContent = value;
        arrayContainer.appendChild(bar);
    });
}

// Pause execution for animation
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// Highlight bars during sorting
function highlightBars(index1, index2) {
    const bars = document.querySelectorAll(".bar");
    bars.forEach((bar, index) => {
        bar.classList.remove("active");
        if (index === index1 || index === index2) {
            bar.classList.add("active");
        }
    });
}

// Bubble Sort
async function bubbleSort() {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            highlightBars(j, j + 1);
            commentary.textContent = `Comparing ${array[j]} and ${array[j + 1]}`;
            await sleep(animationSpeed);
            if (array[j] > array[j + 1]) {
                commentary.textContent = `Swapping ${array[j]} and ${array[j + 1]}`;
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                renderArray();
                highlightBars(j, j + 1);
                await sleep(animationSpeed);
            }
        }
    }
    commentary.textContent = "Array sorted using Bubble Sort!";
    highlightBars(-1, -1);
}

// Insertion Sort
async function insertionSort() {
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        commentary.textContent = `Considering ${key} for insertion`;
        highlightBars(i, -1);
        await sleep(animationSpeed);

        while (j >= 0 && array[j] > key) {
            commentary.textContent = `Moving ${array[j]} to the right`;
            array[j + 1] = array[j];
            j--;
            renderArray();
            highlightBars(j + 1, -1);
            await sleep(animationSpeed);
        }

        array[j + 1] = key;
        commentary.textContent = `${key} inserted at position ${j + 1}`;
        renderArray();
        highlightBars(i, -1);
        await sleep(animationSpeed);
    }
    commentary.textContent = "Array sorted using Insertion Sort!";
    highlightBars(-1, -1);
}

// Selection Sort
async function selectionSort() {
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;
        commentary.textContent = `Finding the smallest element from index ${i} onwards`;
        highlightBars(minIndex, -1);
        await sleep(animationSpeed);

        for (let j = i + 1; j < array.length; j++) {
            highlightBars(minIndex, j);
            if (array[j] < array[minIndex]) {
                commentary.textContent = `New minimum found: ${array[j]}`;
                minIndex = j;
            }
            await sleep(animationSpeed);
        }

        if (minIndex !== i) {
            commentary.textContent = `Swapping ${array[i]} and ${array[minIndex]}`;
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
            renderArray();
            highlightBars(i, minIndex);
            await sleep(animationSpeed);
        }
    }
    commentary.textContent = "Array sorted using Selection Sort!";
    highlightBars(-1, -1);
}

// Start sorting
async function startSorting() {
    startButton.disabled = true;
    resetButton.disabled = true;
    const algorithm = algorithmSelect.value;

    switch (algorithm) {
        case "bubble":
            await bubbleSort();
            break;
        case "insertion":
            await insertionSort();
            break;
        case "selection":
            await selectionSort();
            break;
    }

    startButton.disabled = false;
    resetButton.disabled = false;
}

// Reset the array
resetButton.addEventListener("click", () => {
    generateArray();
    commentary.textContent = "Array reset!";
});

// Update animation speed
speedRange.addEventListener("input", (e) => {
    animationSpeed = parseInt(e.target.value);
});

// Start sorting
startButton.addEventListener("click", startSorting);

// Initialize the array on page load
generateArray();
