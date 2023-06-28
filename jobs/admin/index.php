<?php
if(isset($_POST['user'])){
    $user = $_POST['user'];
    $pwd = $_POST['pwd'];

    if($user == 'admin' && $pwd == '123'){
        setcookie('login', 'true', time() + (86400 * 30), "/"); // 86400 = 1 day
        $newURL = './list/';
        header('Location: '.$newURL);
    }
}
?><?php include '../includes/header.php' ?>

 

    <!-- Navbar -- Start -->
    <?php include '../includes/navigation.php'; ?>
    <!-- Navbar -- End -->
    <!-- Page Content -- Start -->





    <section class="contact-us padding-y-50-lg pt-150">
        <div class="container align-hor center">
            <div class="col-5 flex align-vert center middle gap-15 signin-bg">
                <h2>Sign In</h2>


                <form action="./" method="post">
                    <div class="form-box gap-15">
                        <div class="form-field">
                            <label for="user">Email or Username<span class="text-primary">*</span></label>
                            <input type="text" name="user" placeholder="Type here">
                        </div>
                        <div class="form-field">
                            <label for="pwd">Password<span class="text-primary">*</span></label>
                            <input type="password" name="pwd" placeholder="Type here">
                        </div>
                        <div class="form-field">
                            <input type="submit" value="submit">
                        </div>
                        <!--<div class="form-field">
                            <p>Don't have an account? <a href="javascript:;">Sign Up</a></p>
                        </div>-->
                    </div>
                </form>



            </div>
        </div>
    </section>


    <script>
        $(document).ready(function(){
            // $('#myTable').DataTable();
            // $(".blog-content a").matchHeight();
        });
    </script>

<?php include '../includes/footer.php' ?>