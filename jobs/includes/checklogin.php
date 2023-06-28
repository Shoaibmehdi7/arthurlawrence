<?php
if(!isset($_COOKIE['login'])) {
    $folder = $_SERVER['REQUEST_URI'];
    $folder = substr($folder, 0, strpos($folder, '/', 1));
    $newURL = 'http://'.$_SERVER['SERVER_NAME'].':'.$_SERVER['SERVER_PORT'].$folder.'/al-portal-new/admin/';
    $newURL = 'https://'.$_SERVER['SERVER_NAME'].'/al-portal-new/admin/';
    header('Location: '.$newURL);
}
if(isset($_GET['logout'])){
    setcookie("login", "", time() - 3600, "/");
    header('Location: ../');
}