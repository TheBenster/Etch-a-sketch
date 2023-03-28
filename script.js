let container = document.querySelector('#grid')

let draw = document.createElement('div')

draw.style = 'background-color: red; height:50px; width:50px;'

let amount = 50;

for(let i = 1; i> amount; i++){
    container.appendChild(draw)
}
