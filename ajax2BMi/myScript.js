const berekenen = document.getElementById('button');
const lengthElm = document.getElementById('lengthElm');
const weightElm = document.getElementById('weightElm');
const resultaat = document.getElementById('resultaat');

var underWeight = "chu skinn bro: Too skinny";
var normalWeight = "KEEP IT GOING: Normal weight";
var overweight = "a lil thicc: Obses class 1";
var obese = "WATCH UR WEIGHT: Obese class 2";
var morbidly = "BOI UR FAT BITCH: Obese class 3";



function ajax(){
  let length = lengthElm.value;
  let weight = weightElm.value;


  let debug = true;
  let controlScript = "myPhp.php";
  let xmlhttp = new XMLHttpRequest();
console.log(weight.value, "cono");
  let httpString = controlScript + "?weightElm=" + Number(weight) + "&lengthElm=" + Number(length);
  let httpRespone = "";
  if(debug) console.log(httpString);//debug wat vraag ik aaan de server
  xmlhttp.open("GET", httpString, true);
  xmlhttp.send();
  xmlhttp.onreadystatechange = function(){
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
      if(debug) console.log("http respone = " + xmlhttp.responseText);
      httpResponse = xmlhttp.responseText;
    if(httpResponse <= 18.4){
       document.getElementById('resultaat').innerHTML = Number(httpResponse).toFixed(1) + "<br>" + underWeight;
    }
    if(httpResponse >= 18.5 && httpResponse <= 24.9){
      document.getElementById('resultaat').innerHTML = Number(httpResponse).toFixed(1) + "<br>" + normalWeight;

    }
    if(httpResponse >= 25 && httpResponse <= 29.9 ){
      document.getElementById('resultaat').innerHTML = Number(httpResponse).toFixed(1) + "<br>" + overweight;
    }
    if(httpResponse >= 30 && httpResponse <= 39.9){
      document.getElementById('resultaat').innerHTML = Number(httpResponse).toFixed(1) + "<br>" + obese;
    }
    if(httpResponse >= 40){
      document.getElementById('resultaat').innerHTML = Number(httpResponse).toFixed(1) + "<br>" + morbidly;
    }

    }
  }
}
document.addEventListener()
switch (expression) {
  case green:

    break;
  default:

}
function background(color){
  document.body.style.backgroundColor = this.color;
}

berekenen.addEventListener('click', function(){
  ajax();
})
