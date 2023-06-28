<?php

if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['submit']))
{

    require '../../connection.php';

if(isset($_POST['title']) &&
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
isset($_POST['ending_date']))
{
    $id = $_POST['id'];
     $title= $_POST['title'];
     $job_code= $_POST['job_code'];
     $description= $_POST['description'];
     $country= $_POST['country'];
     $otherlocation= $_POST['otherlocation'];
     $city= $_POST['city'];
     $state= $_POST['state'];
     $remote_job= $_POST['remote_job'];
     $skills= implode (", " , $_POST['skills']);
     $duration= $_POST['duration'];
     $type= $_POST['type'];
     //  $fk_category= $_POST['fk_category'];
    $fk_category= implode (", " , $_POST['fk_category']);
     $pay= $_POST['pay'];
     $ending_date= date('Y-m-d', strtotime($_POST['ending_date']));
     $authorization= implode (",", $_POST['authorization']);
     $travel_required= $_POST['travel_required'];
     $description= str_replace("'", "\'", $description);


     $sql= "UPDATE new_user SET title='".$title."', job_code='".$job_code."', description='".$description."', country='".$country."', otherlocation='".$otherlocation."', city='".$city."', state='".$state."', remote_job='".$remote_job."', skills='".$skills."', duration='".$duration."', type='".$type."', fk_category='".$fk_category."', pay='".$pay."', ending_date='".$ending_date."', authorization='".$authorization."', travel_required='".$travel_required."' WHERE id = '".$id."'";
     $query = mysqli_query($conn,$sql);

     if($query){
         $newURL = '../list/?success=1';
         header('Location: '.$newURL);
     }
     else{
         die(mysqli_error($conn));
     }

 


}


}

?>