function makeGrid(size) { //creates grids
    screen.innerHTML = "";
    for (let i = 0; i < size; i++) {
    const column = document.createElement("div");
    column.classList.add("column")
        screen.appendChild(column);
    for(let j = 0; j < size; j++){
    const row = document.createElement("div");
    row.classList.add("row");
    column.appendChild(row);
        }
    }
  
}

const screen = document.querySelector(".gird-items")
const clear = document.querySelector("#delete") //clear button
let isDrawing = false;
screen.addEventListener('mousedown', () => {
    isDrawing = true; 
});
screen.addEventListener('mouseup', () => {
    isDrawing = false;
});
screen.addEventListener('mouseover' , (event) => {
    if(isDrawing && event.target.classList.contains("row")) {
        event.target.style.backgroundColor = "red";
    }
});
const btn = document.querySelector("#btn"); //button to add grids
btn.addEventListener("click" , () => {
    let newGrid = prompt("enter the size of grids: ")
    if(newGrid < 100) {
        makeGrid(Number(newGrid));
    }else {
        alert("please enter less than 100 grids!!!")
    }
});

clear.addEventListener("click" , () => { 
    let rows = document.querySelectorAll(".row");
    for(let i = 0; i < rows.length; i++) {
        rows[i].style.backgroundColor = "";
    }
})
