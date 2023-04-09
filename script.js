let container = document.querySelector('#grid');
let default_color = '#212121';
let changedColor
gridItem = document.getElementsByClassName('.grid-item')
rawColor = document.querySelector('#colorpicker')

rawColor.addEventListener('click', () => {
  default_color = rawColor.value;
})



function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.style = 'height:7px; width:7px; gap:0'
    container.appendChild(cell).className = "grid-item";
    cell.addEventListener('mouseover', () => {
      cell.style.backgroundColor = default_color
    })
  };
}
makeRows(16, 16);