// Select necessary DOM elements
const squareForm = document.querySelector("#squareForm");
const colorForm = document.querySelector("#colorForm");
const resetBtn = document.querySelector("#reset-grid");
const container = document.querySelector("#container");

const input = document.querySelector("#numOfSquares");
const btnFormCancel = document.querySelector("#cancelBtn");

const btnUpdateSquares = document.querySelector("#update-squares-btn");
const btnColorSelect = document.querySelector("#color-select-btn");

const dialogUpdate = document.querySelector("#dialogUpdate");
const dialogColor = document.querySelector("#dialogColor");

/* ------------------------------------------------------ */

// Event listener for creating the grid based on user input
squareForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const numValue = input.value;
  dialogUpdate.close();
  createGrid(numValue, numValue);
});

// Event listener for applying the selected color option
colorForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const selectElement = colorForm.querySelector("select");
  const colorValue = selectElement.value;
  dialogColor.close();
  colorOptions(colorValue);
});

// Event listener for clearing the entire grid
resetBtn.addEventListener("click", (e) => {
  e.preventDefault();
  clearGrid();
  createGrid(24, 24);
});

// Event listeners for opening and closing dialogs
btnUpdateSquares.addEventListener("click", () => {
  dialogUpdate.show();
});

btnColorSelect.addEventListener("click", () => {
  dialogColor.show();
});

btnFormCancel.addEventListener("click", () => {
  dialogUpdate.close();
});

/* ------------------------------------------------------ */

// Function to create a grid with the specified number of columns and rows
function createGrid(columns, rows) {
  clearGrid(); // Clear any existing grid before creating a new one
  for (let i = 0; i < columns; i++) {
    const columnDiv = document.createElement("div");
    columnDiv.classList.add("column");
    for (let k = 0; k < rows; k++) {
      const rowDiv = document.createElement("div");
      rowDiv.classList.add("row");
      columnDiv.appendChild(rowDiv);
    }
    container.appendChild(columnDiv);
  }
}

// Function to clear the grid container
function clearGrid() {
  container.innerHTML = "";
}

// Function to generate a random RGB value
function getRandomNum() {
  return Math.floor(Math.random() * 256);
}

// Function to create a random color in RGB format
function getRandomColor() {
  const r = getRandomNum();
  const g = getRandomNum();
  const b = getRandomNum();
  return `rgb(${r}, ${g}, ${b})`;
}

// Function to return the RGB value for a given color name in the rainbow sequence
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

// Array of rainbow color names
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

let currentColorIndex = 0; // Keeps track of the current color in the rainbow cycle

// Function to get the next color in the rainbow cycle
function getNextColor() {
  const colorName = colorNames[currentColorIndex];
  const color = createRainbowColors(colorName);
  currentColorIndex = (currentColorIndex + 1) % colorNames.length;
  return color;
}

// Function to generate an array of colors transitioning from grey to black
function greyToBlack(steps) {
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

// Function to apply the selected color option to the grid
// Function to apply a color to each square on hover
function applyColorOnHover(squareBoxes, getColorFunction) {
  squareBoxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = getColorFunction();
    });
  });
}

// Specific color application functions
function applyBlackColor(squareBoxes) {
  applyColorOnHover(squareBoxes, () => "#000");
}

function applyRandomColor(squareBoxes) {
  applyColorOnHover(squareBoxes, getRandomColor);
}

function applyGreyToBlack(squareBoxes) {
  const colors = greyToBlack(10);
  let colorIndex = 0;
  applyColorOnHover(squareBoxes, () => {
    const color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
    return color;
  });
}

function applyRainbowColors(squareBoxes) {
  applyColorOnHover(squareBoxes, getNextColor);
}

// Function to handle color options
function colorOptions(colorValue) {
  const squareBoxes = document.querySelectorAll(".column .row");

  switch (colorValue) {
    case "black":
      applyBlackColor(squareBoxes);
      break;
    case "random":
      applyRandomColor(squareBoxes);
      break;
    case "grey":
      applyGreyToBlack(squareBoxes);
      break;
    case "rainbow":
      applyRainbowColors(squareBoxes);
      break;
    default:
      console.log("Invalid color option");
  }
}
