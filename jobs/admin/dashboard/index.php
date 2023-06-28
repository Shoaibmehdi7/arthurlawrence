<?php include '../../includes/checklogin.php' ?><?php include '../includes/header.php' ?>
<?php
require '../connection.php';

// Job Listing Filter and Default Listing

$sql = "SELECT job_listing.id, job_listing.title, job_listing.location, job_listing.type, job_categories.cat_title as catTitle  FROM job_listing LEFT JOIN job_categories ON job_listing.fk_category = job_categories.cat_id ORDER BY job_listing.id DESC";

if(isset($_GET['id'])){
    $id = $_GET['id'];
    $sql = "SELECT job_listing.id, job_listing.title, job_listing.location, job_listing.type, job_categories.cat_title as catTitle  FROM job_listing LEFT JOIN job_categories ON job_listing.fk_category = job_categories.cat_id WHERE job_listing.fk_category = $id ORDER BY job_listing.id DESC";
}

if(isset($_POST['submit'])){
    $sql = "SELECT job_listing.id, job_listing.title, job_listing.location, job_listing.type, job_categories.cat_title as catTitle  FROM job_listing LEFT JOIN job_categories ON job_listing.fk_category = job_categories.cat_id";

    $conditions = array();

    if(! empty($_POST['title'])) {
        $title = $_POST['title'];
        $conditions[] = " job_listing.title LIKE '%$title%'";
    }
    if(! empty($_POST['location'])) {
        $location = $_POST['location'];
        $conditions[] = " job_listing.location LIKE '%$location%'";
    }
    if(! empty($_POST['fullTime'])) {
        $fullTime = $_POST['fullTime'];
        $conditions[] = " job_listing.type LIKE '%$fullTime%'";
    }
    if(! empty($_POST['partTime'])) {
        $partTime = $_POST['partTime'];
        $conditions[] = " job_listing.type LIKE '%$partTime%'";
    }
    if(! empty($_POST['remote'])) {
        $remote = $_POST['remote'];
        $conditions[] = " job_listing.type LIKE '%$remote%'";
    }

    $sql = $sql;
    if (count($conditions) > 0) {
        $sql .= " WHERE " . implode(' AND ', $conditions). " ORDER BY job_listing.id DESC";
    }
}

$result = mysqli_query($conn, $sql);
$jobList = array();

if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
        array_push($jobList, $row);
    }
} else {
    $jobList = [];
}


