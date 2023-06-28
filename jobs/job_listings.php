<?php
 $servername = "localhost";
 $username = "root";
 $password = "";
 $database = "lawrence_new_jobs";

 // Create Connection
 $connection = new mysqli($servername,$username,$password,$database);

 //Check Connection
 if ($connection->connect_error){
     die("Connection Failed: " . $connection->connect_error);
 }

 // Read all row from database table
 $sql = "SELECT * FROM users";
 $result = $connection->query($sql);

 if (!$result) {
     die("Invalid query: " . $connection->error);
 }



 $id = $_GET['id'];
    $deletequery = "DELETE FROM `users` WHERE id=$id";
    $query = mysqli_query($connection,$deletequery);


 
?>


<?php include 'includes/header.php' ?>


    <!-- Navbar -- Start -->
    <?php include 'includes/navigation.php'; ?>
    <!-- Navbar -- End -->
    <!-- Page Content -- Start -->





    <section class="padding-y-50-lg pt-150">
        <div class="container align-hor center">
            <div class="col-12 flex align-vert center middle gap-15">
                <h2>Jobs</h2>
            </div>
            <div class="col-12 flex align-vert center middle gap-15 listing-table">
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Job Title</th>
                                <th>Job Code</th>
                                <th>Description</th>
                                <th>Job Requirements</th>
                                <th>Contact Information</th>
                                <th>Location</th>
                                <th>Skills</th>
                                <th>Duration</th>
                                <th>Contact</th>
                                <th>Job Type</th>
                                <th>Job Category</th>
                                <th>Pay Rate/Salary</th>
                                <th>Tax Term</th>
                                <th>Ending Date</th>
                                <th>Work Authorization</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                                while ($row = $result->fetch_assoc())
                                    {
                                    echo  "<tr>
                                                <td>" . $row['id'] ."</td>
                                                <td>" . $row['title'] ."</td>
                                                <td>" . $row['job_code'] ."</td>
                                                <td>" . $row['description'] ."</td>
                                                <td>" . $row['requirements'] ."</td>
                                                <td>" . $row['contact_info'] ."</td>
                                                <td>" . $row['location'] ."</td>
                                                <td>" . $row['skills'] ."</td>
                                                <td>" . $row['duration'] ."</td>
                                                <td>" . $row['contact'] ."</td>
                                                <td>" . $row['type'] ."</td>
                                                <td>" . $row['fk_category'] ."</td>
                                                <td>" . $row['pay'] ."</td>
                                                <td>" . $row['tax_term'] ."</td>
                                                <td>" . $row['ending_date'] ."</td>
                                                <td>" . $row['authorization'] ."</td>
                                                <td><a href='?id=$row[id]'>Delete</a></td>
                                            </tr>";
                                    }
                                ?>
                        </tbody>
                    </table>
            </div>
        </div>
    </section>


<?php
    // $id = $_GET['id'];
    // $deletequery = "DELETE FROM `users` WHERE id=$id";
    // $query = mysqli_query($connection,$deletequery);


  //  header('refresh:2; url=http://localhost/Lawrence/job_listings.php');

?>





    <script>
        $(document).ready(function(){
            // $('#myTable').DataTable();
            $(".blog-content a").matchHeight();
        });
    </script>

<?php include 'includes/footer.php' ?>