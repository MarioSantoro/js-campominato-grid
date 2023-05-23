const button = document.querySelector("button");
button.addEventListener("click", function(){
    const mainElement = document.querySelector("main");
    mainElement.innerHTML = "";

    const selectElement = document.querySelector("select").value;

    if(selectElement === "Normal"){
        //Normal
        const newGridElement = createGridNormal();
        mainElement.appendChild(newGridElement);
    
        for(let i=1; i<101;i++){
            const newCellsElement = createCellsNormal();
            newCellsElement.innerHTML = i;
            newCellsElement.addEventListener("click" , function(){
                newCellsElement.classList.toggle("toggle");
            })
            newGridElement.appendChild(newCellsElement);
        }



        function createCellsNormal(){
            const cellElement = document.createElement("div");
            cellElement.classList.add("cell-Normal" , "d-flex" , "align-items-center" , "justify-content-center" , "fw-semibold");
            return cellElement;
        }

        function createGridNormal(){
            const gridElement = document.createElement("div");
            gridElement.classList.add("d-flex" , "flex-wrap" , "m-auto" , "grid-Normal");
            return gridElement;
        }

    }else if(selectElement === "Hard"){
        //Hard
        const newGridElement = createGridHard();
        mainElement.appendChild(newGridElement);
        
        for(let i=1; i<82;i++){
            const newCellsElement = createCellsHard();
            newCellsElement.innerHTML = i;
            newCellsElement.addEventListener("click" , function(){
                newCellsElement.classList.toggle("toggle");
            })
            newGridElement.appendChild(newCellsElement);
        }



        function createCellsHard(){
            const cellElement = document.createElement("div");
            cellElement.classList.add("cell-Hard" , "d-flex" , "align-items-center" , "justify-content-center" , "fw-semibold");
            return cellElement;
        }

        function createGridHard(){
            const gridElement = document.createElement("div");
            gridElement.classList.add("d-flex" , "flex-wrap" , "m-auto" , "grid-Hard");
            return gridElement;
        }
    }else if(selectElement === "Crazy"){
        //Crazy
        const newGridElement = createGridCrazy();
        mainElement.appendChild(newGridElement);
        
        for(let i=1; i<50;i++){
            const newCellsElement = createCellsCrazy();
            newCellsElement.innerHTML = i;
            newCellsElement.addEventListener("click" , function(){
                newCellsElement.classList.toggle("toggle");
            })
            newGridElement.appendChild(newCellsElement);
        }



        function createCellsCrazy(){
            const cellElement = document.createElement("div");
            cellElement.classList.add("cell-Crazy" , "d-flex" , "align-items-center" , "justify-content-center" , "fw-semibold");
            return cellElement;
        }

        function createGridCrazy(){
            const gridElement = document.createElement("div");
            gridElement.classList.add("d-flex" , "flex-wrap" , "m-auto" , "grid-Crazy");
            return gridElement;
        }
    }   
    
})
