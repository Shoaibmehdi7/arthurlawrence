<?php




//$mail = new PHPMailer(true);

if($_POST){
    
    
    
    $title = $_POST['title'];
    $person_name = $_POST['fname'];
    $person_email = $_POST['email'];
	$person_phone = $_POST['phone'];
    $jobseeker = "Apply Job";
    $taxterm = $_POST['taxterm'];
    $authorization = $_POST['authorization'];
	
    $output = '';

    $subject = 'Arthur Lawrence: Postion hourly rate estimator:'. $jobseeker .'';


    $message = '
	<html>
	<head>
	<title>Postion hourly rate estimator. From Page '. $jobseeker .'</title>
	</head>
	<body>
	<p></p>
	<table>

	<tr>
	<th style="color:black; padding-bottom:10px; font-size:18px;">Employee Name</th>
	</tr>

	<tr>
	<th style="color:grey; padding-bottom:10px; font-size:14px;"><strong>Ans: '. $person_name .'</strong></th>
	</tr>

	<tr>
	<th style="color:black; padding-bottom:10px; font-size:18px;">Employee Email</th>
	</tr>

	<tr>
	<th style="color:grey; padding-bottom:10px; font-size:14px;"><strong>Ans: '. $person_email .'</strong></th>
	</tr>

	<tr>
	<th style="color:black; padding-bottom:10px; font-size:18px;">Employee Phone</th>
	</tr>
	
	<tr>
	<th style="color:grey; padding-bottom:10px; font-size:14px;"><strong>Ans: '. $person_phone .'</strong></th>
	</tr>

	<tr>
	<th style="color:black; padding-bottom:10px; font-size:18px;">Job Title</th>
	</tr>

	<tr>
	<th style="color:grey; padding-bottom:10px; font-size:14px;"><strong>Ans: '. $title .'</strong></th>
	</tr>

	<tr>
	<th style="color:black; padding-bottom:10px; font-size:18px;">Authorization</th>
	</tr>

	<tr>
	<th style="color:grey; padding-bottom:10px; font-size:14px;"><strong>Ans: '. $authorization .'</strong></th>
	</tr>

	<tr>
	<th style="color:black; padding-bottom:10px; font-size:18px;">Tax Term</th>
	</tr>

	<tr>
	<th style="color:grey; padding-bottom:10px; font-size:14px;"><strong>Ans: '. $taxterm .'</strong></th>
	</tr>
	
	</table>
	</body>
	</html>
	';



$from_email = 'resume@arthurlawrence.net';
// $from_email = 'ghufrandeveloper82@gmail.com';
$from_title = 'ArthurLawrence';
$subject = 'Arthur Lawrence : Postion hourly rate estimators:'. $jobseeker .'';
include 'mail-setting.php';



    




}




?>