const size = 4;
const container = document.querySelector(".container");
container.style.width = `${size * 55}px`; 
for (let i = 0; i < 16; i++) { 
    const grid = document.createElement("div");
    grid.classList.add("grid");
    grid.setAttribute("style", "background-color: green; border: 1px solid black; flex: 1; padding: 20px;")
    container.appendChild(grid);
}

