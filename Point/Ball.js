class Ball {
  constructor (x, y, r, color){
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
  }

  draw(ctx){
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = "3";
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
    ctx.closePath();
    ctx.stroke();
    ctx.fill()
  }

  distanceToOtherPoint(P) {
    let dx = this.x - P.x;
    let dy = this.y - P.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
  
}
