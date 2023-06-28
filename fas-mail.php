<?php

$headers  = 'MIME-Version: 1.0' . "\r\n";
$from = 'noreply@arthurlawrence.net';
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
 
// Create email headers
$headers .= 'From: '.$from."\r\n".
    'Reply-To: '.$from."\r\n" .
    'X-Mailer: PHP/' . phpversion();
$recepient = "marketing@arthurlawrence.net";
$sitename = "Arthurlawrence";

$name = trim($_POST["full_name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$message = "Name: $name \nPhone: $phone \nEmail: $email";

$pagetitle = "New FAS Form Submitted \"$sitename\"";
mail($recepient, $pagetitle, $message, $headers);