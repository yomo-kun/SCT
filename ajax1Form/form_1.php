<?php

$firstname = $_GET['firstname'];
$lastname = $_GET['lastname'];
$tussenvoegsel = $_GET['tussenvoegsel'];
$age = $_GET['age'];
$email = $_GET['email'];
echo "<h3>Response</h3>";
echo "your information:";
echo "<li>Your name: <strong>" . $firstname . " " . $tussenvoegsel . " " . $lastname . "</strong></li>";
echo "<li>You are <strong>" . $age . " </strong>years old</li>";
echo "<li>And we can contact u on the following email adress <strong> " . $email . "</strong></li>";
?>
