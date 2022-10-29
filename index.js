const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

//canvas.width = 1024;
//canvas.height = 576;

canvas.width = 480
canvas.height = 300

c.fillStyle = "white";
c.fillRect(0, 0, canvas.width, canvas.height);

const mapImage = new Image();
mapImage.src = "./images/pellet-town.png";

const playerImage = new Image();
playerImage.src = "./images/player-down.png"

mapImage.onload = () => {
    //render map with zoom to see the house
    // c.drawImage(mapImage, -785, -650);

    c.drawImage(mapImage, -1200, -700);

    //render cropped player - crop and paste    
    const playerWidth = playerImage.width / 4
    const playerHeight = playerImage.height

    c.drawImage(playerImage,
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

const keyMap = {
    w: { pressed: false },
    a: { pressed: false },
    s: { pressed: false },
    d: { pressed: false },
}

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



