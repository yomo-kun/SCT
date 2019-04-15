let firstname = document.getElementById("voorname");
let lastname = document.getElementById("achtername");
let tussenvoegsel = document.getElementById("tussenvoegsel");
let age = document.getElementById("oud");
let email = document.getElementById("email");
let submitButton = document.getElementById("submit");
let resetButton = document.getElementById("reset");
let responseHere = document.getElementById("response");

submitButton.addEventListener('click', ajax);
resetButton.addEventListener('click', reset);

function reset(){
  firstname.value = "";
  tussenvoegsel.value = "";
  lastname.value = "";
  age.value = "";
  email.value = "";
  responseHere.innerHTML = " ";
}

function ajax(){
  let xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function(){

    if(this.readyState == 4 && this.status == 200){
        console.log(this.responseText);
      responseHere.innerHTML = this.responseText;
    }
  };
  let httpString = "form_1.php?firstname=" + firstname.value + "&tussenvoegsel=" + tussenvoegsel.value + "&lastname=" + lastname.value + "&age=" + age.value + "&email=" + email.value;

  console.log(httpString);

  xmlhttp.open("GET", httpString, true)
  xmlhttp.send();
}
