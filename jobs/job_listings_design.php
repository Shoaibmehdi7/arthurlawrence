<?php include 'includes/header.php' ?>


    <!-- Navbar -- Start -->
    <?php include 'includes/navigation.php'; ?>
    <!-- Navbar -- End -->
    <!-- Page Content -- Start -->





    <section class="padding-y-50-lg pt-150">
        <div class="container align-hor center">
            <div class="col-12 flex align-vert center middle gap-15">
                <h2>Jobs</h2>
            </div>
            <div class="col-12 flex align-vert center middle gap-15 listing-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Job Code</th>
                                <th>Title</th>
                                <th>Shift</th>
                                <th>Location</th>
                                <th>Resume Receive</th>
                                <th>Short Listed</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>BJU_12056_1</td>
                                <td>Software Developer</td>
                                <td>6+ Months</td>
                                <td>Remote</td>
                                <td>0</td>
                                <td>0</td>
                                <td>Edit</td>
                                <td>Delete</td>
                            </tr>
                            <tr>
                                <td>BJU_12056_1</td>
                                <td>Software Developer</td>
                                <td>6+ Months</td>
                                <td>Remote</td>
                                <td>0</td>
                                <td>0</td>
                                <td>Edit</td>
                                <td>Delete</td>
                            </tr>
                            <tr>
                                <td>BJU_12056_1</td>
                                <td>Software Developer</td>
                                <td>6+ Months</td>
                                <td>Remote</td>
                                <td>0</td>
                                <td>0</td>
                                <td>Edit</td>
                                <td>Delete</td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        </div>
    </section>


    <script>
        $(document).ready(function(){
            // $('#myTable').DataTable();
            $(".blog-content a").matchHeight();
        });
    </script>

<?php include 'includes/footer.php' ?>