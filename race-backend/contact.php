<?php
    require('config.php');

    if(isset($_POST['name'])){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];
        $num = $_POST['num'];
    
        $query="insert into contact values ('','".$name."','".$num."','".$email."','".$subject."','".$message."','')";
        $result=mysqli_query($conn,$query);

        $msg = "Hi,\n\n Mr.".$name." is wanting to contact you via contact us form in your website. Please consider this request and revert to him asap. \n\n The Information Filled by him can be found below\n Name : ".$name."\n Email : ".$email."\n Query Subject : ".$subject."\n Query Message : ".$message;
        $msg = $msg."\n\nPlease Revert to him ASAP.\nThank You..\n\nRegards,\nDEV Team,\nRaceDS.";
        $msg = wordwrap($msg,70);

        mail("shishirharikripa@gmail.com",$fname." is trying to Contact You via your website",$msg);
        
        header("Location: https://raceds.in");
    }
    
?>