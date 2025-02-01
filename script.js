let size = 4;
const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

function createGrid(size) {
    while (container.firstChild) {//Clears the initial grid
        container.removeChild(container.firstChild);
    }
    const containerSize = 400;  // Fixed container size (400px for example)
    const gridSize = containerSize / size;  // Each grid's size will be based on the container

    // Set the width of the container (this could be dynamic if you want)
    container.style.width = `${containerSize}px`;
    for (let i = 0; i < size * size; i++) { 
        const grid = document.createElement("div");
        grid.classList.add("grid");
        grid.style.width = `${gridSize}px`;
        grid.style.height = `${gridSize}px`;
        grid.style.border = "1px solid black";
        grid.style.backgroundColor = "white";
        grid.style.boxSizing = "border-box";
        container.appendChild(grid);
    }
    document.querySelectorAll(".grid").forEach((grid) => {
        grid.addEventListener("mouseover", function (e) {
            e.target.style.backgroundColor = "yellow";
        });
    });
}
createGrid(size);
btn.addEventListener("click", () => {
    let newSize = prompt("Enter new size:");
    if (newSize !== null && newSize > 0) {
        size = parseInt(newSize);
        createGrid(size);
    }
});
const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
    document.querySelectorAll(".grid").forEach((grid) => {
        grid.style.backgroundColor = "white";
    });
});