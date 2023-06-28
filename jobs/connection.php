<?php
    $servername = "localhost";
    //$username = "root";
    //$password = "123";
    //$dbname = "new_job_portal";

$username = "user_job_portal";
$password = "v?0Azlke&HgW";
// $dbname = "ourclien_job_portal";
$dbname = "new_job_portal";
    
    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    // Check connection
    if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
    }else{
//         echo "Success";
    }


    // Latest Jobs

   /* $sqlLatest = "SELECT job_listing.id, job_listing.title FROM job_listing ORDER BY id DESC LIMIT 6";

    $resultLatestJobs = mysqli_query($conn, $sqlLatest);
    $latestJobList = array();

    if (mysqli_num_rows($resultLatestJobs) > 0) {
        while($row = mysqli_fetch_assoc($resultLatestJobs)) {
            array_push($latestJobList, $row);
        }
    } else {
        $latestJobList = [];
    }*/
?>