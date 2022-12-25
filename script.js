/*-------create the container for all square div------*/
let container = document.createElement("div");
container.id = "container";
document.body.appendChild(container);

/*--------------------create grids--------------------*/

function createDefaultGrid(gridNum) {
    for (let x = 0; x < (gridNum * gridNum); x++) {
        const grid = document.createElement("div");
        grid.className = "grid";
        document.getElementById("container").appendChild(grid);
        container.style.gridTemplateRows = `repeat(${gridNum}, 1fr)`
        container.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`
        console.log("make default grids successfully.")
    }
}
createDefaultGrid(16)

/*-----------------User's custom grids----------------*/

let clearBtn = document.querySelector("#get-custom-grid-numbers");
clearBtn.addEventListener("click", () => {
    resetGrids();
    console.log("button behaves normally.")
    getUserGridNum();
    console.log("get user grid input successfully.");
    setUserDefineGrid();
})

/*----------------erase current grids---------------*/

function resetGrids() {
    let container = document.getElementById("container");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
        console.log("erase all existing grids successfully.");
    }
}

/*------------get user input grid number------------*/

let userGridNum = 0;
isValid = false;
function getUserGridNum() {
    do {
        userGridNum = prompt("Number of square per side? Maximum 100 please.");
        if (userGridNum === null) break //User clicked "CANCEL"

        userGridNum = parseInt(userGridNum);
        isValid = userGridNum >= 1 && userGridNum <= 100;

        if (isValid) {
            alert("You chose " + userGridNum);
        } else {
            alert("Number must be at no less than 0 and no more than 100 please.");
        }
    } while ( !isValid );
    container.style.gridTemplateRows = `repeat(${userGridNum}, auto)`
    container.style.gridTemplateColumns = `repeat(${userGridNum}, auto)`
}

/*-----------make custom grid from user input--------*/

function setUserDefineGrid() {
    for (let x = 0; x < (userGridNum * userGridNum); x++) {
        const grid = document.createElement("div");
        grid.className = "grid";
        document.getElementById("container").appendChild(grid);
        console.log(userGridNum)
    }
    console.log("user grids set out successfully.")
}

/*-------------make a mouse down function-------------*/


