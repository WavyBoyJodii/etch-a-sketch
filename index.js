const page = document.querySelector(".container");
const resetButton = document.querySelector(".reset");

// let gridbox = "";

page.style.display = 'grid';
page.style.gridTemplateColumns = 'repeat(16, 1fr)';
page.style.gridTemplateRows = 'repeat(16, 1fr)';
page.style.gap = 'none';
page.style.margin = 'auto';
page.style.width = '500px';
page.style.height = '500px';
page.style.justifyContent = 'center';


function initGrid(){
    for (let i=0; i<256; i++) {
        // gridbox+= '<div class="box"></div>';
        const box = document.createElement('div');
        box.classList.add('box');
        box.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'red';
            e.target.style.transition = '0.5s';
        });
        page.appendChild(box);
    } 
}

function makeNewPad() {
    removeCurrentGrid(page);
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
        }
    } else {
        alert("value must be a whole number anywhere from 1 to 100");
        return getGridSize();
    };
}

function removeCurrentGrid(parent) {
    // gridbox = "";
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
    // return page.innerHTML = gridbox;
}

function createNewGrid() {
    let side = getGridSize();
    let value = side * side;
    for (let i=0; i<value; i++) {
        // gridbox+= '<div class="box"></div>';
        const box = document.createElement('div');
        box.classList.add('box');
        box.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'red';
            e.target.style.transition = '0.5s';
        });
        page.appendChild(box);
    }
    return page.style.gridTemplateColumns = `repeat(${side}, 1fr)`,
    page.style.gridTemplateRows = `repeat(${side}, 1fr)`;
}

// function changeBackgroundColor() {
//     const boxes = document.querySelectorAll('.box');
//     boxes.forEach((box) => {
//         const boxed = box;
//         boxed.style.backgroundColor = 'red';
//         boxed.style.transition = '1s';

//     })
//     page.style.backgroundColor = 'red';
//     page.style.transition = '1s';
// }

// function makeInteractive() {

// }
// box.addEventListener('mouseover', () => changeBackgroundColor());

resetButton.addEventListener('click', () => makeNewPad());

window.onload = () => initGrid();