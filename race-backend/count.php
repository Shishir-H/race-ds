<?php
   
    $count_file=fopen('count.txt','w');
    session_start();
    $_SESSION['visitor'] = $_SESSION['visitor'] + 1;
    $count = $_SESSION['visitor'];
    fwrite($count_file,$count);

    header("Content-Type: application/json",1000);
    echo json_encode({"responseCode":200,"count":$count})

?>
