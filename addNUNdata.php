<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if(isset($_POST['insert'])) {
    $hostname = "localhost";
    $username = "root";
    $password = "";
    $databaseName = "pdsa";

    $fdate = $_POST['date'];
    $ftime = $_POST['time'];
    $fname = $_POST['cusName'];
    $fmail = $_POST['cusMail'];
    $ftel = $_POST['cusTel'];

    echo '<pre>';
    print_r($_POST);
    echo '</pre>';

    $connect = mysqli_connect($hostname, $username, $password, $databaseName);

    if (!$connect) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $qdelete = "TRUNCATE TABLE firstpage;";

    if (!mysqli_query($connect, $qdelete)) {
        die("Error deleting records: " . mysqli_error($connect));
    }

    $query = "INSERT INTO firstpage(id, movie, date, time, name, email, telephone) VALUES ('1', 'Nun II','$fdate','$ftime','$fname','$fmail','$ftel')";

    if (mysqli_query($connect, $query)) {
        // Redirect to booking.html if insert was successful
        header("Location: booking.html");
        exit();
    } else {
        die("Error inserting data: " . mysqli_error($connect));
    }

    mysqli_close($connect);
} else {
    echo "No data submitted.";
}
?>
