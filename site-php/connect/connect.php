<?php 
    $host = "localhost";
    $user = "soeunpark1211";
    $pass = "Gksdid0910!";
    $db = "soeunpark1211";
    $connect = new mysqli($host, $user, $pass, $db);
    $connect -> set_charset("utf8");

    if( mysqli_connect_errno() ) {
        echo "Database Connect False";
    } else {
        //echo "Database Connect True";
    }
?>