<?php


if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['submit']))
{
    require '../../connection.php';
if(
    isset($_POST['title']) &&
    isset($_POST['fname']) &&
    isset($_POST['email']) &&
    isset($_POST['phone']) &&
    // isset($_POST['authorization']) &&
    // isset($_POST['taxterm']) &&
    isset($_POST['resume'])
)
{
     $title= $_POST['title'];
     $fname= $_POST['fname'];
     $email= $_POST['email'];
     $phone= $_POST['phone'];
    //  $authorization= $_POST['authorization'];
    //  $taxterm= $_POST['taxterm'];
     $resume= $_POST['resume'];
     
     
     
      if(isset($_POST['authorization'])) {
        $authorization= $_POST['authorization'];
    }else{
        $authorization = 'None';
    }

    if(isset($_POST['authorization'])) {
        $taxterm= $_POST['taxterm'];
    }else{
        $taxterm = 'None';
    }
     
     
    
    //  $sql= "INSERT INTO `apply_form` (`title`) VALUES ('$title')";
    $sql= "INSERT INTO `apply_form`(`title`, `fname`, `email`, `phone`, `authorization`, `taxterm`, `resume`) VALUES ('$title','$fname','$email','$phone','$authorization','$taxterm','$resume')";

     $query = mysqli_query($conn,$sql);

     if($query){
    //    echo 'Entry Successfull';
        // $newURL = './?success=1';
        //  $newURL = '../list/';
         $newURL = 'https://www.arthurlawrence.net/jobs/thank-you.php';
         header('Location: '.$newURL);
     }
     else{
        // echo 'Error Occurred';
         die(mysqli_error($conn));
     }

 


}


}

?>