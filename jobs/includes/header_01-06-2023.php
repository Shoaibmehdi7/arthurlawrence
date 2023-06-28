<!DOCTYPE html>
<html lang="en">
<?php
$whitelist = array(
    '127.0.0.1',
    '::1'
);

if(!in_array($_SERVER['REMOTE_ADDR'], $whitelist)){
    $dir = 'https://'.$_SERVER['SERVER_NAME'].'/jobs/';
} else {
    $folder = $_SERVER['REQUEST_URI'];
    $folder = substr($folder, 0, strpos($folder, '/', 1));
    $dir = 'http://'.$_SERVER['SERVER_NAME'].':'.$_SERVER['SERVER_PORT'].$folder.'/jobs';
    $dir = '/jobs';
}
?>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title; ?> | Arthur Lawrence</title>
    <meta name="description" content="<?php echo $desc; ?>">
    <link rel="shortcut icon" type="image/x-icon" href="<?php echo $dir; ?>/favicon.ico">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
    <link rel="stylesheet" href="<?php echo $dir; ?>/assets/css/reset.css">
    <link rel="stylesheet" href="<?php echo $dir; ?>/assets/css/owl/owl.carousel.min.css">
    <link rel="stylesheet" href="<?php echo $dir; ?>/assets/css/owl/owl.theme.default.min.css">
    <link rel="stylesheet" href="<?php echo $dir; ?>/assets/css/animate.min.css" />
    <link rel="stylesheet" href="<?php echo $dir; ?>/assets/css/all.min.css" />
    <link rel="stylesheet" href="/jobs/assets/css/custom.css">
    <link rel="stylesheet" href="<?php echo $dir; ?>/assets/css/progress.css">
    
     <link rel="stylesheet" href="<?php echo $dir; ?>/assets/css/intlTelInput.min.css">
    
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
    
    <link rel="stylesheet" href="<?php echo $dir; ?>/assets/css/richtext.min.css"> 

<style>
.iti--allow-dropdown.iti--show-flags { width: 100%; }
.contact-us .contact-form .form-field input#country { padding-left: 60px; }
.iti__country-list { max-width: 400px; }
</style>


    <script src="<?php echo $dir; ?>/assets/js/jquery-3.6.0.min.js"></script>
</head>

<body>