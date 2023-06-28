<?php


header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Request-Headers: X-PINGOTHER, Content-Type");
header("Access-Control-Request-Method: POST");

require_once __DIR__ . '/../../vendor/phpmailer/src/Exception.php';
require_once __DIR__ . '/../../vendor/phpmailer/src/PHPMailer.php';
require_once __DIR__ . '/../../vendor/phpmailer/src/SMTP.php';


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


$upload_dir = $_SERVER['DOCUMENT_ROOT'] . "/jobs/uploads/lp/";
if(isset($_FILES['resume'])){
    //echo "here";
    //print_r($_FILES['resume']);
    
    if($_FILES['resume']['name']){
        $errors= array();
        $file_name = $_FILES['resume']['name'];
        $file_size = $_FILES['resume']['size'];
        $file_tmp = $_FILES['resume']['tmp_name'];
        $file_type = $_FILES['resume']['type'];
        
        $temp_file_ext = explode('.',$_FILES['resume']['name']);
        $file_ext=strtolower(end($temp_file_ext));

        $expensions= array("pdf","doc","docx","jpg","jpeg","png");

        if(in_array($file_ext,$expensions)=== false){
            $errors[]="extension not allowed, please choose a DOC, PDF, JPEG or PNG file.";
        }

        if($file_size > 2097152) {
            $errors[]='File size must be excately 2 MB';
        }

        if(empty($errors)==true) {
    //        echo ' - is_dir - '.is_dir($upload_dir);
    //        echo ' - is_writable - '.is_writable($upload_dir);
            if (is_dir($upload_dir) && is_writable($upload_dir)) {
                move_uploaded_file($file_tmp,$upload_dir.$file_name); //The folder where you would like your file to be saved
    //            echo " - Success move - ";
            }

        }else{
            print_r($errors);
        }
    }
}





if(isset($from_email)){
    if(!isset($message)){$message='';}
    if(!isset($from_title)){$from_title='Arthur Lawrence';}
    if(!isset($subject)){$subject='Arthur Lawrence';}


    $mail = new PHPMailer();
//$mail->isSMTP();
//   $mail->Host = 'smtp.office365.com';
//  $mail->SMTPAuth = true;
//  $mail->SMTPSecure = "tls";
//  $mail->Port = 587;

//  $mail->Username = 'noreply@xperti.io'; // YOUR smtp email
//  $mail->Password = 'nOrp-4321!!'; // YOUR smtp password
//$mail->Mailer   = "smtp";
// $mail->setFrom('noreply@xperti.io', 'Xperti.io');
//   $mail->addAddress('careers@xperti.io', 'Xperti.io');

// Edited Settings
    $mail->isSMTP();
//$mail->Host = 'smtp.gmail.com';
    //$mail->Host = 'smtp.office365.com';
    //$mail->SMTPAuth = true;
    //$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    //$mail->Port = 587;
    //$mail->SMTPDebug = SMTP::DEBUG_CLIENT;

    //$mail->Username = 'jportal@arthurlawrence.net';
	//$mail->Password = '_L3g3nd@ry-78563##$^%@!-D3lt@-';
    
$mail->Host = 'localhost';
$mail->SMTPAuth = false;
$mail->SMTPAutoTLS = false; 
$mail->Port = 25; 

// Sender and recipient settings
    $mail->setFrom('jportal@arthurlawrence.net', 'ArthurLawrence');
    //$mail->addAddress('careers@xperti.io', 'Xperti.io');
    $mail->addAddress($from_email, $from_title);
    $mail->addAddress('akhan_24@hotmail.com', 'Arthur Lawrence');
    $mail->addReplyTo('jportal@arthurlawrence.net', 'ArthurLawrence'); // to set the reply to
    $mail->addCC('kazim.khwaja@arthurlawrence.net'); // Add cc Kazim address to request of him

    $mail->Subject = $subject;
    $mail->WordWrap   = 80;
    $mail->MsgHTML($message);

    //var_dump($_FILES);
    //   if(isset($thanyou_redirect)) {
    if (is_array($_FILES)) {
//            $mail->AddAttachment($_FILES['attachmentFile']['tmp_name'], $_FILES['attachmentFile']['name']);
        $mail->addAttachment($upload_dir.$file_name);
//        echo " - attachment added - ";
    }
    //   }

    $mail->IsHTML(true);

//    var_dump($_FILES);
//    echo '<br>';
//    echo 'file: '.$upload_dir.$file_name;


    if(!$mail->Send()) {
        $output = json_encode([ 'status' => 0, 'message' => $mail->ErrorInfo, 'data' => '' ]);
        echo $output;
        exit;
    } else {
        if(isset($thanyou_redirect)){
            $output = json_encode([ 'status' => 1, 'message' => "Email Sent Successfully", 'data' => '' ]);
            echo $output;
        }
    }
}


