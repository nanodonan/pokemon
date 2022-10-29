const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

//canvas.width = 1024;
//canvas.height = 576;

const CANVAS_WIDTH = canvas.width = 1024 //480
const CANVAS_HEIGHT = canvas.height = 576 //300

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

const mapImage = new Image();
mapImage.src = "./images/pellet-town.png";

const playerImage = new Image();
playerImage.src = "./images/player-down.png"

const keyMap = {
    w: { pressed: false },
    a: { pressed: false },
    s: { pressed: false },
    d: { pressed: false },
}

class Sprite {
    constructor(image, position) {
        this.image = image
        this.position = position
    }
    draw() {
        //render map with zoom to see the house
        ctx.drawImage(this.image, this.position.x, this.position.y)
    }

}

class Player {
    constructor(image) {
        this.image = image
    }
    draw() {
        const playerWidth = playerImage.width / 4
        const playerHeight = playerImage.height
        //render cropped player - crop and paste 
        ctx.drawImage(playerImage,
            0,
            0,
            playerWidth,
            playerHeight, //end of crop 
            canvas.width / 2 - playerWidth / 2,
            canvas.height / 2 - playerHeight / 2,
            playerWidth,
            playerHeight, //end of paste
        )

    }
}

const background = new Sprite(mapImage, { x: -1200, y: -700 })
const player = new Player(playerImage)

function gameloop() {
    //clear all
    //ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    //draw
    background.draw()
    player.draw()

    //update
    if (keyMap.a.pressed) background.position.x += 2
    else if (keyMap.d.pressed) background.position.x -= 2
    else if (keyMap.w.pressed) background.position.y += 2
    else if (keyMap.s.pressed) background.position.y -= 2

    requestAnimationFrame(gameloop)
}
gameloop()

window.addEventListener('keydown', (e) => {

    switch (e.key) {
        case "w":
            keyMap.w.pressed = true
            break;
        case "a":
            keyMap.a.pressed = true
            break;
        case "s":
            keyMap.s.pressed = true
            break;
        case "d":
            keyMap.d.pressed = true
            break;
        default:
            break;
    }
})

window.addEventListener('keyup', (e) => {

    switch (e.key) {
        case "w":
            keyMap.w.pressed = false
            break;
        case "a":
            keyMap.a.pressed = false
            break;
        case "s":
            keyMap.s.pressed = false
            break;
        case "d":
            keyMap.d.pressed = false
            break;
        default:
            break;
    }
})



