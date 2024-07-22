const divContainer = document.querySelector("#container");
const btn = document.createElement("button");

for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.classList.add("square");
  divContainer.appendChild(div);
}
