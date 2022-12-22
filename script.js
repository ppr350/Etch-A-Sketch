/*-------create the container for all square div------*/
const container = document.createElement("div");
container.id = "container";
document.body.appendChild(container);

/*--------------------create grids--------------------*/

function createGrids (grids) {
    for (let y = 0; y < grids; y++) {
        const makeGrids = document.createElement("div");
        makeGrids.className = "makeGrids";
        document.getElementById("container").appendChild(makeGrids);
    }
}
createGrids(256);

/*-----------------User's custom grids----------------*/
//let getCustomGridNumbers = document.querySelector("#get-custom-grid-numbers");

let clear = document.querySelector("#get-custom-grid-numbers");
clear.addEventListener("click", () => {
    resetGrids()
})


let setCustomGridNumber = 0;
isValid = false;
function setCustomGridNumberfuntion() {
    do {
        setCustomGridNumber = prompt("Number of square per side? Maximum 100 please.");
        if (setCustomGridNumber === null) break //User clicked "CANCEL"

        setCustomGridNumber = parseInt(setCustomGridNumber);
        isValid = setCustomGridNumber >= 1 && setCustomGridNumber <= 100;

        if (isValid) {
            alert("You chose " + setCustomGridNumber);
        } else {
            alert("Number must be at no less than 0 and no more than 100 please.");
        }
    } while ( !isValid );
    console.log(setCustomGridNumber);
}

