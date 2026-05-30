function makeGrid(size) {
    const screen = document.querySelector(".gird-items")


    for (let i = 0; i < size; i++) {
    const column = document.createElement("div");
    column.classList.add("column")

    for(let j = 0; j < size; j++){
    const row = document.createElement("div");
    row.classList.add("row");
    column.appendChild(row);
        }
        screen.appendChild(column);
    }
   
}
makeGrid(16);
