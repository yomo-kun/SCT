class Point {
  constructor(x, y, r, color) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
  }

  draw(context) {
    context.beginPath();
    context.strokeStyle = "black";
    context.lineWidth = "3";
    context.fillStyle = this.color;
    context.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    context.closePath();
    context.stroke();
    context.fill();
  }

  distanceToOtherPoint(P) {
    let dx = this.x - P.x;
    let dy = this.y - P.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

}
