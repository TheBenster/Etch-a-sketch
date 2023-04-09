let container = document.querySelector('#grid');
let default_color = '#212121';
let changedColor
gridItem = document.getElementsByClassName('.grid-item')
rawColor = document.querySelector('#colorpicker')
random = document.querySelector('#random')
clear = document.querySelector('#clear')


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
    clear.addEventListener('click', () => {
      cell.style.backgroundColor = ''
    })
    random.addEventListener('click', () => {
      default_color  = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")
    })
  };
}
makeRows(16, 16);