const canvas = document.getElementById("drawing-canvas");
const ctx = canvas.getContext("2d");
const brushColorInput = document.getElementById("brush-color");
const brushSizeInput = document.getElementById("brush-size");
const canvasBgColorInput = document.getElementById("canvas-bg-color");
const undoButton = document.getElementById("undo-button");
const clearButton = document.getElementById("clear-button");
const saveButton = document.getElementById("save-button");

// Set canvas dimensions
canvas.width = 800;
canvas.height = 500;

// Initialize variables
let drawing = false;
let brushColor = brushColorInput.value;
let brushSize = brushSizeInput.value;
let canvasBgColor = canvasBgColorInput.value;
let paths = [];
let currentPath = [];

// Set initial canvas background
ctx.fillStyle = canvasBgColor;
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Start drawing
canvas.addEventListener("mousedown", (e) => {
    drawing = true;
    currentPath = [];
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
    currentPath.push({ x: e.offsetX, y: e.offsetY, color: brushColor, size: brushSize });
});

// Drawing in progress
canvas.addEventListener("mousemove", (e) => {
    if (!drawing) return;
    ctx.strokeStyle = brushColor;
    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    currentPath.push({ x: e.offsetX, y: e.offsetY, color: brushColor, size: brushSize });
});

// Stop drawing
canvas.addEventListener("mouseup", () => {
    if (!drawing) return;
    drawing = false;
    paths.push([...currentPath]);
    ctx.closePath();
});

// Change brush color
brushColorInput.addEventListener("input", (e) => {
    brushColor = e.target.value;
});

// Change brush size
brushSizeInput.addEventListener("input", (e) => {
    brushSize = e.target.value;
});

// Change canvas background
canvasBgColorInput.addEventListener("input", (e) => {
    canvasBgColor = e.target.value;
    redrawCanvas();
});

// Undo the last stroke
undoButton.addEventListener("click", () => {
    if (paths.length > 0) {
        paths.pop();
        redrawCanvas();
    }
});

// Clear the canvas
clearButton.addEventListener("click", () => {
    paths = [];
    redrawCanvas();
});

// Save the canvas as an image
saveButton.addEventListener("click", () => {
    const link = document.createElement("a");
    link.download = "drawing.png";
    link.href = canvas.toDataURL();
    link.click();
});

// Redraw the entire canvas
function redrawCanvas() {
    // Reset canvas background
    ctx.fillStyle = canvasBgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Redraw each path
    paths.forEach((path) => {
        ctx.beginPath();
        path.forEach((point, index) => {
            ctx.strokeStyle = point.color;
            ctx.lineWidth = point.size;
            ctx.lineCap = "round";
            if (index === 0) {
                ctx.moveTo(point.x, point.y);
            } else {
                ctx.lineTo(point.x, point.y);
                ctx.stroke();
            }
        });
        ctx.closePath();
    });
}
