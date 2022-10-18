const page = document.querySelector(".container");

let gridbox = "";

for (let i=0; i<256; i++) {
    gridbox+= '<div class="box"></div>';
}

page.innerHTML = gridbox;


function changeColor() {
    
}