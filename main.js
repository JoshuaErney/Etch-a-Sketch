const squareForm = document.querySelector("#squareForm");
const colorForm = document.querySelector("#colorForm");

const input = document.querySelector("#numOfSquares");
const btnFormCancel = document.querySelector("#cancelBtn");

const btnUpdateSquares = document.querySelector("#update-squares-btn");
const btnColorSelect = document.querySelector("#color-select-btn");

const dialogUpdate = document.querySelector("#dialogUpdate");
const dialogColor = document.querySelector("#dialogColor");

squareForm.addEventListener("submit", (e) => {
  e.preventDefault();
  squareForm.querySelector(`input[type="number"]`);
  let numValue = input.value;
  dialogUpdate.close();
  return createGrid();
});

colorForm.addEventListener("submit", (e) => {
  const selectElement = colorForm.querySelector("select");
  const colorValue = selectElement.value;
  dialogUpdate.close();
  return colorValue;
});

// Opens the Update dialog
btnUpdateSquares.addEventListener("click", () => {
  dialogUpdate.show();
});

// Opens the Color dialog
btnColorSelect.addEventListener("click", () => {
  dialogColor.show();
});

// Closes the Update dialog (via the cancel button)
btnFormCancel.addEventListener("click", () => {
  dialogUpdate.close();
});

// Closes the Color dialog (via the cancel button)
btnColorSelect.addEventListener("click", () => {
  dialogColor.show();
});

/* ------------------------------------------------------ */

function getRandomNum() {
  let num = Math.floor(Math.random() * 256);
  return num;
}

function getRandomColor() {
  const r = getRandomInt();
  const g = getRandomInt();
  const b = getRandomInt();
  return `rgb(${r}, ${g}, ${b})`;
}

function createRainbowColors(colorName) {
  const colors = {
    Red: `rgb(255, 0, 0)`,
    RedOrange: `rgb(255, 69, 0)`,
    Orange: `rgb(255, 165, 0)`,
    YellowOrange: `rgb(255, 174, 66)`,
    Yellow: `rgb(255, 255, 0)`,
    YellowGreen: `rgb(154, 205, 50)`,
    Green: `rgb(0, 128, 0)`,
    Cyan: `rgb(0, 255, 255)`,
    Blue: `rgb(0, 0, 255)`,
    Indigo: `rgb(75, 0, 130)`,
    Violet: `rgb(128, 0, 128)`,
    Magenta: `rgb(199, 21, 133)`,
  };
  return colors[colorName];
}

// Array of color names
const colorNames = [
  "Red",
  "RedOrange",
  "Orange",
  "YellowOrange",
  "Yellow",
  "YellowGreen",
  "Green",
  "Cyan",
  "Blue",
  "Indigo",
  "Violet",
  "Magenta",
];

let currentColorIndex = 0;

// Function to get the next color in the cycle
function getNextColor() {
  const colorName = colorNames[currentColorIndex];
  const color = createRainbowColors(colorName);
  currentColorIndex = (currentColorIndex + 1) % colorNames.length;
  return color;
}

function generateGreyToBlackColors(steps) {
  const colors = [];
  const startColor = [128, 128, 128]; // Grey
  const endColor = [0, 0, 0]; // Black

  for (let i = 0; i <= steps; i++) {
    const r = Math.round(
      startColor[0] + (endColor[0] - startColor[0]) * (i / steps)
    );
    const g = Math.round(
      startColor[1] + (endColor[1] - startColor[1]) * (i / steps)
    );
    const b = Math.round(
      startColor[2] + (endColor[2] - startColor[2]) * (i / steps)
    );
    colors.push(`rgb(${r}, ${g}, ${b})`);
  }
  return colors;
}

// const greyToBlackColors = generateGreyToBlackColors(10);

/* ------------------------------------------------------ */

function createGrid() {
  const container = document.querySelector("#container");
}

function clearGrid(params) {}

function colorOptions(params) {}

function resetSurface(params) {}
