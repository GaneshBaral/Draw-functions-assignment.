// Shortcut functions
function stroke(color) {
  ctx.strokeStyle = color;
}

function fill(color) {
  ctx.fillStyle = color;
}

function lineWidth(width) {
  ctx.lineWidth = width;
}

function font(fontSetting) {
  ctx.font = fontSetting;
}


// Draw rectangles
function drawPlatform(x, y, color) {
  stroke(color);
  rect(x + 50, y + 50, w + 50, h + 50, "fill");
}
drawPlatform(200, 100, "red");




