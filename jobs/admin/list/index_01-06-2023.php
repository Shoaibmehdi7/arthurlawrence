<?php // include '../../includes/checklogin.php' ?>
<?php
$title = "All Jobs Page";
require '../../connection.php';
include '../../includes/expiry_check.php'; 

 //Check Connection
 if ($conn->connect_error){
     die("Connection Failed: " . $conn->connect_error);
 }


 
$curentURL = $_SERVER['REQUEST_URI'];
$curentURL = explode("?",$curentURL);
$curentURL = $curentURL[0];


if(isset($_GET['del'])){
    $del = $_GET['del'];
    // $deletequery = "DELETE FROM `new_user` WHERE job_code=$del";
     $deletequery= "UPDATE new_user SET deleted='1' WHERE job_code = '".$del."'";
    $query = mysqli_query($conn,$deletequery);
}

 // Read all row from database table
 $limit = 20;
 if(isset($_GET['page'])){
    $page = $_GET['page'];
 }else{
    $page = 1;
 }

$offset = ($page - 1) * $limit;

$qs = "";
$orderBy = " ORDER BY active DESC, ending_date DESC";
$sql = "SELECT * FROM new_user WHERE deleted='0'" .$orderBy;
$limitQuery = " LIMIT {$offset}, {$limit}";

$activeURL = '?status=active';
$inactiveURL = '?status=inactive';
if(isset($_GET['status'])){
    if($_GET['status'] == 'active'){
        $activeURL = '';
        $qs="status=active";
        $sql = "SELECT * FROM new_user WHERE deleted='0' AND active='1'" .$orderBy;
    }
    if($_GET['status'] == 'inactive'){
        $inactiveURL = '';
        $qs="status=inactive";
        $sql = "SELECT * FROM new_user WHERE deleted='0' AND active='0'" .$orderBy;
    }
}

//"SELECT COUNT(*) AS total FROM new_user WHERE deleted='0' AND active='1'";
//"SELECT COUNT(*) AS total FROM new_user WHERE deleted='0' AND active='0'";

//  $sql = "SELECT * FROM new_user WHERE deleted='0' AND active='1' ORDER BY id DESC LIMIT {$offset}, {$limit}";

$result = $conn->query($sql . $limitQuery);
$resultPaged = $conn->query($sql);


 if (!$result) {
     die("Invalid query: " . $conn->error);
 }
?>


<?php include '../../includes/header.php' ?>


    <!-- Navbar -- Start -->
    <?php include '../../includes/navigation.php'; ?>
    <!-- Navbar -- End -->
    <!-- Page Content -- Start -->

    <!-- <style>
        .listing-table table tr th:nth-last-child(3), .listing-table table tr td:nth-last-child(3) { display: none; }
    </style> -->


    <style>
        /*ul.pagination { display: flex; justify-content: center; align-items: center; }*/
        /*ul.pagination li { margin: 0 3px;background-color: #2c2c2c;  border-radius: 3px;  }*/
        /*ul.pagination li a { display: block; font-size: 12px; color: white; transition: 0.3s; display: block; padding: 0 12px;}*/
        /*ul.pagination li.active, ul.pagination li:hover { background-color: #e8170b; }*/
    </style>


    <section class="padding-y-50-lg pt-150">
        <div class="container-fluid">
            <div class="flex flex-2 left stretch gap-20">
                <!--<a href="../dashboard/" target="_blank" style="padding:0 10px;">Home</a>-->
                <a href="../list/" target="_blank" style="padding:0 10px;">All Jobs</a>
                <a href="../new/" target="_blank" style="padding:0 10px;">Add Job</a>
                <a href="../?logout=1" style="padding:0 10px;">Logout</a>
            </div>
            <div class="flex flex-2 left stretch gap-20 search-section" style="justify-content: flex-end;">
                    <form action="results.php" method="GET">
                        <input type="text" name="search" class="w-100" value="<?php if(isset($_GET['search'])){echo $_GET['search'];} ?>" placeholder="Search Your Job" style=" border: 1px solid #ccc; padding: 13px; border-radius: 5px; margin-right: 10px;">
                        <input type="submit" value="Search" class="button secondary big applyPopupForm text-center">
                    </form>
            </div>
        </div>
        <div class="container-fluid">
            <div class="flex align-vert center gap-15">
                <h2>Jobs</h2>
            </div>



            <?php 
            $totalactive = "SELECT COUNT(*) AS total FROM new_user WHERE deleted='0' AND active='1'";
            $resultCount = $conn->query($totalactive);
            $activeCount =  $resultCount->fetch_assoc();
            
            $totalinactive = "SELECT COUNT(*) AS total FROM new_user WHERE deleted='0' AND active='0'";
            $resultCountInact = $conn->query($totalinactive);
            $inactiveCount =  $resultCountInact->fetch_assoc();
            ?>


