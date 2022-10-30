<?php
    //get data from form  

    $full_name = $_POST['full_name'];
    $phone_number = $_POST['phone_number'];
    $email= $_POST['email'];
    $message= $_POST['message'];

    $to = "aquib.jwd02@gmail.com";
    $subject = "Mail From Website";

    $txt ="Name = ". $full_name . "\r\n  Phone = ". $phone_number . "\r\n  Email = " . $email . "\r\n Message =" . $message;
    
    $headers = "From: noreply@yoursite.com";
    
    if($email!=NULL){
        mail($to,$subject,$txt,$headers);
    }
    //redirect
    header("Location:index.html");
?>