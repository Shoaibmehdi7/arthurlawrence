<?php
if(!isset($_GET['job_code'])){
    $newURL = '../list/';
    header('Location: '.$newURL);
}

require '../../connection.php';

 //Check Connection
 if ($conn->connect_error){
     die("Connection Failed: " . $conn->connect_error);
 }

 // Read all row from database table
 $job_code = $_GET['job_code'];
//  $sql = "SELECT * FROM `new_user` WHERE job_code=$job_code";
 $sql = "SELECT * FROM `new_user` WHERE job_code='".$job_code."'";
 $result = $conn->query($sql);
 if (!$result) {
     die("Invalid query: " . $conn->error);
 }

 $row = $result->fetch_assoc();
 
  $actual_link = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";


if($row['remote_job']!='Remote Jobs'){
    $job =  $row['city'].", ".$row['state'];
}    
else{
    $job = "Remote Job";
}
// $title = $row['title']." Job In ". $job;
$title = $row['title']." Job In ". $job;
$desc = "ArthurLawrence.net is looking for a ". $row['title'] ." in " . $job;
include '../../includes/header.php';

?>

<style>
    .side-fold .side-fold-box .newsletter p{text-align:left;}
</style>


<?php include '../../includes/header.php' ?>

<a href="javascript:;" class="popupSideBtn applyPopupForm">Apply Now</a>
<div class="overlay"></div>

<!-------------POPUP Form for Apply Now-------------->

<section class="contact-us modal-contact popupApplyForm">
    <div class="align-hor edge center">
        <div class="col-12 contact-form modal-job-form align-vert middle center">
            <a href="javascript:;" class="close x-close">X</a> 
            <h3 class="bold text-black">Quick Apply</h3>
            <form method="POST" action="db_add_popup.php"  class="flex align-vert top stretch gap-15">
                <div class="form-box flex align-hor edge middle gap-15">
                    <div class="form-field">
                        <label for="jobTitle">Job Title<span class="text-primary">*</span></label>
                        <input type="text" readonly="" name="title" value="<?php echo $row['title']; ?>" >
                    </div>
                    <div class="form-field">
                        <label for="fullName">Full Name<span class="text-primary">*</span></label>
                        <input type="text" required="" name="fname" placeholder="Type here">
                    </div>
                </div>
                <div class="form-box flex align-hor edge middle gap-15">
                    <div class="form-field">
                        <label for="email">Email<span class="text-primary">*</span></label>
                        <input type="email" required="" name="email" placeholder="Type here">
                    </div>
                    <div class="form-field">
                        <label for="phone">Phone<span class="text-primary">*</span></label>
                        <div class="form-flag-field">
                            <div class="flag-field">
                                <img src="<?php echo $dir; ?>/assets/images/america-flag.png" alt="">
                                <input type="tel" value="+1" readonly="" placeholder="+1">
                            </div>
                            <input type="tel" required="" name="phone" id="yourphone2" placeholder="0201555123">
                        </div>
                    </div>
                </div>
                <div class="form-box flex align-vert edge middle gap-5">
                    <label for="phone">What is your work authorization in United States?<span class="text-primary">*</span></label>
                    <div class="radio-tile-group">
                        <div class="input-container">
                            <input class="radio-button" type="radio" value="US Citizen/ Green Card Holder" name="authorization" required="">
                            <div class="radio-tile">
                                <label for="US Citizen/ Green Card Holder" class="radio-tile-label">US Citizen/ Green Card Holder</label>
                            </div>
                        </div>
                        <div class="input-container">
                            <input class="radio-button" type="radio" value="EAD-GC" name="authorization">
                            <div class="radio-tile">
                                <label for="EAD-GC" class="radio-tile-label">EAD-GC</label>
                            </div>
                        </div>
                        <div class="input-container">
                            <input class="radio-button" type="radio" value="EAD-H4" name="authorization">
                            <div class="radio-tile">
                                <label for="EAD-H4" class="radio-tile-label">EAD-H4</label>
                            </div>
                        </div>
                        <div class="input-container">
                            <input class="radio-button" type="radio" value="H1B" name="authorization">
                            <div class="radio-tile">
                                <label for="H1B" class="radio-tile-label">H1B</label>
                            </div>
                        </div>
                        <div class="input-container">
                            <input class="radio-button" type="radio" value="EAD-OPT " name="authorization">
                            <div class="radio-tile">
                                <label for="EAD-OPT" class="radio-tile-label">EAD-OPT </label>
                            </div>
                        </div>
                        <div class="input-container">
                            <input class="radio-button" type="radio" value="TN Permit [Canadian/ Mexico]" name="authorization">
                            <div class="radio-tile">
                                <label for="TN Permit [Canadian/ Mexico]" class="radio-tile-label">TN Permit [Canadian/ Mexico]</label>
                            </div>
                        </div>
                        <div class="input-container">
                            <input class="radio-button" type="radio" value="F-1 CPT [Full Time]" name="authorization">
                            <div class="radio-tile">
                                <label for="F-1 CPT [Full Time]" class="radio-tile-label">F-1 CPT [Full Time]</label>
                            </div>
                        </div>
                        <div class="input-container">
                            <input class="radio-button" type="radio" value="Require US work authorization" name="authorization">
                            <div class="radio-tile">
                                <label for="Require US work authorization" class="radio-tile-label">Require US work authorization</label>
                            </div>
                        </div>
                        <div class="input-container">
                            <input class="radio-button" type="radio" value="Other [E3/ L1/ L2/ F1-CPT Part Time]" name="authorization">
                            <div class="radio-tile">
                                <label for="Other [E3/ L1/ L2/ F1-CPT Part Time]" class="radio-tile-label">Other [E3/ L1/ L2/ F1-CPT Part Time]</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-box flex align-vert edge middle gap-5">
                    <label for="phone">What is the Tax term you prefer to work on?<span class="text-primary">*</span></label>
                    <div class="radio-tile-group">
                        <div class="input-container">
                            <input class="term-checkbox radio-button" type="checkbox" value="W2" name="taxterm">
                            <div class="radio-tile">
                                <label for="W2" class="radio-tile-label">W2</label>
                            </div>
                        </div>
                        <div class="input-container">
                            <input class="term-checkbox radio-button" type="checkbox" value="1099" name="taxterm">
                            <div class="radio-tile">
                                <label for="1099" class="radio-tile-label">1099</label>
                            </div>
                        </div>
                        <div class="input-container">
                            <input class="term-checkbox radio-button" type="checkbox" value="Corp to Corp" name="taxterm">
                            <div class="radio-tile">
                                <label for="Corp to Corp" class="radio-tile-label">Corp to Corp</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex align-hor edge middle gap-15">
                    <div class="form-field choose-file">
                        <label for="resume">Upload your resume<span class="text-primary">*</span></label>
                        <input type="file" name="resume" id="resume" placeholder="Type here" required=""  onchange="validateForSize(this,10,2000);">
                    </div>
                </div>
                <div class="flex align-hor edge middle gap-15">
                    <input class="button secondary big form-btn" name="submit" type="submit" value="Submit">
                    
                    <!--<button class="close">Close</button>-->
                </div>
            </form>
        </div>
    </div>
