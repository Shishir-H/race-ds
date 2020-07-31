<?php
    // require('config.php');

    if(isset($_POST['request'])){
        $data=$_POST['request'];
        header('Content-Type: application/json');
        echo json_encode($data);
    }
    
?>