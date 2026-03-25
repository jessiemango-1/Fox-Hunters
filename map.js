let mapImage = new Image();
mapImage.src = "map.png";

function drawMap() {
  ctx.drawImage(mapImage, 0, 0, canvas.width, canvas.height);
}
