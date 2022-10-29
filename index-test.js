/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas-01")
const ctx = canvas.getContext("2d")

const CANVAS_WIDTH = canvas.width = 400
const CANVAS_HEIGHT = canvas.height = 300

let x = 0
let y = 0
let animationRef

function loop() {
    //limpa tudo
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    //draw
    ctx.fillStyle = "blue"
    const posX = 50 + x
    const posY = 50 + y
    ctx.fillRect(posX, posY, 20, 20)
    console.log("x: ", x, "y: ", y)

    //update
    animationRef = requestAnimationFrame(loop)
}

function stopLoop() {
    cancelAnimationFrame(animationRef)
}

canvas.addEventListener('click', function () {
    stopLoop()
})

window.addEventListener('keydown', (e) => {

    switch (e.key) {
        case "w":
            y = y - 1
            break;
        case "a":
            x = x - 1
            break;
        case "s":
            y = y + 1
            break;
        case "d":
            x = x + 1;
            break;
        default:
            break;
    }
})

//Animation start
//loop()
