const increaseBtn = document.querySelector('.increase')
const decreaseBtn = document.querySelector('.decrease')
const sizeEl = document.querySelector('.size')
const colorEl = document.querySelector('.color')
const clearEl = document.querySelector('.clear')
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let size = 15;
let isPressed = false;
let color = 'black'
let x = undefined
let y = undefined


canvas.addEventListener('mousedown', (e) => {
    isPressed = true
    x = e.offsetX
    y = e.offsetY
})

canvas.addEventListener('mouseup', () => {
    isPressed = false;
    x = undefined;
    y = undefined;
})

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY
        drawCircle(x2, y2)
        drawLine(x,y, x2, y2)
        x = x2
        y = y2
    }
})

increaseBtn.addEventListener('click', () => {
    size += 5
    if (size >= 40) {
        size = 40;
    }
    sizeEl.innerText = size
})

decreaseBtn.addEventListener('click', () => {
    size -= 5;
    if (size <= 5) {
        size = 5
    }
    sizeEl.innerText = size
})

colorEl.addEventListener('change', (e)=>{
     color =  e.target.value
})

clearEl.addEventListener('click',()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})


function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color;
    ctx.lineWidth = size+size
    ctx.stroke()
}



