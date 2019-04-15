const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let bigBalls = [];


posX = "";
posY = 0;

function animate () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(animate);

  const willSpinnerSpawn = Math.random()  < 0.5;

  if (willSpinnerSpawn) {
  const fidgetSpinner = new Image();

    fidgetSpinner.src = "img/fidgetSpinner.png";
    bigBalls.push(fidgetSpinner);

  }

  for (let i = 0; i < bigBalls.length; i++) {
    console.log(bigBalls.length)
    fidgetSpinner = bigBalls[i];
    fidgetSpinner.y += 3;
    ctx.drawImage(fidgetSpinner, 100, 100); // this will put a ball every 3 pixels
    if (i > bigBalls.length) {
      bigBalls.splice(i, 1)

    }

  }
}


animate();
