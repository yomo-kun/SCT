class Circle{
  constructor(x, y, radius, r, g, b, a){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.r = r || 255;
    this.g = g || 255;
    this.b = b || 0;
    this.a = a || 0.4;
  }

  get color(){
    return "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")";
  }

  draw(ctx){
    ctx.beginPath();
    ctx.fillStyle = this.color;

    ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);

    ctx.fill();
    ctx.closePath();
  }
}
