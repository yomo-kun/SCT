const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ship = new Image();
ship.src = "img/spaceship.png"

let posX = 100;
let posY = 100;
let velX = 10;
let velY = 10;

console.log('hellow');


ship.addEventListener('load',()=>{

  animate();
})

document.addEventListener('keydown',()=>{
  console.log("cono");
  switch (event.key) {
    case "ArrowRight":
    posX += velX;
    break;

     case "ArrowUp":
     posY -= velY;
     break;

     case "ArrowDown":
     posY += velY;
     break;

     case "ArrowLeft":
     posX -= velX;
     break;





  }
})

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if(posX > canvas.width  + ship.width/2){
    posX = -ship.width/2;
   }
  if(posX < -ship.width / 2 + ship.width/2){
    posX = ship.width/2;
  }
  // if(posY > canvas.lenght  + ship.lenght/2){
  //   posY = -ship.lenght/2;
  // }
  // if(posY < canvas.lenght  + ship.lenght/2){
  //   posY = -ship.lenght/2;
  // }

  ctx.translate(posX, posY);
  ctx.drawImage(ship, -ship.width/2, -ship.height/2);
  ctx.resetTransform();



}
