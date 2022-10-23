const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

c.fillStyle = "white";
c.fillRect(0, 0, canvas.width, canvas.height);

const mapImage = new Image();
mapImage.src = "./images/pellet-town.png";

const playerImage = new Image();
playerImage.src = "./images/player-down.png"

mapImage.onload = () => {
    //render map with zoom to see the house
    c.drawImage(mapImage, -785, -650);

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



