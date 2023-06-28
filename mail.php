<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
$errLevel = error_reporting(E_ALL ^ E_NOTICE);  // suppress NOTICEs

require_once 'vendor/autoload.php';
// Create the Transport
$transport = (new Swift_SmtpTransport('localhost',25,'false'))
  ->setUsername('mjhaemailkaro@gmail.com')
  ->setPassword("hasanabbas123");
;

 
// Create the Mailer using your created Transport
$mailer = new Swift_Mailer($transport);
 
// Create a message
$body = 'Hello, <p>Email sent through <span style="color:red;">Swift Mailer</span>.</p>';
 
$message = (new Swift_Message('Email Through Swift Mailer'))
  ->setFrom(['mjhaemailkaro@gmail.com' => 'hasan test mail'])
  ->setTo(['hasanbbs0@gmail.com'])
  //->setCc(['RECEPIENT_2_EMAIL_ADDRESS'])
  //->setBcc(['RECEPIENT_3_EMAIL_ADDRESS'])
  ->setBody($body)
  ->setContentType('text/html')
;
 
// Send the message
$mailer->send($message);
error_reporting($errLevel);