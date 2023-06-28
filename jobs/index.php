<?php
$title = "Arthur Lawrence Job Portal: Find the Perfect Job Arrangement";
$desc = "Looking for the perfect job? Look no further than Arthur Lawrence's job portal! Our platform connects job seekers with top employers in every industry. Apply Now!";
include 'includes/header.php' ?>
<?php
require 'connection.php';



 // Read all row from database table
 $limit = 20;
 if(isset($_GET['page'])){
    $page = $_GET['page'];
 }else{
    $page = 1;
 }

$offset = ($page - 1) * $limit;


$orderBy = " ORDER BY ending_date DESC";
$sql = "SELECT * FROM new_user WHERE deleted='0' AND active='1'" .$orderBy;
$limitQuery = " LIMIT {$offset}, {$limit}";


$result = $conn->query($sql . $limitQuery);
$resultPaged = $conn->query($sql);



 $search_title = $_GET['search_title'];
 $search_location = $_GET['search_location'];
 if(isset($_GET['search_title']) && isset($_GET['search_location'])){
    if(isset($_GET['remote'])){
        //$sql = "SELECT * FROM new_user WHERE deleted='0' AND active='1' AND remote_job='Remote Jobs' ORDER BY id DESC LIMIT {$offset}, {$limit}";
        $search_query = "SELECT * FROM new_user WHERE CONCAT(title,job_code) LIKE '%$search_title%' AND CONCAT(city,state) LIKE '%$search_location%' AND remote_job='Remote Jobs' AND deleted='0' AND active='1'";
    }else{
        $search_query = "SELECT * FROM new_user WHERE CONCAT(title,job_code) LIKE '%$search_title%' AND CONCAT(city,state) LIKE '%$search_location%' AND  deleted='0' AND active='1'";
    }
    $query_run = mysqli_query($conn, $search_query);
 }else{
    $query_run = $result;
 }


?>