</section>

<?php
if(isset($_POST['popup_submit'])){

        $to = "ghufrandeveloper82@gmail.com";
        $subject = $_POST['jobTitle'];
//        $message = $_POST['fullName'];
        
        $headers = [ "MIMI-Version: 1.0",
                    "Content-type: text/plain; charset=utf-8",
                    "From: ghufrannadeem82@gmail.com"
                    ];


        $fullname = $_POST['fullName'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $authorization = $_POST['citizenship'];
        $textterm = $_POST['taxterm'];



        $message = "Full Name:  $fullname \r\n";
        $message .= "Email:  $email \r\n";
        $message .= "Phone Number:  +1 $phone \r\n";
        $message .= "What is your work authorization in United States?  $authorization \r\n";
        $message .= "What is the Tax term you prefer to work on?  $textterm \r\n";



        $headers = implode("\r\n", $headers);

        if(mail($to,$subject,$message,$headers)){
            echo "Mail Send";
        }
        else{
            echo "Not Sed Email";
        }
}

?>


<!-------------POPUP Form for Apply Now-------------->




    <!-- Navbar -- Start -->
    <?php include '../../includes/navigation.php'; ?>
    <!-- Navbar -- End -->
    <!-- Page Content -- Start -->


    <!-- <section class="detail-page padding-y-50-lg margin-top-50-lg">
        <div class="container align-vert top left gap-20">
            <div class="col-12 flex align-hor edge middle gap-5">
                <div class="detail-page-header flex align-vert left middle gap-5">
                    <a href="#" class="back-link"><i class="fa fa-chevron-left"></i> Back to open positions</a>
                    <h2>Senior Java Developer</h2>
                    <small class="job-code">Job Code: WMD_9819_01</small>
                </div>
                <div class="flex align-hor right middle">
                    <button class="share-btn"><img src="<?php echo $dir; ?>/assets/images/share.svg" alt=""></button>
                </div>
            </div>
            <div class="job-tags flex align-hor gap-5">
                <span class="red"><i class="fa fa-map-marker"></i> Springfiled, PA</span>
                <span class="purple"><i class="fa fa-code"></i> Development</span>
                <span class="blue"><i class="fa fa-calendar-alt"></i> Full Time</span>
                <span class="green"><i class="fa fa-dollar-sign"></i> Open All Inclusive</span>
            </div>
        </div>
    </section> -->

    <section class="job-detail padding-y-50-lg margin-top-50-lg">
        <div class="container align-hor edge top gap-40">
            <div class="flex flex-2 align-vert left stretch gap-20 mob-width-100">
                <div class="detail-page flex align-vert top left gap-20">
                    <div class="col-12 flex align-hor edge middle gap-5">
                        <div class="detail-page-header flex align-vert left middle gap-5">
                            <a href="<?php echo $dir; ?>" class="back-link"><i class="fa fa-chevron-left"></i> Back to open positions</a>
                            <h2><?php echo $row['title']; ?></h2>
                            <small class="job-code">Job Code: <?php echo $row['job_code']; ?></small>
                        </div>
                        <div class="flex align-hor right middle share-links">
                            <!--<button class="share-btn"><img src="<?php echo $dir; ?>/assets/images/share.svg" alt=""></button>-->
                            <a href="#" class="share-btn"><img src="<?php echo $dir; ?>/assets/images/share.svg" alt=""></a>
                            <ul>
                                <li><a target="_blank" href="http://www.facebook.com/sharer.php?u=<?php echo $actual_link ?>"><i class="fab fa-facebook-square"></i></a></li>
                                <li><a target="_blank" href="http://www.linkedin.com/shareArticle?mini=true&url=<?php echo $actual_link ?>"><i class="fab fa-linkedin"></i></a></li>
                                <li><a target="_blank" href="http://twitter.com/share?text=Artur Lawrance&url=<?php echo $actual_link ?>"><i class="fab fa-twitter-square"></i></a></li>
                                <!-- <li><a target="_blank" href="javascript:;"><i class="fab fa-instagram-square"></i></a></li> -->
                                <li><a target="_blank" href="mailto://<?php echo $actual_link ?>"><i class="fas fa-envelope"></i></a></li>
                            </ul>
                            
                        </div>
                    </div>
                    
                    <div class="job-tags flex align-hor gap-5">
                        <span class="red css_tooltip" title="Location"><i class="fa fa-map-marker"></i>
                            <?php // echo $row['city']; ?>
                            <?php // echo $row['state']; ?>
                            <?php // echo $row['remote_job']; ?>



                            <?php
                                 if($row['remote_job']!='Remote Jobs'){
                                    echo $row['city'];
                                    echo ", ";
                                    echo $row['state'];
                                }    
                                else{
                                    echo "Remote Job";
                                }
                            ?>

                        </span>
                        <span class="purple css_tooltip" title="Duration"><i class="fa fa-calendar-alt"></i> <?php echo $row['duration']; ?></span>
                        <span class="blue css_tooltip" title="Job Type"><i class="fas fa-street-view"></i> <?php echo $row['type']; ?></span>
                        <span class="green css_tooltip" title="Pay Rate/Salary"><i class="fa fa-dollar-sign"></i><?php echo $row['pay']; ?></span>
                    </div>
                </div>
                <div class="job-content">
                    <!-- <h4>Job Brief</h4> -->
                    <?php // echo $row['description']; ?>
                    <a href="javascript:;" class="button secondary big applyPopupForm text-center mobile-button">Apply Now</a>
                    <h4>Skills required</h4>
                    <p style="text-transform: capitalize;"><?php echo $row['skills']; ?></p>
                    <!-- <h4>Job Requirements</h4>
                    <?php // echo $row['requirements']; ?> -->
                    <h4>Job Description</h4>
                    <?php echo $row['description']; ?>
                    <h4>Travel Required</h4>
                    <p><?php echo $row['travel_required']; ?></p>
                    <!-- <br>
                    <h4>Benefits</h4> -->
                </div>
                <!-- <div class="benefits flex align-hor left middle gap-40">
                    <div class="benefit">
                        <p>Health Insurance</p>
                        <img src="<?php echo $dir; ?>/assets/images/benefit1.svg" alt="">
                    </div>
                    <div class="benefit">
                        <p>Paid Time Offs (PTOs)</p>
                        <img src="<?php echo $dir; ?>/assets/images/benefit2.svg" alt="">
                    </div>
                    <div class="benefit">
                        <p>401 (k) Plan </p>
                        <img src="<?php echo $dir; ?>/assets/images/benefit3.svg" alt="">
                    </div>
                </div> -->
                <h4>About Arthur Lawrence</h4>
                <p>Arthur Lawrence is a management and technology consulting firm providing enterprise-wide business transformation and business applications implementation services. Our in-depth technical knowledge and broad experience of working with world-class companies enables organizations to leverage our capabilities in developing winning strategies and cost-effective solutions. We are an UN Women Empowerment Principal Signatory and are certified from National Minority Supplier Development Council.</p>
                <h4 class="margin-top-30">Our Accomplishments</h4>
                <div class="job-accomplishments flex align-hor left middle gap-20">
                    <img src="<?php echo $dir; ?>/assets/images/accomplishments/new_img1.png" alt="">
                    <img src="<?php echo $dir; ?>/assets/images/accomplishments/new_img2.png" alt="">
                    <img src="<?php echo $dir; ?>/assets/images/accomplishments/new_img3.png" alt="">
                    <img src="<?php echo $dir; ?>/assets/images/accomplishments/new_img4.png" alt="">
                    <img src="<?php echo $dir; ?>/assets/images/accomplishments/new_img5.png" alt="">
                    <img src="<?php echo $dir; ?>/assets/images/accomplishments/new_img6.png" alt="">
                    <img src="<?php echo $dir; ?>/assets/images/accomplishments/new_img7.png" alt="">
                    <img src="<?php echo $dir; ?>/assets/images/accomplishments/new_img8.png" alt="">
                </div>
            </div>
            <div class="flex flex-1 align-hor right middle">
                <div class="side-fold flex align-vert left stretch gap-20">
                    <div class="apply-box side-fold-box green flex align-vert left stretch gap-15">
                        <div class="newsletter flex align-vert left stretch gap-4">
                            <h3>Sounds like a match?</h3>
                        </div>
                        <div class="flex align-vert left stretch gap-10">
                            <!--<a class="button secondary big" href="#apply-form" data-title="<?php // echo $jobDetails['title']; ?>" id="apply">Apply Now</a>-->
                            <a class="button secondary big applyPopupForm text-center" href="javascript:;">Apply Now</a>
                            <!-- <button class="button secondary light big">Subscribe for updates</button> -->
                        </div>


                        </div>
                        <div class="apply-box side-fold-box green flex align-vert left stretch gap-15">
                        <!-- <p class="text-secondary">Already Applied?</p> -->
                        <div class="newsletter flex align-vert left stretch gap-4" style="padding-top: 10px;">
                            <h3>Weekly Newsletter</h3>
                            <p>We will keep you updated when the new jobs arrive.</p>
                            <p><a href="javascript:;" class="button secondary showForm">Subscribe Now</a></p>
                        </div>
                        <div class="newsletter-form flex align-vert left stretch" style="display:none;">
                            <!-- <input type="text" placeholder="Enter your email"> -->
                            <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
                            <script>
                            hbspt.forms.create({
                                region: "na1",
                                portalId: "8225673",
                                formId: "917fd8e2-b5e4-4f7b-909f-5e843dafbc8a"
                            });
                            </script>
                            <small>We care about your data in our <a href="https://www.arthurlawrence.net/privacy-policy.php" style="text-decoration: underline;">Privacy Policy</a></small>
                        </div>
                        <!-- <button class="button secondary big">Subscribe</button> -->


                    </div>
                    <div class="side-fold-box flex align-vert left stretch gap-15">
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

    <?php include '../../includes/cta.php' ?>

    <div id="apply-form"></div>
    <section class="contact-us  padding-y-50-lg apply-form">
        <div class="container align-hor edge center">           
            <div class="col-12 contact-form align-vert middle center">
                <form action="<?php echo $dir; ?>/email.php" method="post" class="flex align-vert top stretch gap-15">
                    <div class="form-box flex align-hor edge middle gap-15">
                        <div class="form-field">
                            <label for="jobTitle">Job Title<span class="text-primary">*</span></label>
                            <input type="text" readonly name="jobTitle" id="jobTitle" placeholder="Type here">
                        </div>
                        <div class="form-field">
                            <label for="fullName">Full Name<span class="text-primary">*</span></label>
                            <input type="text" name="fullName" placeholder="Type here">
                        </div>
                    </div>
                    <div class="form-box flex align-hor edge middle gap-15">
                        <div class="form-field">
                            <label for="email">Email<span class="text-primary">*</span></label>
                            <input type="email" name="email" placeholder="Type here">
                        </div>
                        <div class="form-field">
                            <label for="phone">Phone<span class="text-primary">*</span></label>
                            <input type="text" name="phone" placeholder="Type here">
                        </div>
                    </div>
                    <div class="form-box flex align-hor edge middle gap-15">
                        <div class="form-field">
                            <label for="location">Location<span class="text-primary">*</span></label>
                            <input type="text" name="location" placeholder="Type here">
                        </div>
                        <div class="form-field">
                            <label for="citizenship">Citizenship<span class="text-primary">*</span></label>
                            <select name="citizenship" name="citizenship">
                                <option value="H1B">H1B</option>
                            </select>
                        </div>
                    </div>
                    <div class="flex align-hor edge middle gap-15">
                        <div class="form-field choose-file">
                            <label for="resume">Upload your resume<span class="text-primary">*</span></label>
                            <input type="file" name="resume" id="resume" placeholder="Type here">
                        </div>
                    </div>
                    <div class="flex align-hor edge middle gap-15">
                        <button class="button secondary big form-btn" name="submit" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </section>

<script>
    $(document).ready(function(){
        $('#myTable').DataTable();

        $('#apply').on('click', function(event){

            var jobTitle = $(this).data('title');

            if(this.hash !== ""){
                event.preventDefault();
                var hash = this.hash;

                $('html, body').animate({
                    scrollTop:
                    $(hash).offset().top
                }, 800, function(){
                    window.location.hash = hash;
                });
            }
            $('.apply-form').show('slow');

            $('#jobTitle').val(jobTitle);
            console.log(jobTitle);
        });
        
        //var currentURL = window.location.href;
        //console.log(currentURL)
        

        $('.showForm').on('click',function(){
            $(this).hide();
            $(this).parents('.newsletter').siblings('.newsletter-form').show();
        });
    });
    
    
    
    
      // upload file size and validation
     var _validFilejpeg = [".jpeg", ".jpg", ".docx", ".pdf"];

    function validateForSize(oInput, minSize, maxSizejpeg) {
        //if there is a need of specifying any other type, just add that particular type in var  _validFilejpeg
        if (oInput.type == "file") {
            var sFileName = oInput.value;
            if (sFileName.length > 0) {
                var blnValid = false;
                for (var j = 0; j < _validFilejpeg.length; j++) {
                    var sCurExtension = _validFilejpeg[j];
                    if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length)
                        .toLowerCase() == sCurExtension.toLowerCase()) {
                        blnValid = true;
                        break;
                    }
                }

                if (!blnValid) {
                    alert("Sorry, this file is invalid, allowed extension is: " + _validFilejpeg.join(", "));
                    oInput.value = "";
                    return false;
                }
            }
        }

        fileSizeValidatejpeg(oInput, minSize, maxSizejpeg);
    }

    function fileSizeValidatejpeg(fdata, minSize, maxSizejpeg) {
        if (fdata.files && fdata.files[0]) {
            var fsize = fdata.files[0].size /1024; //The files property of an input element returns a FileList. fdata is an input element,fdata.files[0] returns a File object at the index 0.
            //alert(fsize)
            if (fsize > maxSizejpeg || fsize < minSize) {
                alert('This file size is: ' + fsize.toFixed(2) +
                    "KB. Files should be in " + (minSize) + " to " + (maxSizejpeg) + " KB ");
                fdata.value = ""; //so that the file name is not displayed on the side of the choose file button
                return false;
            } else {
                console.log("");
            }
        }
    }
    
    // upload file size and validation
    
    
</script>

<?php include '../../includes/footer.php' ?>