<?php
$expQuery = "SELECT * FROM new_user WHERE deleted='0' AND active='1'";
$exp_query_run = mysqli_query($conn, $expQuery);

if(mysqli_num_rows($exp_query_run) > 0)
{
    while ($row = $exp_query_run->fetch_assoc())
    {
        //var_dump($row);
        //$checkDates = DATE($row["ending_date"]) < DATE(NOW());
        $checkDate=(time()-(60*60*24)) > strtotime($row["ending_date"]);
        $id = $row["id"];
        
        //echo "<p>".$checkDate."</p>";
        if($checkDate){$sql= "UPDATE new_user SET active='0' WHERE id='".$id."'";}
        
        // $query = mysqli_query($conn,$sql);
        // if($query){}else{echo "Some issue exists";}
    }
}
?>