<div class="filter-btn-dv">
    <a href="<?php echo $curentURL.$activeURL; ?>" class="button <?php if(isset($_GET['status'])){if($_GET['status'] == 'active'){echo "secondary";}else{echo "primary";}}else{echo "primary";} ?>
    ">Active (<?php echo $activeCount['total']; ?>)</a>
    <a href="<?php echo $curentURL.$inactiveURL; ?>" class="button <?php if(isset($_GET['status'])){if($_GET['status'] == 'inactive'){echo "secondary";}else{echo "primary";}}else{echo "primary";} ?>">In-Active (<?php echo $inactiveCount['total']; ?>)</a>
</div>


            <div class="listing-table">

            <?php 
            /*
                 <p>total active jobs found. <?php 
                    $totalactive = "SELECT COUNT(*) AS total FROM new_user WHERE deleted='0' AND active='1'";
                    $resultCount = $conn->query($totalactive);
                    $data =  $resultCount->fetch_assoc();
                    echo $data['total'];
                    ?></p>


                     <p>total In-Active jobs found. <?php 
                    $totalinactive = "SELECT COUNT(*) AS total FROM new_user WHERE deleted='0' AND active='0'";
                    $resultCountInact = $conn->query($totalinactive);
                    $datafound =  $resultCountInact->fetch_assoc();
                    echo $datafound['total'];
                    ?> </p>
            <?php */ ?>


                    <table>
                        <thead>
                            <tr>
                                <th style="width: 40px;">#</th>
                                <th>Title</th>
                                <th>Code</th>
                                <th style="width: 200px;">City / State</th>
                                <th style="width: 210px;">Type</th>
                                <th style="width: 150px;">Category</th>
                                <th style="width: 150px;">Pay Rate/Salary</th>
                                <th style="width: 150px;">Expiry</th>
                                <!-- <th>Job Post Date</th> -->
                                <!-- <th>Delete</th> -->
                                <th style="width: 50px;">View</th>
                                <th style="width: 50px;">Edit</th>
                                <th style="width: 90px;">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                                $count = 0;
                                // $active_job = '<div class=' .'custom-checkbox'. '><input type=' .'checkbox'. ' name=' .'active_job'. ' onclick='.'"return false;"'.' checked></div>';
                                // $in_active = '<div class=' .'custom-checkbox'. '><input type=' .'checkbox'. ' name=' .'active_job'. '  onclick='.'"return false;"'.'></div>';

                                $active_job = 'Active';
                                $in_active = 'In-Active';
                                
                                while ($row = $result->fetch_assoc())
                                    {
                                        $count++;
                                        if($row['deleted']!=1)
                                        {
                                ?>
                                    <tr>
                                        <td><?php echo $count + (($page - 1) * $limit); ?></td>
                                        <td><?php echo $row['title']; ?></td>
                                        <td><?php echo $row['job_code']; ?></td>
                                        <td>
                                            <?php //echo $row['city']; ?>
                                            <?php
                                                if($row['remote_job']!='Remote Jobs'){
                                                    echo $row['city'];
                                                }    
                                                else{
                                                    echo "Remote Job";
                                                }
                                            ?>  
                                            <?php
                                                if($row['remote_job']!='Remote Jobs'){
                                                    echo '/ '.$row['state'];
                                                }    
                                                else{
                                                    echo "/ Remote Job";
                                                }
                                            ?>
                                        </td>
                                        <td><?php echo $row['type']; ?></td>
                                        <td><?php echo $row['fk_category']; ?></td>
                                        <td><?php echo $row['pay']; ?></td>
                                        <td><?php echo date('F j, Y', strtotime($row['ending_date'])); ?></td>
                                        <!-- <td><?php echo $row['job_post_date']; ?></td> -->
                                        <!-- <td>
                                            <a href='#' data-id="<?php // echo $row['job_code']; ?>" class='delete'>
                                                Delete
                                            </a>
                                        </td> -->
                                        <td align='center' valign='middle'>
                                            <a href='../details/?job_code=<?php echo $row['job_code']; ?>' target='_blank'>
                                                View
                                            </a>
                                        </td>
                                        <td>
                                            <a href='../edit/?job_code=<?php echo $row['job_code']; ?>' target='_blank'>
                                                Edit
                                            </a>
                                        </td>
                                        <td>
                                            <div class="custom-checkbox compact">
                                                <input type="checkbox" class="active-switch" data-id="<?php echo $row['id']; ?>" <?php if($row['active']){echo 'checked';} ?>>
                                            </div>
                                        </td>
                                    </tr>
                                <?php
                                        }
                                    }
                                ?>

                                    
                        </tbody>
                    </table>

                                <?php

                                    //$sql1 = "SELECT * FROM new_user WHERE deleted='0'";
                                    //$result1 = mysqli_query($conn, $sql1) or die('Query Failed.');

                                    if(mysqli_num_rows($resultPaged) > 0){

                                        $total_records = mysqli_num_rows($resultPaged);
                                        $total_page = ceil($total_records / $limit);

                                        echo '<ul class="pagination">';
                                        for($i = 1; $i <= $total_page; $i++){
                                            if($i == $page)
                                            {
                                                $active = "active";
                                            }else{
                                                $active = "";
                                            }
                                            echo '<li class="'.$active.'"><a href="?page='.$i.'&'.$qs.'">'.$i.'</a></li>';
                                        }
                                        echo '</ul>';

                                    }
                                ?>
            </div>
        </div>
    </section>


    <!-- <td><a href='?id=$row[id]'>Delete</a></td>  -->
    

    <div class='overlay'></div>
    
    <div class='popupMian'>
        <h6>Are you sure?</h6>
        <div class='textArea'>
            <p>Are you sure you want to delete this job? You CAT NOT view this job in your list anymore if you delete.</p>
        </div>
        <ul class='buttons'>
            <li><a href='javascript:;' class='cancle'>Cancel</a> </li>
            <li><a href='javascript:;' class='delbtn'>Delete</a></li>
        </ul>
    </div>



