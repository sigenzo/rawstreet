const canvas = document.getElementById("grainient");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

let t = 0;

function draw() {
  t += 0.005;

  const g = ctx.createRadialGradient(
    canvas.width * (0.5 + Math.sin(t) * 0.2),
    canvas.height * (0.5 + Math.cos(t) * 0.2),
    100,
    canvas.width / 2,
    canvas.height / 2,
    canvas.width
  );

  g.addColorStop(0, "#FF9FFC");
  g.addColorStop(0.5, "#5227FF");
  g.addColorStop(1, "#000000");

  ctx.fillStyle = g;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  requestAnimationFrame(draw);
}

draw();
