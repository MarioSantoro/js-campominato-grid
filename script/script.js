const button = document.querySelector("button");
button.addEventListener("click", function(){
    const mainElement = document.querySelector("main");
    mainElement.innerHTML = "";
    const newGridElement = createGrid();
    mainElement.appendChild(newGridElement);


    for(let i=1; i<101;i++){
        const newCellsElement = createCells();
        newCellsElement.innerHTML = i;
        newCellsElement.addEventListener("click" , function(){
            newCellsElement.classList.toggle("toggle");
        })
        newGridElement.appendChild(newCellsElement);
    }




    function createCells(){
        const cellElement = document.createElement("div");
        cellElement.classList.add("cell" , "d-flex" , "align-items-center" , "justify-content-center" , "fw-semibold");
        return cellElement;
    }

    function createGrid(){
        const gridElement = document.createElement("div");
        gridElement.classList.add("d-flex" , "flex-wrap" , "m-auto" , "grid");
        return gridElement;
    }
})
