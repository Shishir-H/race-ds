<?php
    require('config.php');

        $fname = $_POST['fname'];
        $lname = $_POST['lname'];
        $mail_id = $_POST['mail_id'];
        $num = $_POST['num'];
        $type = $_POST['type'];
    
    
        $query="insert into enroll values ('','".$fname."','".$lname."','".$mail_id."','".$num."','".$type."','')";
        $result=mysqli_query($conn,$query);
        // if($result){
            
        // }

        $msg = "Hi,\n\n Mr.".$name." is wanting to enroll for a service via Enroll form in your website. Please consider this request and revert to him asap. \n\n The Information Filled by him can be found below\n First Name : ".$fname."\n Last Name : ".$lname."\n Email : ".$mail_id."\n Phone : ".$num."\n Type : ".$type.;
        $msg = $msg."\n\nPlease Revert to him ASAP.\nThank You..\n\nRegards,\nDEV Team,\nRaceDS.";
        $msg = wordwrap($msg,70);

        mail("shishirharikripa@gmail.com",$name." has enrollrd for "$type." via your website",$msg);

        header("Location: https://raceds.in");
    
    
?>