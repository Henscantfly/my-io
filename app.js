const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let player = {
    x: 400,
    y: 200,
    size: 50,
    health: 100
};

let bomb = {
    x: Math.floor(Math.random() * (745 - 500 + 1) + 500),
    y: Math.floor(Math.random() * (500 - 0 + 1)),
    size: 20
};

function update() {
    const distance = Math.sqrt((player.x - bomb.x) ** 2 + (player.y - bomb.y) ** 2);
    if (distance < 100) {
        player.health--;
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "red";
    ctx.fillRect(bomb.x, bomb.y, bomb.size, bomb.size);

    ctx.fillStyle = "white";
    ctx.font = "24px Arial";
    ctx.fillText("Player Health: " + player.health, 20, 30);

    ctx.fillStyle = "blue";
    ctx.fillRect(player.x, player.y, player.size, player.size);

    requestAnimationFrame(draw);
}

setInterval(update, 1000); // Update every second
draw();

