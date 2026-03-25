let mapImage = new Image();
mapImage.src = "assets/map.png";

function drawMap() {
  ctx.drawImage(mapImage, 0, 0, canvas.width, canvas.height);
}
