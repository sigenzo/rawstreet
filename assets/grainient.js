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
  t += 0.003;

  // ---- SMOOTH RADIAL GRADIENT ----
  const x = canvas.width * (0.5 + Math.sin(t) * 0.15);
  const y = canvas.height * (0.5 + Math.cos(t * 0.9) * 0.15);

  const g = ctx.createRadialGradient(
    x,
    y,
    0,
    canvas.width / 2,
    canvas.height / 2,
    canvas.width * 0.9
  );

  g.addColorStop(0, "rgba(0, 0, 0, 0.9)");
  g.addColorStop(0.35, "rgba(61, 61, 61, 0.6)");
  g.addColorStop(0.7, "rgba(187, 187, 187, 0.35)");
  g.addColorStop(1, "rgb(255, 255, 255)");

  ctx.fillStyle = g;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // ---- FILM GRAIN ----
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    const grain = (Math.random() - 0.5) * 18; // intensity
    data[i] += grain;
    data[i + 1] += grain;
    data[i + 2] += grain;
  }

  ctx.putImageData(imageData, 0, 0);

  requestAnimationFrame(draw);
}

draw();
