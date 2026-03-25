let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

canvas.width = 480;
canvas.height = 400;

// 🦊 Player
let player = {
  x: 1,
  y: 1,
  age: "kit",
  health: 100,
  hunger: 0,
  skill: 0
};

// 🎮 Controls
document.addEventListener("keydown", e => {
  if (e.key === "ArrowUp") player.y--;
  if (e.key === "ArrowDown") player.y++;
  if (e.key === "ArrowLeft") player.x--;
  if (e.key === "ArrowRight") player.x++;
});

// 🎨 Draw map
function drawMap() {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      ctx.font = "40px Arial";
      ctx.fillText(map[y][x], x * tileSize, y * tileSize + 50);
    }
  }
}

// 🦊 Draw fox
function drawPlayer() {
  ctx.fillStyle = "orange";
  ctx.fillRect(player.x * tileSize, player.y * tileSize, 40, 40);
}

// ❤️ Update
function update() {
  player.hunger += 0.02;

  if (player.hunger > 50) {
    player.health -= 0.1;
  }

  // grow up
  if (player.skill > 3) player.age = "apprentice";
  if (player.skill > 6) player.age = "adult";
}

// 📖 Story system
function updateStory() {
  let story = document.getElementById("story");
  let stats = document.getElementById("stats");

  stats.innerText =
    "Age: " + player.age +
    " | Health: " + Math.floor(player.health) +
    " | Hunger: " + Math.floor(player.hunger);

  let tile = map[player.y]?.[player.x];

  if (tile === "🌊") {
    story.innerText = "You reach water. You drink and feel better.";
    player.health += 0.5;
  } 
  else if (tile === "🕳️") {
    story.innerText = "This is your den. You can rest safely.";
    player.health += 1;
  } 
  else {
    story.innerText = "You move through the forest...";
  }
}

// 🎮 Game loop
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawMap();
  drawPlayer();
  update();
  updateStory();

  requestAnimationFrame(gameLoop);
}

gameLoop();
