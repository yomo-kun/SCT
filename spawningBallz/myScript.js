console.log("ur on level 1!!");
const canvas = document.getElementById("canvas");
let instructions = document.getElementById("text");
let clickedBalls = document.getElementById("amount");
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let levelBoost = 10;

let level = 0.02;

let score = 0;

let levelNum = 1;

function grn(max) {
  return Math.floor(Math.random() * max);
}

let bigBalls = [];

function animate() {
  instructions.innerHTML = "Level: " + levelNum + "<br>Points: " + score;

//  clickedBalls.innerHTML = "points" + score;

  if(score >= levelBoost){
  console.log("uve reached level", levelNum, "!!")
    level += 0.02;
    levelBoost += 10;
    levelNum += 1;
    console.log(level);

  }
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (Math.random() < level) {
    //  let bigBalls = [];
    let ball = new Point(grn(canvas.width), 0, 20, "#f7a5e2");
    bigBalls.push(ball);
  }
  for (let i = 0; i < bigBalls.length; i++) {
    ball = bigBalls[i];
    ball.y += 3
    ball.draw(ctx);
    if (ball.y > canvas.height) {
      bigBalls.splice(i, 1)
    }




  }



}
document.addEventListener('mousedown', (evt) => {
  let mousePos = {};
  mousePos.x = evt.clientX;
  mousePos.y = evt.clientY;


  for (var i = 0; i < bigBalls.length; i++) {

    if (bigBalls[i].distanceToOtherPoint(mousePos)<bigBalls[i].r) {
      bigBalls[i].color = "#69b57f"

      score += 1;
      console.log(score);
      instructions.innerHTML = "";

    }
  }
})


animate();
