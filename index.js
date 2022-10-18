const page = document.querySelector(".container");
const resetButton = document.querySelector(".reset");
const box = document.querySelector('.box');


let gridbox = "";

for (let i=0; i<256; i++) {
    gridbox+= '<div class="box"></div>';
}

page.style.display = 'grid';
page.style.gridTemplateColumns = 'repeat(16, minmax(30px,1fr))';
page.style.gridTemplateRows = 'repeat(16, minmax(30px,1fr))';
page.style.gap = 'none';
page.style.margin = 'auto';
page.style.width = '500px';
page.style.height = '500px';
page.style.justifyContent = 'center';

page.innerHTML = gridbox;


// function changeColor() {
    
// }

resetButton.addEventListener('click', () => makeNewPad());

function makeNewPad() {
    removeCurrentGrid();
    createNewGrid();
}

function getGridSize() {
    let input = prompt("Number of squares per side of new pad?");
    console.log(input)
    console.log(Number.isInteger(Number(input)))
    if (Number.isInteger(Number(input))) {
        if (Number(input) <= 100) {
            let fixedInput = Number(input);
            console.log(fixedInput);
            return fixedInput;
        } else {
            alert("value must be 100 or less");
            return getGridSize();
            // prompt("Number of squares per side of new pad?", "eg. 32");
        }
    } else {
        alert("value must be a whole number anywhere from 1 to 100");
        return getGridSize();
        // prompt("Number of squares per side of new pad?", "eg. 32");
    };
}

function removeCurrentGrid() {
    gridbox = "";
    return page.innerHTML = gridbox;
}

function createNewGrid() {
    let side = getGridSize();
    let value = side * side;
    for (let i=0; i<value; i++) {
        gridbox+= '<div class="box"></div>';
    }
    return page.innerHTML = gridbox,
    page.style.gridTemplateColumns = `repeat(${side}, minmax(10px, 1fr))`,
    page.style.gridTemplateRows = `repeat(${side}, minmax(30px, 1fr))`;
}