// print_r($jobList);
// echo sizeof($jobList);
// die();
?>
    <!-- Navbar -- Start -->
    <?php include '../includes/navigation.php'; ?>
    <!-- Navbar -- End -->
    <!-- Page Content -- Start -->


    <section class="listing-page-header padding-y-50-lg margin-top-50-lg">
        <div class="container align-hor edge center">
            <div class="col-12 flex align-vert left middle gap-5">
                <div class="breadcrumb">
                    <a href="<?php echo $dir; ?>/">Home</a>
                    <span><i class="fa fa-chevron-right"></i></span>
                    <a href="job-listing.php" class="active">Job Listing</a>
                </div>
                <h2>Arthur Lawrence <span class="bold">Career Portal</span></h2>
            </div>
            <form class="flex align-vert middle gap-15 job-search-filter" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
                <div class="flex align-hor edge middle gap-10 job-search">
                    <div class="icon-input">
                        <img src="<?php echo $dir; ?>/assets/images/loupe.png" class="inp-icon" alt="">
                        <input type="text" name="title" placeholder="Job title or keyword">
                    </div>
                    <div class="icon-input">
                        <img src="<?php echo $dir; ?>/assets/images/loupe.png" class="inp-icon" alt="">
                        <input type="text" name="location" placeholder="Enter location">
                    </div>
                    <div class="flex align-hor right middle gap-10">
                        <button class="button secondary big" type="submit" name="submit">Search</button>
                        <button class="button secondary big" type="submit" name="view-all">View all jobs</button>
                    </div>
                </div>
                <div class="flex align-hor middle gap-15">
                    <div class="checkbox flex align-hor middle gap-5">
                        <input type="checkbox" name="fullTime" value="Full Time"><label for="">Full Time</label>
                    </div>
                    <div class="checkbox flex align-hor middle gap-5">
                        <input type="checkbox" name="partTime" value="Part Time"><label for="">Part Time</label>
                    </div>
                    <div class="checkbox flex align-hor middle gap-5">
                        <input type="checkbox" name="remote" value="Remote"><label for="">Remote</label>
                    </div>
                </div>
            </form>
        </div>
    </section>

    <section class="job-listing padding-y-50">
        <div class="container align-hor edge top gap-40">
            <div class="flex flex-2 align-vert left stretch gap-15">
                <div class="listing-filter flex align-hor edge stretch gap-30">
                    <p><?php echo count($jobList); ?> Jobs</p>
                    <div class="filter-dropdown">
                        <select name="" id="">
                            <option value="Most Recent">Most Recent</option>
                        </select>
                    </div>
                </div>
                <div class="job-listing-table">
                    <table id="myTable" class="table table-striped table-bordered" style="width:100%">
                        <thead>
                            <tr>
                                <th>Job Title</th>
                                <th>Location</th>
                                <th>Job Type</th>
                                <th>Category</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php for ($i=0; $i < sizeof($jobList); $i++) { ?>
                            <tr>
                                <td><a href="<?php echo $dir; ?>/jobs/details/?id=<?php echo $jobList[$i]['id']; ?>"><?php echo $jobList[$i]['title'] ?></a></td>
                                <td><?php echo $jobList[$i]['location'] ?></td>
                                <td><span class="<?php if($jobList[$i]['type'] == 'Full Time'){echo 'red';}else{echo 'yellow';} ?>"><?php echo $jobList[$i]['type'] ?></span></td>
                                <td><?php echo $jobList[$i]['catTitle'] ?></td>
                            </tr>
                            <?php } ?>
                        </tbody>                        
                    </table>
                </div>
            </div>
            <div class="flex flex-1 align-hor right middle">
                <div class="side-fold flex align-vert left stretch gap-20">
                    <div class="side-fold-box green flex align-vert left stretch gap-15">
                        <div class="newsletter flex align-vert left stretch gap-4">
                            <img src="<?php echo $dir; ?>/assets/images/newsletter.png" class="newsletter-icon" alt="">
                            <h3>Weekly Newsletter</h3>
                            <p>We will keep you updated when the best new jobs pop up on XYZ location.</p>
                        </div>
                        <div class="newsletter-form flex align-vert left stretch">
                            <input type="text" placeholder="Enter your email">
                            <small>We care about your data in our Privacy Policy</small>
                        </div>
                        <button class="button secondary big">Subscribe</button>
                    </div>
                    <div class="side-fold-box flex align-vert left stretch gap-15">
                        <div class="flex align-vert left stretch gap-4">
                            <h3>Latest Jobs</h3>
                        </div>
                        <div class="latest-jobs flex align-vert left stretch">
                            <?php for ($i=0; $i < sizeof($latestJobList); $i++) { ?>
                            <a href="<?php echo $dir; ?>/jobs/details/?id=<?php echo $latestJobList[$i]['id']; ?>"><?php echo $latestJobList[$i]['title']; ?></a>
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
                            <h3>Our ERP Community Sites</h3>
                        </div>
                        <div class="communities flex align-hor left stretch gap-15">
                            <img src="<?php echo $dir; ?>/assets/images/erp-icons/lp_link1.png" alt="">
                            <img src="<?php echo $dir; ?>/assets/images/erp-icons/lp_link2.png" alt="">
                            <img src="<?php echo $dir; ?>/assets/images/erp-icons/lp_link3.png" alt="">
                            <img src="<?php echo $dir; ?>/assets/images/erp-icons/xperti.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="contact-us padding-y-50-lg">
        <div class="container align-hor edge center">
            <div class="col-12 mobile-contact flex align-hor edge middle gap-15">
                <div class="contact-info-box flex align-hor edge middle gap-15">
                    <span class="icon-border">
                        <div class="icon">
                            <img src="<?php echo $dir; ?>/assets/images/live-chat.png" alt="">
                        </div>
                    </span>
                    <div class="contact-content">
                        <p class="info-heading">Recruiters writing:</p>
                        <p>Live Chat</p>
                    </div>  
                </div>
                <div class="contact-info-box flex align-hor left middle gap-15">
                    <span class="icon-border">
                        <div class="icon green">
                            <img src="<?php echo $dir; ?>/assets/images/email.png" alt="">
                        </div>
                    </span>
                    <div class="contact-content">
                        <p class="info-heading">Send us at:</p>
                        <p>resume@arthurlawrence.net</p>
                    </div>  
                </div>
                <div class="contact-info-box flex align-hor left middle gap-15">
                    <span class="icon-border">
                        <div class="icon">
                            <img src="<?php echo $dir; ?>/assets/images/phone.png" alt="">
                        </div>
                    </span>
                    <div class="contact-content">
                        <p class="info-heading">Call us now:</p>
                        <p>+1 (213) 493 6482</p>
                    </div>  
                </div>
            </div>
        </div>
    </section>

<script>
    $(document).ready(function(){
        // $('#myTable').DataTable();

        $('#myTable').DataTable( {
            // "order": [[ 3, "desc" ]]
            "ordering": false
        });
    });
</script>

<?php include '../includes/footer.php' ?>