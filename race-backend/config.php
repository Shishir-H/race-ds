<?php

    $dbhost = "localhost";
    $dbuname = "u337983356_admin_race";
    $dbpass = "db@578raceDs"; 
    $dbname="u337983356_therace";


    // $conn=mysqli_connect($dbhost,$dbuname,$dbpass);
    // mysqli_select_db($conn,$dbname);

    // if(!$conn){
    //     echo($conn);
    //     die($conn ." - " .mysqli_error());
    // }
    
    $conn=mysqli_connect($dbhost,$dbuname,$dbpass);
    mysqli_select_db($conn,$dbname);

    if(!$conn){
        die("connection failled ".mysqli_error());
    }
?>