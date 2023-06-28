<?php

//var_dump($_POST);

if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['submit']))
{
/*    echo '<pre>';
    var_dump($_POST);
    echo '</pre>';
    echo '<pre>';
    echo implode (",", $_POST['authorization']);
    echo '</pre>';

    exit;*/

    $arr = array($_POST['authorization']);

    require '../../connection.php';
   

   // $conn= mysqli_connect('localhost', 'root', '123', 'new_job_portal') or die('connection Failed:' .mysqli_connect_error());
if(
    isset($_POST['title']) &&
    isset($_POST['job_code']) &&
    isset($_POST['description']) &&
    isset($_POST['country']) &&
    isset($_POST['otherlocation']) &&
    isset($_POST['city']) &&
    isset($_POST['state']) &&
    isset($_POST['remote_job']) &&
    isset($_POST['skills']) &&
    isset($_POST['duration']) &&
    isset($_POST['type']) &&
    isset($_POST['fk_category']) &&
    isset($_POST['pay']) &&
    isset($_POST['ending_date']) &&
    isset($arr) &&
    isset($_POST['job_post_date']) &&
    isset($_POST['travel_required']) &&
    isset($_POST['travel_required'])
)
{
  
     $title= $_POST['title'];
     $job_code= $_POST['job_code'];
     $description= $_POST['description'];
     $country= $_POST['country'];
     $otherlocation= $_POST['otherlocation'];
     $city= $_POST['city'];
     $state= $_POST['state'];
     $remote_job= $_POST['remote_job'];
    //  $skills= $_POST['skills'];
     $skills= implode (", ", $_POST['skills']);
     $duration= $_POST['duration'];
     $type= $_POST['type'];
     $fk_category= $_POST['fk_category'];
     $pay= $_POST['pay'];
     $ending_date= date('Y-m-d', strtotime($_POST['ending_date']));
     $authorization= implode (",", $arr);
    $job_post_date= date('Y-m-d', strtotime($_POST['job_post_date']));
    $travel_required= $_POST['travel_required'];
    $description= str_replace("'", "\'", $description);

    if(isset($_POST['active'])){
        $active = "1";
    }else{
        $active = "0";
    }

    // echo $ending_date."<br> just cheking";
    // echo $job_post_date;
    // die();


    

    
     $sql= "INSERT INTO `new_user` (`title`, `job_code`, `description`, `country`, `otherlocation`, `city`, `state`, `remote_job`, `skills`, `duration`, `type`, `fk_category`, `pay`, `ending_date`, `authorization`, `job_post_date`, `travel_required`, `active`) VALUES ('$title', '$job_code', '$description', '$country', '$otherlocation',  '$city', '$state', '$remote_job', '$skills', '$duration', '$type', '$fk_category', '$pay', '$ending_date', '$authorization', '$job_post_date', '$travel_required', '$active')";

  

     $query = mysqli_query($conn,$sql);

     if($query){
       //echo 'Entry Successfull';
       //  $newURL = './?success=1';
         $newURL = '../list/';
         header('Location: '.$newURL);
     }
     else{
        //echo 'Error Occurred';
         die(mysqli_error($conn));
     }

 


}


}

?>