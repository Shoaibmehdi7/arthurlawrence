<?php
$title = "Thank You";
include 'includes/header.php' ?>

    <!-- Navbar -- Start -->
    <?php include 'includes/navigation.php'; ?>
    <!-- Navbar -- End -->
    <!-- Page Content -- Start -->





    <section class="padding-y-50-lg pt-150">
        <div class="container align-hor center">
            <div class="col-12 flex align-vert center middle gap-15 listing-table">
                    <a href="<?php echo $dir; ?>/"><img src="<?php echo $dir; ?>/assets/images/logo.png" alt="" class="logo"></a>
            </div>

            <div class="col-12 flex align-vert center middle gap-15 thank-you-text">
                <h2>Thank You</h2>
                <p>Your request has been sent successfully.<br>We will be in touch with you soon.</p>
                <p>&nbsp;</p>
                <a href="/" class="button secondary big applyPopupForm text-center">Go to home ></a>
            </div>
        </div>
    </section>



<?php include 'includes/footer.php' ?>