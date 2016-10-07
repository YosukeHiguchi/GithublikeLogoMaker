var ctx;
var H = 600;
var W = 600;

function init() {
  var canvas = document.getElementById("canvas");

  if (canvas.getContext) {
    ctx = canvas.getContext("2d");

    ctx.fillStyle = "rgba(240, 240, 240, 0.5)";
    ctx.fillRect(0, 0, W, H);

    getImage();
  }
}

function getImage() {
  var r = randomInt(255);
  var g = randomInt(255);
  var b = randomInt(255);

  for (var i = 0; i < 5; i++) {
    for (var j = 3; j < 5; j++)
      if (randomInt(2) == 0){
        draw(i, j, r, g, b, 0.5);
        draw(i, 4 - j, r, g, b, 0.5);
      }

      if (randomInt(2) == 0) draw(i, 2, r, g, b, 0.5);
  }
}

function draw(x, y, r, g, b, a) {
  var L = H / 6;

  ctx.fillStyle = "rgba(" + r + "," + g + "," + b + ",0.5)";
  ctx.fillRect(50 + y * L, 50 + x * L, L, L);
}
