<?php // include '../../includes/checklogin.php' ?>
<?php
$title = "Create Job";
include '../../includes/header.php' ?>
<?php
require '../../connection.php';

// $sql = "SELECT * FROM job_categories";
// $result = mysqli_query($conn, $sql);
// $jobCategories = array();

// if (mysqli_num_rows($result) > 0) {
//     while($row = mysqli_fetch_assoc($result)) {
//         array_push($jobCategories, $row);
//     }
// } else {
//     $jobCategories = [];
// }

// if(isset($_POST['submit'])){

//     $title = $_POST['title'];
//     $description = htmlentities($_POST['description']);;
//     $job_code = $_POST['job_code'];
//     $requirements = htmlentities($_POST['requirements']);
//     $contact_info = htmlentities($_POST['contact_info']);
//     $skills = $_POST['skills'];
//     $status = true;
//     $fk_category = $_POST['fk_category'];
//     $type = $_POST['type'];
//     $location = $_POST['location'];

//     $sql = "INSERT INTO `job_listing`(`title`, `description`, `job_code`, `requirements`, `contact_info`, `skills`, `status`, `fk_category`, `type`, `location`) VALUES ('$title','$description','$job_code','$requirements','$contact_info','$skills','$status','$fk_category','$type','$location')";
//     // print_r($sql);
//     // die();
//     $result = mysqli_query($conn, $sql);
//     header('Location: job-listing.php');
// }





$jobFormVars = file_get_contents('../../includes/job-form-vars.json');
//echo '<pre>' . print_r($str, true) . '</pre>';

$jobFormVars = json_decode($jobFormVars,true);
//var_dump($jobFormVars['job_type']);

