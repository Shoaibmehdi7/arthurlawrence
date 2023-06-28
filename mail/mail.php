<?php

$recepient = "awaispatel360@gmail.com";
$sitename = "Arthurlawrence";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$message = "Name: $name \nPhone: $phone \nText: $text";

$pagetitle = "New application from the \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");