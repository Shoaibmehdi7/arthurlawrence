<?php
require '../connection.php';
if(isset($_POST["active"])){

    $today = date("Y-m-d");
    $monthDate = strtotime($today) + (30*60*60*24);
    $ending_date= date('Y-m-d', $monthDate);
    if($_POST["active"] == "true"){
        $sql= "UPDATE new_user SET active='1', ending_date='".$ending_date."' WHERE id='".$_POST["id"]."'";
        $msg = "active";
    }else{
        $sql= "UPDATE new_user SET active='0' WHERE id='".$_POST["id"]."'";
        $msg = "inactive";
    }
    $query = mysqli_query($conn,$sql);
    if($query){echo $msg;}else{echo "Some issue exists";}
}
//var_dump($_POST);