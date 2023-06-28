<?php
    $to = "ghufrandeveloper82@gmail.com";
    $subject = "Test Subject Here.";
    $message = "Lorem ipsum dolor sit amet.";
    // $from = "ghufrannadeem82@gmail.com";
    $headers = [ "MIMI-Version: 1.0",
                 "Content-type: text/plain; charset=utf-8",
                 "From: ghufrannadeem82@gmail.com"
                ];

    $headers = implode("\r\n", $headers);

    if(mail($to,$subject,$message,$headers)){
        echo "Mail Send";
    }
    else{
        echo "Not Sed Email";
    }

?>