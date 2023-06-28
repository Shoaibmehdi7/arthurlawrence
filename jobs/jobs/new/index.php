<?php include '../../includes/header.php' ?>
<?php
require '../../connection.php';

$sql = "SELECT * FROM job_categories";
$result = mysqli_query($conn, $sql);
$jobCategories = array();

if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
        array_push($jobCategories, $row);
    }
} else {
    $jobCategories = [];
}

if(isset($_POST['submit'])){

    $title = $_POST['title'];
    $description = htmlentities($_POST['description']);;
    $job_code = $_POST['job_code'];
    $requirements = htmlentities($_POST['requirements']);
    $contact_info = htmlentities($_POST['contact_info']);
    $skills = $_POST['skills'];
    $status = true;
    $fk_category = $_POST['fk_category'];
    $type = $_POST['type'];
    $location = $_POST['location'];

    $sql = "INSERT INTO `job_listing`(`title`, `description`, `job_code`, `requirements`, `contact_info`, `skills`, `status`, `fk_category`, `type`, `location`) VALUES ('$title','$description','$job_code','$requirements','$contact_info','$skills','$status','$fk_category','$type','$location')";
    // print_r($sql);
    // die();
    $result = mysqli_query($conn, $sql);
    header('Location: job-listing.php');
}


?>
    <!-- Navbar -- Start -->
    <?php include '../../includes/navigation.php'; ?>
    <!-- Navbar -- End -->
    <!-- Page Content -- Start -->

    <section class="contact-us job-detail padding-y-50-lg margin-top-50-lg">
        <div class="container align-vert edge stretch gap-20">
            <div class="col-12 flex align-vert center middle gap-15">
                <h2>Create Job</h2>
            </div>
            <div class="col-12 contact-form align-vert middle center">
                <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" class="flex align-vert top stretch gap-25">
                    <div class="form-box flex align-hor edge middle gap-15">
                        <div class="form-field">
                            <label for="title">Job Title<span class="text-primary">*</span></label>
                            <input type="text" name="title" placeholder="Type here">
                        </div>
                        <div class="form-field">
                            <label for="job_code">Job Code<span class="text-primary">*</span></label>
                            <input type="text" name="job_code" placeholder="Type here">
                        </div>
                    </div>
                    <div class="form-box flex align-hor edge middle gap-15">
                        <div class="form-field">
                            <label for="description">Description<span class="text-primary">*</span></label>
                            <textarea name="description" id="description"></textarea>
                        </div>
                    </div>
                    <div class="form-box flex align-hor edge middle gap-15">
                        <div class="form-field">
                            <label for="requirements">Job Requirements<span class="text-primary">*</span></label>
                            <textarea name="requirements" id="requirements" rows="5"></textarea>
                        </div>
                    </div>
                    <div class="form-box flex align-hor edge middle gap-15">
                        <div class="form-field">
                            <label for="contact_info">Contact Information<span class="text-primary">*</span></label>
                            <textarea name="contact_info" id="contact_info" rows="5"></textarea>
                        </div>
                    </div>
                    <div class="form-box flex align-hor edge middle gap-15">
                        <div class="form-field">
                            <label for="location">Location<span class="text-primary">*</span></label>
                            <input type="text" name="location" placeholder="Type here">
                        </div>
                        <div class="form-field">
                            <label for="skills">Skills<span class="text-primary">*</span><small> (Please enter skills comma separated if multiple)</small></label>
                            <input type="text" name="skills" placeholder="Type here">
                        </div>
                    </div>
                    <div class="form-box flex align-hor edge middle gap-15">
                        <div class="form-field">
                            <label for="type">Job Type<span class="text-primary">*</span></label>
                            <select name="type" name="type">
                                <option value="Full Time">Full Time</option>
                                <option value="Part Time">Part Time</option>
                                <option value="Remote">Remote</option>
                            </select>
                        </div>
                        <div class="form-field">
                            <label for="fk_category">Job category<span class="text-primary">*</span></label>
                            <select name="fk_category" name="fk_category">
                                <?php for ($i=0; $i < sizeof($jobCategories); $i++) { ?>
                                <option value="<?php echo $jobCategories[$i]['cat_id']; ?>"><?php echo $jobCategories[$i]['cat_title']; ?></option>
                                <?php } ?>
                            </select>
                        </div>
                    </div>
                    <div class="flex align-hor right middle gap-15">
                        <button class="button secondary big form-btn" type="submit" name="submit">Submit</button>
                    </div>
                </form>
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
        $('#myTable').DataTable();
        CKEDITOR.replace( 'description');
        CKEDITOR.replace( 'requirements');
        CKEDITOR.replace( 'contact_info');
    });
</script>

<?php include '../../includes/footer.php' ?>
