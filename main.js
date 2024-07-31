const squareForm = document.querySelector("#squareForm");
const colorForm = document.querySelector("#colorForm");

const input = document.querySelector("#numOfSquares");

const btnUpdateSquares = document.querySelector("#update-squares-btn");
const btnColorSelect = document.querySelector("#color-select-btn");

const dialogUpdate = document.querySelector("#dialogUpdate");
const dialogColor = document.querySelector("#dialogColor");

const btnFormCancel = document.querySelector("#cancelBtn");

squareForm.addEventListener("submit", (e) => {
  e.preventDefault();
  squareForm.querySelector(`input[type="number"]`);
  const numValue = input.value;
  dialogUpdate.close();
  return numValue;
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

function createGrid(params) {
  for (let i = 0; i < 256; i++) {}
}
