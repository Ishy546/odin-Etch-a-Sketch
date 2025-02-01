let size = 4;
const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

function createGrid(size) {
    while (container.firstChild) {//Clears the initial grid
        container.removeChild(container.firstChild);
    }
    container.style.width = `${size * 55}px`;
    for (let i = 0; i < size * size; i++) { 
        const grid = document.createElement("div");
        grid.classList.add("grid");
        grid.setAttribute("style", "background-color: white; border: 1px solid black; padding: 20px; border-radius: 2px;");
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
document.querySelectorAll(".grid").forEach((grid) => {
    reset.addEventListener("click", () => {
        grid.style.backgroundColor="white";
    });
});
