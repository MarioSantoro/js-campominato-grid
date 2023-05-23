const button = document.querySelector("button");
button.addEventListener("click", function(){
    const mainElement = document.querySelector("main");
    mainElement.innerHTML = "";
    let len = 0;

    const selectElement = document.querySelector("select").value;
    const root = document.querySelector(":root");
    const rootStyle = getComputedStyle(root);

    if(selectElement === "Normal"){
        len = 101;
         root.style.setProperty("--cells" , 10);
    }else if(selectElement === "Hard"){
        len = 82;
        root.style.setProperty("--cells" , 9);
    }else if(selectElement === "Crazy"){
        len = 50;
        root.style.setProperty("--cells" , 7);
    }

    const newGridElement = createGridNormal();
    mainElement.appendChild(newGridElement);

    function createCellsNormal(){
        const cellElement = document.createElement("div");
        cellElement.classList.add("cell" , "Normal" , "d-flex" , "align-items-center" , "justify-content-center" , "fw-semibold");
        return cellElement;
    }
    
    function createGridNormal(){
        const gridElement = document.createElement("div");
        gridElement.classList.add("d-flex" , "flex-wrap" , "m-auto" , "grid-Normal");
        return gridElement;
    }
    
    for(let i=1; i<len;i++){
        const newCellsElement = createCellsNormal();
        newCellsElement.innerHTML = i;
        newCellsElement.addEventListener("click" , function(){
            newCellsElement.classList.toggle("toggle");
            
        });
        newGridElement.appendChild(newCellsElement);
    }
})
