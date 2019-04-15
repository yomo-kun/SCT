const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ball = new Circle(200, 200, 50, 237, 182, 232, 1);
let ball2 = new Circle(450, 250, 50);
//let ball3 = new Circle(200, 200,30 , 255, 255, 255, 1)

let v_x = 4;
let v_y = 4;

let v_x2 = 10;
let v_y2 = 10;

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ball.draw(ctx);
  ball.x += v_x;
  ball.y += v_y;
  ball2.draw(ctx);
  ball2.x += v_x2;
  ball2.y += v_y2;

  // BALL 1
  if(ball.x < ball.radius || ball.x > canvas.width-ball.radius){
    v_x =- v_x;

  }
  if(ball.y < ball.radius || ball.y > canvas.height-ball.radius){
    v_y =- v_y;
  }

  //BALL 2
  if(ball2.x <ball2.radius || ball2.x > canvas.width-ball2.radius){
    v_x2 =- v_x2;
  }
  if(ball2.y <ball2.radius || ball2.y > canvas.height-ball2.radius){
    v_y2 =- v_y2;
  }
//  ball3.draw(ctx);
}
animate();
