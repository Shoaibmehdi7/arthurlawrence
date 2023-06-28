<?php include '../../includes/header.php' ?>
<?php
require '../../connection.php';

if(isset($_GET['id'])){
    $id = $_GET['id'];
    $sql = "SELECT *  FROM job_listing LEFT JOIN job_categories ON job_listing.fk_category = job_categories.cat_id WHERE job_listing.id=$id";
    $result = mysqli_query($conn, $sql);
    $jobDetails = array();

    if (mysqli_num_rows($result) > 0) {
        $jobDetails = mysqli_fetch_assoc($result);
    } else {
        $jobDetails = [];
    }
    // print_r($jobDetails['description']);
    // die();
}



?>
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
            <div class="flex flex-2 align-vert left stretch gap-20">
                <div class="detail-page flex align-vert top left gap-20">
                    <div class="col-12 flex align-hor edge middle gap-5">
                        <div class="detail-page-header flex align-vert left middle gap-5">
                            <a href="<?php echo $dir; ?>/jobs/" class="back-link"><i class="fa fa-chevron-left"></i> Back to open positions</a>
                            <h2><?php echo $jobDetails['title']; ?></h2>
                            <small class="job-code">Job Code: <?php echo $jobDetails['job_code']; ?></small>
                        </div>
                        <div class="flex align-hor right middle">
                            <button class="share-btn"><img src="<?php echo $dir; ?>/assets/images/share.svg" alt=""></button>
                        </div>
                    </div>
                    <div class="job-tags flex align-hor gap-5">
                        <span class="red"><i class="fa fa-map-marker"></i> <?php echo $jobDetails['location']; ?></span>
                        <span class="purple"><i class="fa fa-code"></i> Development</span>
                        <span class="blue"><i class="fa fa-calendar-alt"></i> <?php echo $jobDetails['type']; ?></span>
                        <span class="green"><i class="fa fa-dollar-sign"></i> Open All Inclusive</span>
                    </div>
                </div>
                <div class="job-content">
                    <h4>Job Brief</h4>
                    <?php echo html_entity_decode($jobDetails['description']); ?>
                    <br>
                    <h4>Job Requirements</h4>
                    <?php echo html_entity_decode($jobDetails['requirements']); ?>
                    <h4>Contact Information</h4>
                    <?php echo html_entity_decode($jobDetails['contact_info']); ?>
                    <p class="note">**TN visa sponsorship available for successful candidates.</p>
                    <br>
                    <h4>Skills required</h4>
                    <p><?php echo $jobDetails['skills']; ?></p>
                    <br>
                    <h4>Benefits</h4>
                </div>
                <div class="benefits flex align-hor left middle gap-40">
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
                </div>
                <h4>About Arthur Lawrence</h4>
                <p>Arthur Lawrence is a management and technology consulting firm providing enterprise-wide business transformation and business applications implementation services. Our in-depth technical knowledge and broad experience of working with world-class companies enables organizations to leverage our capabilities in developing winning strategies and cost-effective solutions. We are an UN Women Empowerment Principal Signatory and are certified from National Minority Supplier Development Council.</p>
                <h4 class="margin-top-30">Our Accomplishments</h4>
                <div class="job-accomplishments flex align-hor left middle gap-20">
                    <img src="<?php echo $dir; ?>/assets/images/accomplishments/accomplishment1.png" alt="">
                    <img src="<?php echo $dir; ?>/assets/images/accomplishments/accomplishment2.png" alt="">
                    <img src="<?php echo $dir; ?>/assets/images/accomplishments/accomplishment3.png" alt="">
                    <img src="<?php echo $dir; ?>/assets/images/accomplishments/accomplishment4.png" alt="">
                    <img src="<?php echo $dir; ?>/assets/images/accomplishments/accomplishment5.png" alt="">
                    <img src="<?php echo $dir; ?>/assets/images/accomplishments/accomplishment6.png" alt="">
                </div>
            </div>
            <div class="flex flex-1 align-hor right middle">
                <div class="side-fold flex align-vert left stretch gap-20">
                    <div class="apply-box side-fold-box green flex align-vert left stretch gap-15">
                        <div class="newsletter flex align-vert left stretch gap-4">
                            <h3>Sounds like a match?</h3>
                        </div>
                        <div class="flex align-vert left stretch gap-10">
                            <a class="button secondary big" href="#apply-form" data-title="<?php echo $jobDetails['title']; ?>" id="apply">Apply Now</a>
                            <button class="button secondary light big">Subscribe for updates</button>
                        </div>
                        <p class="text-secondary">Already Applied?</p>
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
    });
</script>

<?php include '../../includes/footer.php' ?>