<?php
    // $id = $_GET['id'];
    // $deletequery = "DELETE FROM `new_user` WHERE id=$id";
    // $query = mysqli_query($conn,$deletequery);  


  //  header('refresh:2; url=http://localhost/Lawrence/job_listings.php');

?>





    <script>
        $(document).ready(function(){
            // $('#myTable').DataTable();
            $(".blog-content a").matchHeight();

            $('body').on('click','table .delete',function(){
                var jobcode  = $(this).attr('data-id');
                $('.popupMian .delbtn').attr('href','?del='+jobcode);
                $('.popupMian, overlay').show();
            }).on('click','popupMian .cancle',function(){
                $('.popupMian, overlay').hide();
            });

            $('.active-switch').on('change',function(){
                //console.log($(this).is(':checked'));
                var id = $(this).attr('data-id'), active;
                if($(this).is(':checked')){
                    active = true;
                }else{
                    active = false;
                }

                $.ajax({
                    url: "<?php echo $dir; ?>includes/active_switch.php",
                    method: "POST",
                    data: { id:id, active:active },
                    success: function(result){
                        if(result ==  "active"){alert("Job Active");}
                        else if(result ==  "inactive"){alert("Job In-Active");}
                        else{alert("Some Issue Exists");}
                    }
                });
            });
        });
    </script>

<?php include '../../includes/footer.php' ?>