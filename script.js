let container = document.querySelector('#container')
const range = document.getElementById('range')
const chooseColor = document.getElementById('chooseColor')
const clear = document.getElementById('clear') 
const eraser = document.getElementById('eraser')
const rainbow =document.getElementById('rainbow')

let getColor= ()=> {
    return window.getcolor || `hsla(${Math.floor(Math.random()* 360)}, 100%, 50%, ${Math.random()} )`
}

let bgOfOneGrid=()=>{
    let grid = document.querySelectorAll('.grids')
    grid.forEach(g => {
        g.addEventListener('mouseover', ()=>{
            g.style.background = getColor()
        })
        
        
    });
}

let n = range.value
makeGrid(n)


function createGrid(){
    const grids = document.createElement('button')
    grids.classList = "grids"
    container.appendChild(grids)
    
}

function numberOfGrids(number) {
    container.style.gridTemplateColumns = `repeat(${number}, 1fr)`
    container.style.gridTemplateRows = `repeat(${number}, 1fr)`
    
}


function makeGrid(number){
    for(let i = 0; i < number**2; i++){
        createGrid()
        
    }
    numberOfGrids(number)
    bgOfOneGrid()
    
}

function clearGrids() {
    let grid = document.querySelectorAll('.grids')
    
    for(let i=0; i<grid.length; i++){
        grid[i].style.background="white"
    }
}

range.addEventListener('input', ()=>{
    clearGrids()
    n= range.value
    makeGrid(n)

})

rainbow.addEventListener('click', ()=>{
    monoColor.classList.remove('active')
    clear.classList.remove('active')
    eraser.classList.remove('active')
    rainbow.classList.add('active')
    if (rainbow.classList[1] == 'active') {
        getColor=()=>{
            return `hsla(${Math.floor(Math.random()* 360)}, 100%, 50%, ${Math.random()} )`
        }
    }
    makeGrid(n)
    
})
eraser.addEventListener('click', ()=>{
    
    clear.classList.remove('active')
    rainbow.classList.remove('active')
    monoColor.classList.remove('active')
    eraser.classList.add('active')
    if (eraser.classList[1] == 'active') {
        getColor=()=>{
            return monoColor.value
        }
    }
    makeGrid(n)
    
})

monoColor.addEventListener('click', ()=>{
    
    clear.classList.remove('active')
    eraser.classList.remove('active')
    rainbow.classList.remove('active')
    monoColor.classList.add('active')
    if (monoColor.classList[1] == 'active') {
        getColor=()=>{
            return chooseColor.value
        }
    }
    makeGrid(n)
    
})

clear.addEventListener('click', ()=>{
    clearGrids()
})


