<?php
    require('config.php');

        $fname = $_POST['fname'];
        $lname = $_POST['lname'];
        $mail_id = $_POST['mail_id'];
        $num = $_POST['num'];
        $type = $_POST['type'];
    
    
        $query="insert into enroll values ('','".$fname."','".$lname."','".$mail_id."','".$num."','".$type."','')";
        $result=mysqli_query($conn,$query);
        if($result){
            
        }
        header("Location: https://raceds.in");
    
    
?>