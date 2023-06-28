
<footer class="padding-y-50 background-gray-4">
    <div class="container footer flex align-hor">
        <div class="col-4 flex align-vert left top gap-30">
            <img class="footer-logo" src="<?php echo $dir; ?>/assets/images/footer-logo.png" alt="">
            <?php /* ?>
            <div class="subscription flex align-vert left edge gap-10">
                <p>Subscribe to stay updated with our latest thinking</p>
                <div class="sub-box flex align-hor left edge gap-10">
                    <input type="text" placeholder="Email Address">
                    <button class="button red big">Subscribe</button>
                </div>
            </div>
            <?php */ ?>
        </div>
        <div class="col-3">
            <div class="footer-links flex align-vert left">
                <h5 class="text-white semi-bold gap-10">Our Services</h5>
                <a href="https://jobs.arthurlawrence.net/Jobs/ERP_JobBoard.aspx">Find Jobs</a>
                <a href="https://arthurlawrence.net/talent.php">Find Talent</a>
                <a href="https://www.arthurlawrence.net/resource-process-outsourcing.php">Resource Process Outsourcing</a>
                <a href="https://arthurlawrence.net/digital-transformation.php">Digital</a>
                <a href="https://arthurlawrence.net/business-process-management.php">Business Process Management</a>
                <a href="https://www.arthurlawrence.net/business-automation-solutions.php">Business Automation Solutions</a>
            </div>
        </div>
        <div class="col-3">
            <div class="footer-links flex align-vert left">
                <h5 class="text-white semi-bold gap-10">Resources</h5>
                <a href="https://www.arthurlawrence.net/blog/">Insights</a>
                <a href="https://www.arthurlawrence.net/blog/category/press-release/">Press Releases</a>
            </div>
        </div>
        <div class="col-2">
            <div class="footer-links flex align-vert left">
                <!-- <h5 class="text-white semi-bold gap-10">Communities</h5> -->
                <a href="https://www.arthurlawrence.net/corporate-responsibility.php">Communities</a>
                <a href="https://www.arthurlawrence.net/corporate-responsibility.php">Corporate Responsibility</a>
                <a href="https://www.arthurlawrence.net/terms-of-use.php">Terms of Use</a>
                <a href="https://www.arthurlawrence.net/privacy-policy.php">Privacy Policy</a>
                <a href="https://www.arthurlawrence.net/contact.php">Contact Us</a>
            </div>
        </div>
        <!-- <div class="col-3">
            <div class="social-icons">
                <p class="semi-bold">Follow Us</p>
                <ul>
                    <li><a href=""><i class="fab fa-facebook-f"></i></a></li>
                    <li><a href=""><i class="fab fa-twitter"></i></a></li>
                    <li><a href=""><i class="fab fa-youtube"></i></a></li>
                    <li><a href=""><i class="fab fa-linkedin-in"></i></a></li>
                </ul>
            </div>
        </div> -->
    </div>
</footer>

<div class="lower-footer background-gray-4 padding-y-5">
    <div class="container">
        <div class="lower-footer full-width flex">
            <div class="col-4">
                <p>&copy; Copyright <script>new Date().getFullYear()>document.write(new Date().getFullYear());</script> Arthur Lawrence. All Rights Reserved.</p>
            </div>
            <div class="col-8">
                <div class="lower-links flex align-hor right middle gap-5">
                    <p class="semi-bold">Follow us</p>
                    
                     <a href="https://www.linkedin.com/company/arthur-lawrence/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                    <a href="https://www.facebook.com/arthurlawrenceworldwide" target="_blank"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://www.youtube.com/c/ArthurlawrenceNet" target="_blank"><i class="fab fa-youtube"></i></a>
                    <a href="https://www.instagram.com/arthur_lawrence/" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a href="https://twitter.com/arthurlawrence_" target="_blank"><i class="fab fa-twitter"></i></a>
                    

                    <!-- <a href="https://www.linkedin.com/company/arthur-lawrence/" target="_blank"><img src="<?php // echo $dir; ?>/assets/images/social-icons/linkedin.svg" alt=""></a>
                    <a href="https://www.facebook.com/arthurlawrenceworldwide" target="_blank"><img src="<?php // echo $dir; ?>/assets/images/social-icons/facebook.svg" alt=""></a>
                    <a href="https://twitter.com/arthurlawrence_" target="_blank"><img src="<?php // echo $dir; ?>/assets/images/social-icons/twitter.svg" alt=""></a>
                    <a href="https://www.instagram.com/arthur_lawrence/" target="_blank"><img src="<?php // echo $dir; ?>/assets/images/social-icons/instagram.svg" alt=""></a>
                    <a href="#" target="_blank"><i class="fab fa-youtube"></i></a> -->
                    
                    
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Page Content -- End -->
<script src="<?php echo $dir; ?>/assets/js/owl/owl.carousel.js"></script>
<script src="<?php echo $dir; ?>/assets/js/jquery.dataTables.min.js"></script>
<script src="<?php echo $dir; ?>/assets/js/jquery.matchHeight.js"></script>
<!-- <script src="<?php // echo $dir; ?>/assets/js/jquery.richtext.js"></script> -->

<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/6/tinymce.min.js" referrerpolicy="origin"></script>
<script src="https://cdn.jsdelivr.net/npm/@tinymce/tinymce-jquery@1/dist/tinymce-jquery.min.js"></script>

<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>

<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
<script src="<?php echo $dir; ?>/assets/js/script.js"></script>


<script src="<?php echo $dir; ?>/assets/js/intlTelInput.min.js"></script>


<script>

jQuery(function() {
		jQuery('.smoothClick, .smoothLink > a').click(function() {
		
		var dis = jQuery(this);

		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = jQuery(this.hash);
		  target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html, body').animate({
			  scrollTop: target.offset().top-80
			}, 1000);
			return false;
		  }
		}
	  });
	});
	
</script>


</body>
</html>