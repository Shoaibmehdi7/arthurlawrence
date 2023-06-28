<?php

if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['submit']))
{
/*    echo '<pre>';
    var_dump($_POST);
    echo '</pre>';
    echo '<pre>';
    echo implode (",", $_POST['authorization']);
    echo '</pre>';

    exit;*/

    require '../../connection.php';

   //$conn= mysqli_connect('localhost', 'root', '123', 'new_job_portal') or die('connection Failed:' .mysqli_connect_error());
if(isset($_POST['title']) && isset($_POST['job_code']) && isset($_POST['description']) && isset($_POST['requirements']) && isset($_POST['contact_info']) && isset($_POST['location']) && isset($_POST['skills']) && isset($_POST['duration']) && isset($_POST['contact']) && isset($_POST['type']) && isset($_POST['fk_category']) && isset($_POST['pay']) && isset($_POST['tax_term']) && isset($_POST['ending_date']))
{
     $title= $_POST['title'];
     $job_code= $_POST['job_code'];
     $description= $_POST['description'];
     $requirements= $_POST['requirements'];
     $contact_info= $_POST['contact_info'];
     $location= $_POST['location'];
     $skills= $_POST['skills'];
     $duration= $_POST['duration'];
     $contact= $_POST['contact'];
     $type= $_POST['type'];
     $fk_category= $_POST['fk_category'];
     $pay= $_POST['pay'];
     $tax_term= $_POST['tax_term'];
     $ending_date= date('Y-m-d', strtotime($_POST['ending_date']));
     $authorization= implode (",", $_POST['authorization']);




     $sql= "INSERT INTO `users` (`title`, `job_code`, `description`, `requirements`, `contact_info`, `location`, `skills`, `duration`, `contact`, `type`, `fk_category`, `pay`, `tax_term`, `ending_date`, `authorization`) VALUES ('$title', '$job_code', '$description', '$requirements', '$contact_info', '$location', '$skills', '$duration', '$contact', '$type', '$fk_category', '$pay', '$tax_term', '$ending_date', '$authorization')";
     $query = mysqli_query($conn,$sql);

     if($query){
//        echo 'Entry Successfull';
         $newURL = './?success=1';
         header('Location: '.$newURL);
     }
     else{
        //echo 'Error Occurred';
         die(mysqli_error($conn));
     }

 


}


}

?>