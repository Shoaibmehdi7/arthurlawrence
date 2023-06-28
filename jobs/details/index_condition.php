<?php

require '../connection.php';

if(!isset($_GET['job_code'])){
    $newURL = '../';
    header('Location: '.$newURL);
}



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
include '../includes/header.php';


?>

<style>
    .side-fold .side-fold-box .newsletter p{text-align:left;}
    .button.secondary { border-color: #3a3a3a !important; background: #3a3a3a  !important; }
    .button.secondary:hover { border-color: #e8170b !important; background-color: #e8170b !important; color: white !important; }
    
    @media (max-width: 767px) {
        .flex.hide_mobile { display: none;
    }
</style>


<?php include '../includes/header.php' ?>

<a href="javascript:;" class="popupSideBtn applyPopupForm">Apply Now</a>
<div class="overlay"></div>

<!-------------POPUP Form for Apply Now-------------->

<section class="contact-us modal-contact popupApplyForm">
    <div class="align-hor edge center">
        <div class="col-12 contact-form modal-job-form align-vert middle center">
            <a href="javascript:;" class="close x-close">X</a> 
            <h3 class="bold text-black">Quick Apply</h3>
            <form method="POST" action="db_add_popup.php" enctype="multipart/form-data" class="flex align-vert top stretch gap-15">
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
                                <!--<img src="<?php echo $dir; ?>/assets/images/america-flag.png" alt="">-->
                                <!--<input type="tel" value="+1" readonly="" placeholder="+1">-->
                                <select id="country" name="country" require="required">
                                    <option value="">Select any one</option>
                                    <option value="Afghanistan">Afghanistan</option>
                                    <option value="Aland Islands">Aland Islands</option>
                                    <option value="Albania">Albania</option>
                                    <option value="Algeria">Algeria</option>
                                    <option value="American Samoa">American Samoa</option>
                                    <option value="Andorra">Andorra</option>
                                    <option value="Angola">Angola</option>
                                    <option value="Anguilla">Anguilla</option>
                                    <option value="Antarctica">Antarctica</option>
                                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                    <option value="Argentina">Argentina</option>
                                    <option value="Armenia">Armenia</option>
                                    <option value="Aruba">Aruba</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Austria">Austria</option>
                                    <option value="Azerbaijan">Azerbaijan</option>
                                    <option value="Bahamas">Bahamas</option>
                                    <option value="Bahrain">Bahrain</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Barbados">Barbados</option>
                                    <option value="Belarus">Belarus</option>
                                    <option value="Belgium">Belgium</option>
                                    <option value="Belize">Belize</option>
                                    <option value="Benin">Benin</option>
                                    <option value="Bermuda">Bermuda</option>
                                    <option value="Bhutan">Bhutan</option>
                                    <option value="Bolivia">Bolivia</option>
                                    <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                    <option value="Botswana">Botswana</option>
                                    <option value="Bouvet Island">Bouvet Island</option>
                                    <option value="Brazil">Brazil</option>
                                    <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                    <option value="Brunei Darussalam">Brunei Darussalam</option>
                                    <option value="Bulgaria">Bulgaria</option>
                                    <option value="Burkina Faso">Burkina Faso</option>
                                    <option value="Burundi">Burundi</option>
                                    <option value="Cambodia">Cambodia</option>
                                    <option value="Cameroon">Cameroon</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Cape Verde">Cape Verde</option>
                                    <option value="Cayman Islands">Cayman Islands</option>
                                    <option value="Central African Republic">Central African Republic</option>
                                    <option value="Chad">Chad</option>
                                    <option value="Chile">Chile</option>
                                    <option value="China">China</option>
                                    <option value="Christmas Island">Christmas Island</option>
                                    <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                    <option value="Colombia">Colombia</option>
                                    <option value="Comoros">Comoros</option>
                                    <option value="Congo">Congo</option>
                                    <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                                    <option value="Cook Islands">Cook Islands</option>
                                    <option value="Costa Rica">Costa Rica</option>
                                    <option value="Cote D'ivoire">Cote D'ivoire</option>
                                    <option value="Croatia">Croatia</option>
                                    <option value="Cuba">Cuba</option>
                                    <option value="Cyprus">Cyprus</option>
                                    <option value="Czech Republic">Czech Republic</option>
                                    <option value="Denmark">Denmark</option>
                                    <option value="Djibouti">Djibouti</option>
                                    <option value="Dominica">Dominica</option>
                                    <option value="Dominican Republic">Dominican Republic</option>
                                    <option value="Ecuador">Ecuador</option>
                                    <option value="Egypt">Egypt</option>
                                    <option value="El Salvador">El Salvador</option>
                                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                                    <option value="Eritrea">Eritrea</option>
                                    <option value="Estonia">Estonia</option>
                                    <option value="Ethiopia">Ethiopia</option>
                                    <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                                    <option value="Faroe Islands">Faroe Islands</option>
                                    <option value="Fiji">Fiji</option>
                                    <option value="Finland">Finland</option>
                                    <option value="France">France</option>
                                    <option value="French Guiana">French Guiana</option>
                                    <option value="French Polynesia">French Polynesia</option>
                                    <option value="French Southern Territories">French Southern Territories</option>
                                    <option value="Gabon">Gabon</option>
                                    <option value="Gambia">Gambia</option>
                                    <option value="Georgia">Georgia</option>
                                    <option value="Germany">Germany</option>
                                    <option value="Ghana">Ghana</option>
                                    <option value="Gibraltar">Gibraltar</option>
                                    <option value="Greece">Greece</option>
                                    <option value="Greenland">Greenland</option>
                                    <option value="Grenada">Grenada</option>
                                    <option value="Guadeloupe">Guadeloupe</option>
                                    <option value="Guam">Guam</option>
                                    <option value="Guatemala">Guatemala</option>
                                    <option value="Guernsey">Guernsey</option>
                                    <option value="Guinea">Guinea</option>
                                    <option value="Guinea-bissau">Guinea-bissau</option>
                                    <option value="Guyana">Guyana</option>
                                    <option value="Haiti">Haiti</option>
                                    <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                                    <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                                    <option value="Honduras">Honduras</option>
                                    <option value="Hong Kong">Hong Kong</option>
                                    <option value="Hungary">Hungary</option>
                                    <option value="Iceland">Iceland</option>
                                    <option value="India">India</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                                    <option value="Iraq">Iraq</option>
                                    <option value="Ireland">Ireland</option>
                                    <option value="Isle of Man">Isle of Man</option>
                                    <option value="Israel">Israel</option>
                                    <option value="Italy">Italy</option>
                                    <option value="Jamaica">Jamaica</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Jersey">Jersey</option>
                                    <option value="Jordan">Jordan</option>
                                    <option value="Kazakhstan">Kazakhstan</option>
                                    <option value="Kenya">Kenya</option>
                                    <option value="Kiribati">Kiribati</option>
                                    <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                                    <option value="Korea, Republic of">Korea, Republic of</option>
                                    <option value="Kuwait">Kuwait</option>
                                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                                    <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                                    <option value="Latvia">Latvia</option>
                                    <option value="Lebanon">Lebanon</option>
                                    <option value="Lesotho">Lesotho</option>
                                    <option value="Liberia">Liberia</option>
                                    <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                                    <option value="Liechtenstein">Liechtenstein</option>
                                    <option value="Lithuania">Lithuania</option>
                                    <option value="Luxembourg">Luxembourg</option>
                                    <option value="Macao">Macao</option>
                                    <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                                    <option value="Madagascar">Madagascar</option>
                                    <option value="Malawi">Malawi</option>
                                    <option value="Malaysia">Malaysia</option>
                                    <option value="Maldives">Maldives</option>
                                    <option value="Mali">Mali</option>
                                    <option value="Malta">Malta</option>
                                    <option value="Marshall Islands">Marshall Islands</option>
                                    <option value="Martinique">Martinique</option>
                                    <option value="Mauritania">Mauritania</option>
                                    <option value="Mauritius">Mauritius</option>
                                    <option value="Mayotte">Mayotte</option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                                    <option value="Moldova, Republic of">Moldova, Republic of</option>
                                    <option value="Monaco">Monaco</option>
                                    <option value="Mongolia">Mongolia</option>
                                    <option value="Montenegro">Montenegro</option>
                                    <option value="Montserrat">Montserrat</option>
                                    <option value="Morocco">Morocco</option>
                                    <option value="Mozambique">Mozambique</option>
                                    <option value="Myanmar">Myanmar</option>
                                    <option value="Namibia">Namibia</option>
                                    <option value="Nauru">Nauru</option>
                                    <option value="Nepal">Nepal</option>
                                    <option value="Netherlands">Netherlands</option>
                                    <option value="Netherlands Antilles">Netherlands Antilles</option>
                                    <option value="New Caledonia">New Caledonia</option>
                                    <option value="New Zealand">New Zealand</option>
                                    <option value="Nicaragua">Nicaragua</option>
                                    <option value="Niger">Niger</option>
                                    <option value="Nigeria">Nigeria</option>
                                    <option value="Niue">Niue</option>
                                    <option value="Norfolk Island">Norfolk Island</option>
                                    <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                    <option value="Norway">Norway</option>
                                    <option value="Oman">Oman</option>
                                    <option value="Pakistan">Pakistan</option>
                                    <option value="Palau">Palau</option>
                                    <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                                    <option value="Panama">Panama</option>
                                    <option value="Papua New Guinea">Papua New Guinea</option>
                                    <option value="Paraguay">Paraguay</option>
                                    <option value="Peru">Peru</option>
                                    <option value="Philippines">Philippines</option>
                                    <option value="Pitcairn">Pitcairn</option>
                                    <option value="Poland">Poland</option>
                                    <option value="Portugal">Portugal</option>
                                    <option value="Puerto Rico">Puerto Rico</option>
                                    <option value="Qatar">Qatar</option>
                                    <option value="Reunion">Reunion</option>
                                    <option value="Romania">Romania</option>
                                    <option value="Russian Federation">Russian Federation</option>
                                    <option value="Rwanda">Rwanda</option>
                                    <option value="Saint Helena">Saint Helena</option>
                                    <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                    <option value="Saint Lucia">Saint Lucia</option>
                                    <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                    <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                                    <option value="Samoa">Samoa</option>
                                    <option value="San Marino">San Marino</option>
                                    <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                    <option value="Saudi Arabia">Saudi Arabia</option>
                                    <option value="Senegal">Senegal</option>
                                    <option value="Serbia">Serbia</option>
                                    <option value="Seychelles">Seychelles</option>
                                    <option value="Sierra Leone">Sierra Leone</option>
                                    <option value="Singapore">Singapore</option>
                                    <option value="Slovakia">Slovakia</option>
                                    <option value="Slovenia">Slovenia</option>
                                    <option value="Solomon Islands">Solomon Islands</option>
                                    <option value="Somalia">Somalia</option>
                                    <option value="South Africa">South Africa</option>
                                    <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                                    <option value="Spain">Spain</option>
                                    <option value="Sri Lanka">Sri Lanka</option>
                                    <option value="Sudan">Sudan</option>
                                    <option value="Suriname">Suriname</option>
                                    <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                    <option value="Swaziland">Swaziland</option>
                                    <option value="Sweden">Sweden</option>
                                    <option value="Switzerland">Switzerland</option>
                                    <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                                    <option value="Taiwan">Taiwan</option>
                                    <option value="Tajikistan">Tajikistan</option>
                                    <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                                    <option value="Thailand">Thailand</option>
                                    <option value="Timor-leste">Timor-leste</option>
                                    <option value="Togo">Togo</option>
                                    <option value="Tokelau">Tokelau</option>
                                    <option value="Tonga">Tonga</option>
                                    <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                    <option value="Tunisia">Tunisia</option>
                                    <option value="Turkey">Turkey</option>
                                    <option value="Turkmenistan">Turkmenistan</option>
                                    <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                    <option value="Tuvalu">Tuvalu</option>
                                    <option value="Uganda">Uganda</option>
                                    <option value="Ukraine">Ukraine</option>
                                    <option value="United Arab Emirates">United Arab Emirates</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United States">United States</option>
                                    <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                    <option value="Uruguay">Uruguay</option>
                                    <option value="Uzbekistan">Uzbekistan</option>
                                    <option value="Vanuatu">Vanuatu</option>
                                    <option value="Venezuela">Venezuela</option>
                                    <option value="Viet Nam">Viet Nam</option>
                                    <option value="Virgin Islands, British">Virgin Islands, British</option>
                                    <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                                    <option value="Wallis and Futuna">Wallis and Futuna</option>
                                    <option value="Western Sahara">Western Sahara</option>
                                    <option value="Yemen">Yemen</option>
                                    <option value="Zambia">Zambia</option>
                                    <option value="Zimbabwe">Zimbabwe</option>
                                </select>
                            </div>
                            <input type="tel" required="" name="phone" id="yourphone2" placeholder="0201555123">
                        </div>
                    </div>
                </div>
                
                <div class="form-box flex align-vert edge middle gap-5 usa-option"></div>
                
                <!--<div class="form-box flex align-vert edge middle gap-5">-->
                <!--    <label for="phone">What is your work authorization in United States?<span class="text-primary">*</span></label>-->
                <!--    <div class="radio-tile-group">-->
                <!--        <div class="input-container">-->
                <!--            <input class="radio-button" type="radio" value="US Citizen/ Green Card Holder" name="authorization" required="">-->
                <!--            <div class="radio-tile">-->
                <!--                <label for="US Citizen/ Green Card Holder" class="radio-tile-label">US Citizen/ Green Card Holder</label>-->
                <!--            </div>-->
                <!--        </div>-->
                <!--        <div class="input-container">-->
                <!--            <input class="radio-button" type="radio" value="EAD-GC" name="authorization">-->
                <!--            <div class="radio-tile">-->
                <!--                <label for="EAD-GC" class="radio-tile-label">EAD-GC</label>-->
                <!--            </div>-->
                <!--        </div>-->
                <!--        <div class="input-container">-->
                <!--            <input class="radio-button" type="radio" value="EAD-H4" name="authorization">-->
                <!--            <div class="radio-tile">-->
                <!--                <label for="EAD-H4" class="radio-tile-label">EAD-H4</label>-->
                <!--            </div>-->
                <!--        </div>-->
                <!--        <div class="input-container">-->
                <!--            <input class="radio-button" type="radio" value="H1B" name="authorization">-->
                <!--            <div class="radio-tile">-->
                <!--                <label for="H1B" class="radio-tile-label">H1B</label>-->
                <!--            </div>-->
                <!--        </div>-->
                <!--        <div class="input-container">-->
                <!--            <input class="radio-button" type="radio" value="EAD-OPT " name="authorization">-->
                <!--            <div class="radio-tile">-->
                <!--                <label for="EAD-OPT" class="radio-tile-label">EAD-OPT </label>-->
                <!--            </div>-->
                <!--        </div>-->
                <!--        <div class="input-container">-->
                <!--            <input class="radio-button" type="radio" value="TN Permit [Canadian/ Mexico]" name="authorization">-->
                <!--            <div class="radio-tile">-->
                <!--                <label for="TN Permit [Canadian/ Mexico]" class="radio-tile-label">TN Permit [Canadian/ Mexico]</label>-->
                <!--            </div>-->
                <!--        </div>-->
                <!--        <div class="input-container">-->
                <!--            <input class="radio-button" type="radio" value="F-1 CPT [Full Time]" name="authorization">-->
                <!--            <div class="radio-tile">-->
                <!--                <label for="F-1 CPT [Full Time]" class="radio-tile-label">F-1 CPT [Full Time]</label>-->
                <!--            </div>-->
                <!--        </div>-->
                <!--        <div class="input-container">-->
                <!--            <input class="radio-button" type="radio" value="Require US work authorization" name="authorization">-->
                <!--            <div class="radio-tile">-->
                <!--                <label for="Require US work authorization" class="radio-tile-label">Require US work authorization</label>-->
                <!--            </div>-->
                <!--        </div>-->
                <!--        <div class="input-container">-->
                <!--            <input class="radio-button" type="radio" value="Other [E3/ L1/ L2/ F1-CPT Part Time]" name="authorization">-->
                <!--            <div class="radio-tile">-->
                <!--                <label for="Other [E3/ L1/ L2/ F1-CPT Part Time]" class="radio-tile-label">Other [E3/ L1/ L2/ F1-CPT Part Time]</label>-->
                <!--            </div>-->
                <!--        </div>-->
                <!--    </div>-->
                <!--</div>-->
                <!--<div class="form-box flex align-vert edge middle gap-5">-->
                <!--    <label for="phone">What is the Tax term you prefer to work on?<span class="text-primary">*</span></label>-->
                <!--    <div class="radio-tile-group">-->
                <!--        <div class="input-container">-->
                <!--            <input class="term-checkbox radio-button" type="checkbox" value="W2" name="taxterm">-->
                <!--            <div class="radio-tile">-->
                <!--                <label for="W2" class="radio-tile-label">W2</label>-->
                <!--            </div>-->
                <!--        </div>-->
                <!--        <div class="input-container">-->
                <!--            <input class="term-checkbox radio-button" type="checkbox" value="1099" name="taxterm">-->
                <!--            <div class="radio-tile">-->
                <!--                <label for="1099" class="radio-tile-label">1099</label>-->
                <!--            </div>-->
                <!--        </div>-->
                <!--        <div class="input-container">-->
                <!--            <input class="term-checkbox radio-button" type="checkbox" value="Corp to Corp" name="taxterm">-->
                <!--            <div class="radio-tile">-->
                <!--                <label for="Corp to Corp" class="radio-tile-label">Corp to Corp</label>-->
                <!--            </div>-->
                <!--        </div>-->
                <!--    </div>-->
                <!--</div>-->
                <div class="flex align-hor edge middle gap-15">
                    <div class="form-field choose-file">
                        <label for="resume">Upload your resume<span class="text-primary">*</span></label>
                        <input type="file" name="resume" id="resume" placeholder="Type here" required="" onchange="validateForSize(this,10,2000);">
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
    <?php include '../includes/navigation.php'; ?>
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
                    <div class="apply-box side-fold-box green flex align-vert left stretch gap-15 hide_mobile">
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

    <?php include '../includes/cta.php' ?>

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
    
    
    
     $(document).ready(function(){
         
             $('#country').change(function() {
            let appendInfo = `<div class="form-box flex align-vert edge middle gap-5 onlyusa">
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
                    <div class="form-box flex align-vert edge middle gap-5 onlyusa">
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
                    </div>`;
            if ($(this).val() === 'United States') {
                $('.usa-option').append(appendInfo);
            }
            else
            {
                $('.onlyusa').remove();
            }
        });
         
     });
    

</script>

<?php include '../includes/footer.php' ?>