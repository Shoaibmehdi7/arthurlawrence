<?php // include '../../includes/checklogin.php' ?>
<?php
$title = "Edit Job";
include '../../includes/header.php' ?>
<?php
require '../../connection.php';

 //Check Connection
 if ($conn->connect_error){
     die("Connection Failed: " . $conn->connect_error);
 }
 $job_code = $_GET['job_code'];



 if(isset($_GET['active'])){
    $active = $_GET['active'];
    $sql= "UPDATE new_user SET active='".$active."' WHERE job_code = '".$job_code."'";
    $query = mysqli_query($conn,$sql);
    echo $sql;
}



 // Read all row from database table
 $sql = "SELECT * FROM `new_user` WHERE job_code='".$job_code."'";
//  $sql = "SELECT * FROM `new_user`";

// echo $sql;
// die();



 $result = $conn->query($sql);
 if (!$result) {
     die("Invalid query: " . $conn->error);
 }



 

 $row = $result->fetch_assoc();
 
//  print_r($row);
//  die();

 $dbskills = explode(',', $row['skills']);
 $dbworkauthorization = explode(',', $row['authorization']);


$jobFormVars = file_get_contents('../../includes/job-form-vars.json');
//echo '<pre>' . print_r($str, true) . '</pre>';

$jobFormVars = json_decode($jobFormVars,true);
//var_dump($jobFormVars['job_type']);