?>
    <!-- Navbar -- Start -->
    <?php include '../../includes/navigation.php'; ?>
    <!-- Navbar -- End -->
    <!-- Page Content -- Start -->

    <style>
    .contact-us .contact-form .form-field { position: relative; }
    :root { --body: #fafafa; --text-default: #1d1d1f; --text-secondary: #86868b; }
@media (prefers-color-scheme: light) {
  :root { --body: #fafafa; --text-default: #1d1d1f; }
}
@media (prefers-color-scheme: dark) {
  :root { --body: #161616; --text-default: #f5f5f7; }
}

.job-content p { text-transform: capitalize; }
</style>




    <section class="contact-us job-detail padding-y-50-lg margin-top-50-lg">
        <div class="container">
            <div style="display:flex;">
                <!--<a href="../dashboard/" target="_blank" style="padding:0 10px;">Home</a>-->
                <a href="../list/" target="_blank" style="padding:0 10px;">All Jobs</a>
                <a href="../new/" target="_blank" style="padding:0 10px;">Add Job</a>
                <a href="../?logout=1" style="padding:0 10px;">Logout</a>
            </div>
        </div>
        <div class="container align-vert edge stretch gap-20">
            <div class="col-12 flex align-vert center middle gap-15">
                <h2>Create Job</h2>
            </div>
            <div class="col-12 contact-form align-vert middle center">
                <form action="db_add.php" method="post" class="flex align-vert top stretch gap-25">
                    <div class="form-box flex align-hor edge middle gap-15">
                        <div class="form-field">
                            <label for="title">Job Title<span class="text-primary">*</span></label>
                            <input type="text" name="title" placeholder="Type here" required>
                        </div>
                        <div class="form-field">
                            <label for="job_code">Job Code<span class="text-primary">*</span></label>
                            <input type="text" name="job_code" placeholder="Type here" required>
                        </div>
                    </div>
                    <div class="form-box flex align-hor edge middle gap-15">
                        <div class="form-field">
                            <label for="description">Description<span class="text-primary">*</span></label>
                            <textarea name="description" class="content" id="description"></textarea>
                        </div>
                    </div>
                    <div class="form-box flex align-hor edge middle gap-15">
                        <div class="form-field">
                            <label for="location">City<span class="text-primary">*</span></label>
                            <!--<input type="text" name="location" placeholder="Type here" required>-->
                            <select class="js-single-select" name="city">
                                <?php foreach($jobFormVars['city'] as $item){ ?>
                                    <option value="<?php echo $item; ?>"><?php echo $item; ?></option>
                                <?php } ?>
                            </select>
                        </div>
                        
                        <div class="form-field">
                            <label for="location">State<span class="text-primary">*</span></label>
                            <!-- <input type="text" name="location" placeholder="Type here" required> -->
                            <select class="js-single-select" name="state">
                                <?php foreach($jobFormVars['state'] as $item){ ?>
                                    <option value="<?php echo $item; ?>"><?php echo $item; ?></option>
                                <?php } ?>
                            </select>
                        </div>

                        <div class="form-field">
                            <label for="location">Remote Jobs<span class="text-primary">*</span></label>
                            <select name="remote_job" class="js-single-select">
                                <option value=""></option>
                                <option value="Remote Jobs">Yes</option>
                                <option value="Not Remote Jobs">No</option>
                            </select>
                        </div>
                        
                        
                    </div>
                    <div class="form-box flex align-hor edge middle gap-15">
                    <div class="form-field">
                            <label for="skills">Skills<span class="text-primary">*</span><small> (Please enter skills comma separated if multiple)</small></label>
                            <!-- <input type="text" name="skills" placeholder="Type here"> -->
                            <select class="js-multiple-select" name="skills[]" multiple="multiple" required>
                                <?php foreach($jobFormVars['skills'] as $item){ ?>
                                    <option value="<?php echo $item; ?>"><?php echo $item; ?></option>
                                <?php } ?>

                            </select>
                        </div>


                        <div class="form-field">
                            <label for="location">Duration<span class="text-primary">*</span></label>
                            <input type="text" name="duration" placeholder="Type here" required>
                        </div>


                    </div>
                    <div class="form-box flex align-hor edge middle gap-15">

                    <div class="form-field">
                            <label for="type">Job Type<span class="text-primary">*</span></label>
                            <select name="type" class="js-single-select" required>
                                <option value="">Select</option>
                                <?php foreach($jobFormVars['job_type'] as $item){ ?>
                                    <option value="<?php echo $item; ?>"><?php echo $item; ?></option>
                                <?php } ?>
                            </select>
                        </div>


                        
                        <div class="form-field">
                            <label for="fk_category">Job category</label>
                            <select class="js-single-select" name="fk_category">
                                <?php foreach($jobFormVars['job_category'] as $item){ ?>
                                    <option value="<?php echo $item; ?>"><?php echo $item; ?></option>
                                <?php } ?>
                            </select>
                        </div>


                    </div>
                    <div class="form-box flex align-hor edge middle gap-15">

                    <div class="form-field">
                            <label for="type">Pay Rate/Salary</label>
                            <select class="js-single-select" name="pay">
                                <option value="">Select</option>
                                <?php foreach($jobFormVars['salary'] as $item){ ?>
                                    <option value="<?php echo $item; ?>"><?php echo $item; ?></option>
                                <?php } ?>
                            </select>
                        </div>


                        <div class="form-field">
                            <label for="ending_date">Ending Date</label>
                            <input type="date" id="ending_date" name="ending_date" placeholder="Select date" >
                        </div>

                        

                    </div>
                    <div class="form-box flex align-hor edge middle gap-15">

                    <div class="form-field">
                            <label for="skills">Work Authorization<small> (Please enter skills comma separated if multiple)</small></label>
                            <select name="authorization[]" class="js-multiple-select" multiple="multiple">
                                <?php foreach($jobFormVars['work_authorization'] as $item){ ?>
                                    <option value="<?php echo $item; ?>"><?php echo $item; ?></option>
                                <?php } ?>
                            </select>
                        </div>
                       

                        <div class="form-field">
                            <label for="job_post_date">Job Posted Date<span class="text-primary">*</span></label>
                            <input type="date" id="job_post_date" name="job_post_date" placeholder="Select date" readonly>
                        </div>
                        

                    </div>




                    <div class="flex align-hor right middle gap-15">

                        <div class="form-field">
                            <label for="location">Travel Required<span class="text-primary">*</span></label>
                            <select name="travel_required" class="js-single-select">
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>


                        <div class="form-field">
                             <div class="custom-checkbox">
                                <!--<input name="active_job" type="checkbox">-->
                                <input name="active" type="checkbox">
                            </div>
                        </div>
                        
                    </div>

                    <div class="flex align-hor right middle gap-15">
                        <div class="align-vert right flex">
                            <button class="button secondary big form-btn" type="submit" name="submit">Submit</button>
                        </div>
                    </div>


                </form>
            </div>
        </div>
    </section>

    <?php include '../../includes/cta.php' ?>

<script>
    $(document).ready(function(){
        /*$.get("../../includes/job-form-vars.json",function(e){
           console.log(e);
        });*/

        // $('#myTable').DataTable();
        // CKEDITOR.replace( 'description');
        // CKEDITOR.replace( 'requirements');
        // CKEDITOR.replace( 'contact_info');



        // -----Current Date-----
        Date.prototype.toDateInputValue = (function() {
            var local = new Date(this);
            local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
            return local.toJSON().slice(0,10);
        });
        $('#job_post_date').val(new Date().toDateInputValue());
        // -----Current Date-----

        const d = new Date();
        d.setMonth(d.getMonth()+1);
        document.getElementById('ending_date').value = d.toDateInputValue();
       
    });

</script>

<?php include '../../includes/footer.php' ?>
