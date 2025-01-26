const board = document.getElementById('game-board');
const movesDisplay = document.getElementById('moves');
const timerDisplay = document.getElementById('timer');
const restartButton = document.getElementById('restart-button');

let cards = [];
let flippedCards = [];
let matchedCount = 0;
let moves = 0;
let timer;
let timeElapsed = 0;

const symbols = ['🍎', '🍌', '🍒', '🍇', '🍓', '🍉', '🍍', '🥝'];

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

function createBoard() {
    cards = shuffle([...symbols, ...symbols]);
    board.innerHTML = '';
    cards.forEach((symbol, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.index = index;
        card.dataset.symbol = symbol;
        board.appendChild(card);
    });
}

function flipCard(card) {
    if (card.classList.contains('flipped') || card.classList.contains('matched') || flippedCards.length >= 2) {
        return;
    }

    card.classList.add('flipped');
    card.textContent = card.dataset.symbol;
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        checkMatch();
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    if (card1.dataset.symbol === card2.dataset.symbol) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedCount += 2;
        if (matchedCount === cards.length) {
            clearInterval(timer);
            alert(`You won in ${moves} moves and ${formatTime(timeElapsed)}!`);
        }
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            card1.textContent = '';
            card2.textContent = '';
        }, 1000);
    }
    flippedCards = [];
    moves++;
    movesDisplay.textContent = moves;
}

function startTimer() {
    timeElapsed = 0;
    clearInterval(timer);
    timer = setInterval(() => {
        timeElapsed++;
        timerDisplay.textContent = formatTime(timeElapsed);
    }, 1000);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

function restartGame() {
    matchedCount = 0;
    moves = 0;
    movesDisplay.textContent = 0;
    startTimer();
    createBoard();
}

board.addEventListener('click', (event) => {
    if (event.target.classList.contains('card')) {
        flipCard(event.target);
    }
});

restartButton.addEventListener('click', restartGame);

restartGame();