<style>
    .job-list.listing-table { margin: 0; }
    .banner-bg { background: url(assets/images/banner.png) center top no-repeat; background-size: cover; min-height: 500px; display: flex; justify-content: center; align-items: center; margin-top: 90px; }
    .banner-bg a, .banner-bg i, .banner-bg h2, .banner-bg label, .banner-bg .breadcrumb a.active { color: white; }
    .banner-bg h2 span.bold { color: #eb3228; }
    .job-search-filter .job-search .icon-input:first-child { border-right: 1px solid #ccc; }
</style>
    <!-- Navbar -- Start -->
    <?php include 'includes/navigation.php'; ?>
    <!-- Navbar -- End -->
    <!-- Page Content -- Start -->


    <section class="listing-page-header padding-y-50-lg banner-bg">
        <div class="container align-hor edge center">
            <div class="col-12 flex align-vert left middle gap-5">
                <div class="breadcrumb">
                    <a href="https://arthurlawrence.net">Home</a>
                    <span><i class="fa fa-chevron-right"></i></span>
                    <a class="active">Job Portal</a>
                </div>
                <h2>Arthur Lawrence <span class="bold">Job Portal</span></h2>
            </div>
            <!-- <form class="flex align-vert middle gap-15 job-search-filter" action="<?php // echo $_SERVER['PHP_SELF']; ?>" method="post"> -->
            <form class="flex align-vert middle gap-15 job-search-filter" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="GET">
                <div class="flex align-hor edge middle gap-10 job-search">
                    <div class="icon-input">
                        <img src="<?php echo $dir; ?>/assets/images/loupe.png" class="inp-icon" alt="">
                        <input type="text" name="search_title" value="<?php if(isset($_GET['search_title'])){echo $_GET['search_title'];} ?>" placeholder="Job title or keyword">
                    </div>
                    <div class="icon-input">
                        <img src="<?php echo $dir; ?>/assets/images/loupe.png" class="inp-icon" alt="">
                        <input type="text" name="search_location" value="<?php if(isset($_GET['search_location'])){echo $_GET['search_location'];} ?>" placeholder="Enter location">
                    </div>
                    <div class="flex align-hor right middle gap-10">
                        <button class="button secondary big" type="submit" name="submit">Search</button>
                        <!--<a href="admin/list/" class="button secondary big" style=" line-height: 45px; padding-top: 0; padding-bottom: 0;">View all jobs</a>-->
                        <a href="#alljobs" class="button secondary big smoothClick" style=" line-height: 45px; padding-top: 0; padding-bottom: 0;">View all jobs</a>
                    </div>
                </div>
                <div class="flex align-hor middle gap-15">
                    <!-- <div class="checkbox flex align-hor middle gap-5">
                        <input type="checkbox" name="fullTime" value="Full Time"><label for="">Full Time</label>
                    </div>
                    <div class="checkbox flex align-hor middle gap-5">
                        <input type="checkbox" name="partTime" value="Part Time"><label for="">Part Time</label>
                    </div> -->
                    <div class="checkbox flex align-hor middle gap-5">
                        <input type="checkbox" name="remote" value="1" <?php if(isset($_GET['remote'])){ ?>checked<?php } ?>><label for="">Remote Job</label>
                    </div>
                </div>
            </form>
        </div>
    </section>

    <section id="alljobs" class="job-listing padding-y-50">
        <div class="container align-hor edge top gap-40 mob-table-scroll">
            <div class="flex flex-2 align-vert left stretch gap-15 show-mobile">
                <!-- <div class="total-jobs text-center">
                    <p>Total Active Jobs Found
                        <strong>
                            <?php 
                                // $totalactive = "SELECT COUNT(*) AS total FROM new_user WHERE deleted='0'";
                                // $resultCount = $conn->query($totalactive);
                                // $data =  $resultCount->fetch_assoc();
                                // echo $data['total'];
                            ?>
                        </strong>
                    </p>
                </div> -->
                <div class="job-list listing-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Job Title</th>
                                <th>Duration</th>
                                <th>Location</th>
                                <!-- <th>Category</th> -->
                            </tr>
                        </thead>

                        <tbody>
                            <?php
                                // while ($row = $result->fetch_assoc())
                                //     {
                                //         echo  
                                //             "<tr>
                                //                 <td>" . $row['title'] ."</td>
                                //                 <td>" . $row['location'] ."</td>
                                //                 <td>" . $row['type'] ."</td>
                                //                 <td>" . $row['fk_category'] ."</td>
                                //             </tr>";
                                //     }

                                
                                // Search Query
                                
                               
                                
                                
                                 // Search Query
                                 if(isset($_GET['search_title']) && isset($_GET['search_location']))
                                 {
                                    
                                     
                                     if(mysqli_num_rows($query_run) > 0)
                                     {
                                         while ($row = $query_run->fetch_assoc())
                                             {
                                                 if($row['deleted']!=1)
                                                 {
                                                 ?>
                                                     <tr>
                                                         <!--<td><a href="<?php // echo $dir; ?>jobs/details/?job_code=<?php // echo $row['job_code'] ?>"><?php // echo $row['title'] ?></a></td>-->
                                                         <td><a href="<?php echo $dir; ?>details/?job_code=<?php echo $row['job_code'] ?>"><?php echo $row['title'] ?></a></td>
                                                         
                                                         <td><?php echo $row['duration'] ?></td>
                                                         <td>
                                                            <?php
                                                                if($row['remote_job']!='Remote Jobs'){
                                                                    echo $row['city'];
                                                                }    
                                                                else{
                                                                    echo "Remote Job";
                                                                }
                                                            ?>
                                                         </td>
                                                     </tr>
                                                     <?php
                                                 }
                                             }
                                         // --------UP code
                                     }
                                     else {
                                        echo "No data found...";
                                     }
                                 }
                                 else{
                                    
                                    if(mysqli_num_rows($query_run) > 0)
                                     {
                                         while ($row = $query_run->fetch_assoc())
                                             {
                                                 if($row['deleted']!=1)
                                                 {
                                                    ?>
                                                     <tr>
                                                        <td><a href="<?php echo $dir; ?>details/?job_code=<?php echo $row['job_code'] ?>"><?php echo $row['title'] ?></a></td>
                                                        <td><?php echo $row['duration'] ?></td>
                                                        <td>
                                                             <?php
                                                                // if($row['remote_job']!='Remote Jobs'){
                                                                //     echo $row['otherlocation'];
                                                                // }
                                                                if($row['country']!='United States')
                                                                {
                                                                    if($row['remote_job']!='Remote Jobs'){
                                                                        echo $row['otherlocation'];
                                                                    }    
                                                                    else{
                                                                        echo "Remote Job";
                                                                    }
                                                                }
                                                                else
                                                                {
                                                                    if($row['remote_job']!='Remote Jobs'){
                                                                        echo $row['city'];
                                                                        echo ", ";
                                                                        echo $row['state'];
                                                                    }    
                                                                    else{
                                                                        echo "Remote Job";
                                                                    }
                                                                }
                                                            ?>
                                                        </td>
                                                     </tr>

                                                    <?php
                                                 }
                                             }
                                         // --------UP code
                                     }

                                 }
                                 // Search Query


                                 
                            ?>
                            
                        </tbody>
                    </table>

                                <?php
                                if(isset($_GET['search_title']) AND isset($_GET['search_location'])){}else{
                                    //$sql1 = "SELECT * FROM new_user WHERE deleted='0'";
                                    //$pagi_result = mysqli_query($conn, $sql1) or die('Query Failed.');

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
                                            echo '<li class="'.$active.'"><a href="?page='.$i.'">'.$i.'</a></li>';
                                        }
                                        echo '</ul>';

                                    }
                                }
                                ?>


                </div>
            </div>
            <div class="flex flex-1 align-hor right middle">
                <div class="side-fold flex align-vert left stretch gap-20">
                    <div class="side-fold-box green flex align-vert left stretch gap-15">
                        <div class="newsletter flex align-vert left stretch gap-4">
                            <img src="<?php echo $dir; ?>/assets/images/newsletter.png" class="newsletter-icon" alt="">
                            <h3>Weekly Newsletter</h3>
                            <p>We will keep you updated when the new jobs arrive.</p>
                            <p><a href="javascript:;" class="button secondary showForm">Subscribe Now</a></p>
                        </div>
                        <div class="newsletter-form flex align-vert left stretch" style="display:none;">
                            <!--<input type="text" placeholder="Enter your email">-->
                            <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
                            <script>
                            hbspt.forms.create({
                                region: "na1",
                                portalId: "8225673",
                                formId: "917fd8e2-b5e4-4f7b-909f-5e843dafbc8a"
                            });
                            </script>
                            
                            <small>We care about your data in our Privacy Policy</small>
                        </div>
                        <!--<button class="button secondary big">Subscribe</button>-->
                    </div>
                    <div class="side-fold-box flex align-vert left stretch gap-15 hide-mobile">
                        <div class="flex align-vert left stretch gap-4">
                            <h3>Latest Jobs</h3>
                        </div>
                        <div class="latest-jobs flex align-vert left stretch">   
                        <?php
                            $latest_jobs_query = "SELECT * FROM `new_user` WHERE deleted='0' AND active='1' ORDER BY rand() ASC LIMIT 3";
                            $latest_jobs = mysqli_query($conn, $latest_jobs_query);
                            if(mysqli_num_rows($latest_jobs) > 0){
                                foreach($latest_jobs as $row){ 
                                ?>
                                    <a href="<?php echo $dir; ?>details/?job_code=<?php echo $row['job_code'] ?>"><?= $row['title'] ?></a>
                                <?php }
                                }else{ ?>
                                    <p>No record Found.</p>
                                <?php } ?>
                        </div>
                    </div>
                    <!-- <div class="side-fold-box flex align-vert left stretch gap-15">
                        <div class="flex align-vert left stretch gap-4">
                            <h3>Popular Searches</h3>
                        </div>
                        <div class="popular-searches flex align-vert left stretch">
                            <a href="#">Java QA Automation Engineer <small>105 jobs</small></a>
                            <a href="#">Lead Java Developer <small>105 jobs</small></a>
                            <a href="#">Senior Java Full Stack Developer <small>105 jobs</small></a>
                            <a href="#">Senior Java Developer <small>105 jobs</small></a>
                        </div>
                    </div> -->
                    <div class="side-fold-box transparent flex align-vert left stretch gap-15">
                        <div class="flex align-vert left stretch gap-4">
                            <h3>Our Community Sites</h3>
                        </div>
                        <div class="communities flex align-hor left stretch gap-15">
                            <a href="https://www.sapzilla.com/" target="_blank"><img src="<?php echo $dir; ?>/assets/images/erp-icons/lp_link1.png" alt=""></a>
                            <a href="http://www.oracleconnections.com/" target="_blank"><img src="<?php echo $dir; ?>/assets/images/erp-icons/lp_link2.png" alt=""></a>
                            <a href="http://www.mypeoplesoft.com/" target="_blank"><img src="<?php echo $dir; ?>/assets/images/erp-icons/lp_link3.png" alt=""></a>
                            <a href="https://app.slack.com/workspace-signin" target="_blank"><img src="<?php echo $dir; ?>/assets/images/erp-icons/xperti.png" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

 
    <?php include 'includes/cta.php' ?>


<script>
    $(document).ready(function(){
        // $('#myTable').DataTable();

        $('#myTable').DataTable( {
            // "order": [[ 3, "desc" ]]
            "ordering": false
        });

        $('.showForm').on('click',function(){
            $(this).hide();
            $(this).parents('.newsletter').siblings('.newsletter-form').show();
        });
    });
</script>

<?php include 'includes/footer.php' ?>