<?php


  $weight = $_GET["weightElm"];
  $length = $_GET["lengthElm"];
  BMIcalc($weight, $length);

  function BMIcalc($weight, $length){
      $bmi = $weight / (($length / 100) * ($length / 100));
    echo $bmi;
    return;
  }

?>