?>
 <style>
    .contact-us .contact-form .form-field { position: relative; }
    :root { --body: #fafafa; --text-default: #1d1d1f; --text-secondary: #86868b; }
@media (prefers-color-scheme: light) {
  :root { --body: #fafafa; --text-default: #1d1d1f; }
}
@media (prefers-color-scheme: dark) {
  :root { --body: #161616; --text-default: #f5f5f7; }
}

.job-detail .job-content p { text-transform: capitalize; }
</style>


    <!-- Navbar -- Start -->
    <?php include '../../includes/navigation.php'; ?>
    <!-- Navbar -- End -->
    <!-- Page Content -- Start -->


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
                <h2>Edit Job</h2>
            </div>
            <div class="col-12 contact-form align-vert middle center">
                <form action="db_edit.php" method="post" class="flex align-vert top stretch gap-25">
                    <div class="form-box flex align-hor edge middle gap-15">
                        <div class="form-field">
                            <label for="title">Job Title<span class="text-primary">*</span></label>
                            <input type="text" name="title" value="<?php echo $row['title']; ?>">
                        </div>
                        <div class="form-field">
                            <label for="job_code">Job Code<span class="text-primary">*</span></label>
                            <input type="text" name="job_code" readonly value="<?php echo $row['job_code']; ?>">
                        </div>
                    </div>
                    <div class="form-box flex align-hor edge middle gap-15">
                        <div class="form-field">
                            <label for="description">Description<span class="text-primary">*</span></label>
                            <textarea name="description" class="content" id="description"><?php echo $row['description']; ?></textarea>
                        </div>
                    </div>
                    <!-- <div class="form-box flex align-hor edge middle gap-15">
                        <div class="form-field">
                            <label for="requirements">Job Requirements<span class="text-primary">*</span></label>
                            <textarea name="requirements" id="requirements" rows="5"><?php // echo $row['requirements']; ?></textarea>
                        </div>
                    </div>
                    <div class="form-box flex align-hor edge middle gap-15">
                        <div class="form-field">
                            <label for="contact_info">Contact Information<span class="text-primary">*</span></label>
                            <textarea name="contact_info" id="contact_info" rows="5"><?php // echo $row['contact_info']; ?></textarea>
                        </div>
                    </div> -->
                    <div class="form-box flex align-hor edge middle gap-15">
                        <div class="form-field countrylist">
                            <label for="location">Country<span class="text-primary">*</span></label>
                            <select class="js-single-select country" name="country" required>
                                <?php foreach($jobFormVars['country'] as $item){ ?>
                                    <option value="<?php echo $item; ?>" <?php if($row['country'] == $item){echo 'selected="selected"';} ?>><?php echo $item; ?></option>
                                <?php } ?>
                            </select>
                        </div>

                        <div class="form-field not_usa">
                            <label for="location">Location<span class="text-primary">*</span></label>
                            <input type="text" name="otherlocation" value="<?php echo $row['otherlocation']; ?>">
                        </div>
                        
                        
                       <div class="form-field usa_only">
                            <label for="location">City<span class="text-primary">*</span></label>
                            <!-- <input type="text" name="location" placeholder="Type here" required> -->

                            <select name="city" class="js-single-select" required>
                                <?php foreach($jobFormVars['city'] as $item){ ?>
                                    <option value="<?php echo $item; ?>" <?php if($row['city'] == $item){echo 'selected="selected"';} ?>><?php echo $item; ?></option>
                                <?php } ?>
                            </select>

                        </div>

                        <div class="form-field usa_only">
                            <label for="location">State<span class="text-primary">*</span></label>
                            <!-- <input type="text" name="location" placeholder="Type here" required> -->

                            <select name="state" class="js-single-select" required>
                                <?php foreach($jobFormVars['state'] as $item){ ?>
                                    <option value="<?php echo $item; ?>" <?php if($row['state'] == $item){echo 'selected="selected"';} ?>><?php echo $item; ?></option>
                                <?php } ?>
                            </select>

                        </div>


                        <div class="form-field" style=" max-width: 200px;">
                            <label for="location">Remote Jobs<span class="text-primary">*</span></label>
                            <select name="remote_job" class="js-single-select">
                                <option value=""></option>
                                <option value="Remote Jobs" <?php if($row['remote_job'] == 'Remote Jobs'){echo 'selected="selected"';} ?>>Yes</option>
                                <option value="Not Remote Jobs" <?php if($row['remote_job'] == 'Not Remote Jobs'){echo 'selected="selected"';} ?>>No</option>
                            </select>
                        </div>


                    </div>
                    <div class="form-box flex align-hor edge middle gap-15">


                    <div class="form-field">
                            <label for="skills">Skills<span class="text-primary">*</span><small> (Please enter skills comma separated if multiple)</small></label>
                            <!-- <input type="text" name="skills" placeholder="Type here"> skills -->
                           <select id="skillsdropdown" class="js-multiple-select" name="skills[]"                          multiple="multiple">                                
                                    <?php foreach($jobFormVars['skills'] as $item){ ?>
                                        <option value="<?php echo $item; ?>" <?php if(in_array($item,$dbskills)){echo 'selected="selected"';} ?>><?php echo $item; ?></option>
                                    <?php } ?>
                            </select>

                            <?php //var_dump($dbskills); ?>

                            <script>
                                var items = [<?php foreach($dbskills as $skill){ ?>'<?php echo trim($skill); ?>',<?php } ?>];
                                $('#skillsdropdown').val(items);
                                $('#skillsdropdown').trigger('change');
                                <?php 
                                $customKeywords = [];
                                foreach($dbskills as $skill){ 
                                    if(!in_array(trim($skill),$jobFormVars['skills'])){$customKeywords[] = trim($skill);}
                                } 
                                ?>
                                var customitems = [<?php foreach($customKeywords as $keyword){ ?>'<?php echo trim($keyword); ?>',<?php } ?>];
                                $.each(customitems, (k,item)=>{
                                    var selectCustomItem = new Option(item, item, true, true);
                                    $("#skillsdropdown").append(selectCustomItem).trigger('change');
                                });
                            </script>


                        </div>


                        <div class="form-field">
                            <label for="location">Duration<span class="text-primary">*</span></label>
                            <input type="text" name="duration" placeholder="Type here" value="<?php echo $row['duration']; ?>">
                        </div>
                        
                    </div>
                    <div class="form-box flex align-hor edge middle gap-15">

                    <div class="form-field">
                            <label for="type">Job Type<span class="text-primary">*</span></label>
                            <select name="type" class="js-single-select">
                                <option value="">Select</option>
                                <?php foreach($jobFormVars['job_type'] as $item){ ?>
                                    <option value="<?php echo $item; ?>" <?php if($row['type'] == $item){echo 'selected="selected"';} ?>><?php echo $item; ?></option>
                                <?php } ?>
                            </select>
                        </div>


                        
                        <div class="form-field">
                            <label for="fk_category">Job category</label>
                            <select class="js-single-select" name="fk_category">
                                <?php foreach($jobFormVars['job_category'] as $item){ ?>
                                    <option value="<?php echo $item; ?>" <?php if($row['fk_category'] == $item){echo 'selected="selected"';} ?>><?php echo $item; ?></option>
                                <?php } ?>
                            </select>
                        </div>
                        
                    </div>
                    <div class="form-box flex align-hor edge middle gap-15">

                    <div class="form-field">
                            <label for="type">Pay Rate/Salary<span class="text-primary">*</span></label>
                            <select class="js-single-select" name="pay">
                                <option value="">Select</option>
                                <?php foreach($jobFormVars['salary'] as $item){ ?>
                                    <option value="<?php echo $item; ?>" <?php if($row['pay'] == $item){echo 'selected="selected"';} ?>><?php echo $item; ?></option>
                                <?php } ?>
                            </select>
                        </div>
                        

                        <div class="form-field">
                            <label for="location">Ending Date<span class="text-primary">*</span></label>
                            <input type="date" name="ending_date" placeholder="Select date" value="<?php echo $row['ending_date']; ?>">
                        </div>
                        

                    </div>
                    <div class="form-box flex align-hor edge middle gap-15">

                    <div class="form-field">
                            <label for="skills">Work Authorization<small> (Please enter skills comma separated if multiple)</small></label>
                            <select name="authorization[]" class="js-multiple-select" multiple="multiple">
                                <?php foreach($jobFormVars['work_authorization'] as $item){ ?>
                                    <option value="<?php echo $item; ?>" <?php if(in_array($item,$dbworkauthorization)){echo 'selected="selected"';} ?>><?php echo $item; ?></option>
                                <?php } ?>
                            </select>
                        </div>
                        
                        


                        <div class="form-field">
                            <label for="location">Job Posted Date<span class="text-primary">*</span></label>
                            <input type="text" name="job_post_date" placeholder="Select date" value="<?php echo $row['job_post_date']; ?>" readonly>
                        </div>

                    </div>
                    
                    <div class="flex align-hor right middle gap-15">

                        <div class="form-field">
                            <label for="location">Travel Required<span class="text-primary">*</span></label>
                            <select name="travel_required" class="js-single-select">
                            <option value="Yes" <?php if($row['travel_required'] == 'Yes'){echo 'selected="selected"';} ?>>Yes</option>
                            <option value="No" <?php if($row['travel_required'] == 'No'){echo 'selected="selected"';} ?>>No</option>
                            </select>
                        </div>


                        <div class="form-field">
                                <div class="custom-checkbox">
                                    <input name="active_job" type="checkbox" <?php if($row['active']){echo 'checked';} ?>>
                                </div>
                        </div>

                    </div>

                    <div class="flex align-hor right middle gap-15">
                        <div class="align-vert right flex">
                            <input type="hidden" name="id" value="<?php echo $row['id']; ?>" />
                            <button class="button secondary big form-btn" type="submit" name="submit">Submit</button>
                        </div>
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
        $('[name="active_job"]').on('change',function(){
            if($(this).is(':checked')){
                window.location = '?job_code=<?php echo $_GET['job_code']; ?>&active=1';
            }else{            
                window.location = '?job_code=<?php echo $_GET['job_code']; ?>&active=0';                
            }
        });
    });
</script>

<?php include '../../includes/footer.php' ?>
