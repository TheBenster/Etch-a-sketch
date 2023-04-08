let container = document.querySelector('#grid');
let default_color = '#212121';



function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.style = 'height:7px; width:7px; gap:0'
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};
let gridItem = document.querySelector('.grid-item')

makeRows(16, 16);