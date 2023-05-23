const button = document.querySelector("button");
button.addEventListener("click", function(){
    const mainElement = document.querySelector("main");
    const newGridElement = createGrid();
    mainElement.appendChild(newGridElement);


    for(let i=1; i<101;i++){
        const newCellsElement = createCells();
        newCellsElement.innerHTML = i;
        newGridElement.appendChild(newCellsElement);
    }




    function createCells(){
        const cellElement = document.createElement("div");
        cellElement.classList.add("cell");
        return cellElement;
    }

    function createGrid(){
        const gridElement = document.createElement("div");
        gridElement.classList.add("d-flex" , "flex-wrap" , "m-auto" , "grid");
        return gridElement;
    }
})
