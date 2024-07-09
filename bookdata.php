<?php
if(isset($_POST['insert']))
{
    $hostname = "localhost";
    $username = "root";
    $password = "";
    $databaseName = "pdsa";

    $fnoseats = $_POST['nSeats'];
    $fseatnos = $_POST['seatNO'];
    $ftot = $_POST['sTot'];
 

    $connect = mysqli_connect($hostname, $username, $password, $databaseName);

    if (!$connect) {
        die("Connection failed: " . mysqli_connect_error());
      }

      $qdelete = "TRUNCATE TABLE secondpage;";

      mysqli_query($connect, $qdelete);

    $query = "INSERT INTO secondpage(id, noseats, seatnumbers, total) VALUES ('1','$fnoseats','$fseatnos','$ftot')";

    $result = mysqli_query($connect, $query);

    /*if($result) {
        echo "data inserted";

    }else {
        echo "data not inserted";
    }*/

    mysqli_close($connect);

    header("Location: summary.php");
    die();
} 
?>