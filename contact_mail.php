<?php     

$to_email = 'marketing@arthurlawrence.net';
$formValue = $_POST['formValue'];
echo $formValue;
if($formValue == 1 ){
    $subject= 'New user has subscribed to Arthur Lawrence';
    $message = 'User email : '.$_POST["userName"].'' ;
}
if($formValue == 2){
    $subject= 'Arthur Lawrence Contact Form Submitted';
     $message = 'User email : '.$_POST["fullName"].' Email : '.$_POST["email"].' organization : '.$_POST['organization'].' phone : '.$_POST['phone'].' Your Message : '.$_POST['yourMessage'].'' ;
     
}

$headers = 'From: noreply@arthurlawrence.net';
mail($to_email,$subject,$message,$headers);
?>