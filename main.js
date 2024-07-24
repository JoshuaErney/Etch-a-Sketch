const form = document.querySelector("#squareForm");
const input = document.querySelector("#numOfSquares");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior
  const value = input.value;
  console.log(value); // Now this will correctly log the updated value
});
