const canvas = document.getElementById("grain");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

function drawGrain() {
  ctx.fillStyle = "rgba(255, 255, 255, 0.51)";
  const grainCount = 700; // more particles for stronger grain
  for (let i = 0; i < grainCount; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    ctx.fillRect(x, y, 1, 1);
  }
}


function draw() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawGrain();

  requestAnimationFrame(draw);
}

draw();

