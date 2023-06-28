<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Request-Headers: X-PINGOTHER, Content-Type");
header("Access-Control-Request-Method: POST");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once __DIR__ . '/PHPMailer/src/Exception.php';
require_once __DIR__ . '/PHPMailer/src/PHPMailer.php';
require_once __DIR__ . '/PHPMailer/src/SMTP.php';

// passing true in constructor enables exceptions in PHPMailer
$mail = new PHPMailer(true);

$jobTitle = $_POST['jobTitle'];
$fullName = $_POST['fullName'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$location = $_POST['location'];
$citizenship = $_POST['citizenship'];
$resume = $_POST['resume'];

try {
    // Server settings
    //$mail->SMTPDebug = SMTP::DEBUG_SERVER; // for detailed debug output
    $mail->isSMTP();
//    $mail->Host = 'smtp.gmail.com';
    $mail->Host = 'smtp.office365.com';
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

//    $mail->Username = 'arthurlawrance.al@gmail.com'; // YOUR gmail email
//    $mail->Password = 'hasan123@'; // YOUR gmail password
    $mail->Username = 'contact@xperti.io';
    $mail->Password = 'Arthurlawrence@654344!@!';

    // Sender and recipient settings
//    $mail->setFrom('arthurlawrance.al@gmail.com', 'Arthur Lawrance');
    $mail->setFrom('contact@xperti.io', 'Arthur Lawrance');
    $mail->addAddress('mujtabakamal1230@gmail.com', 'Arthur Lawrance');
//    $mail->addReplyTo('arthurlawrance.al@gmail.com', 'Sender Name'); // to set the reply to
    $mail->addReplyTo('contact@xperti.io', 'Arthur Lawrance');

    // Setting the email content
    $mail->IsHTML(true);
    $mail->Subject = "Job Application";

    $mail->Body = 'Job Title: <b>'.$jobTitle.'</b><br>Full Name: <b>'.$fullName.'</b><br>Phone No: <b>'.$phone.'</b><br>Location: <b>'.$location.'</b><br>Citizenship: <b>'.$citizenship.'</b><br>';
    $mail->AltBody = 'Plain text message body for non-HTML email client. Gmail SMTP email body.';
    $mail->AddAttachment = $resume;
    $mail->send();
//    echo "Email message sent."
    $response = [ 'status' => 1, 'message' => "Email Sent Successfully", 'data' => '' ];
     echo json_encode($response);
} catch (Exception $e) {
    echo "Error in sending email. Mailer Error: {$mail->ErrorInfo}";
}

?>
