<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Retrieve the value sent from JavaScript
    $checkboxValue = $_POST["value"];

    // Create a database connection
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "pdsa";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Update the status in the database
    $sql = "UPDATE thirdpage SET status = 1 WHERE value = '$checkboxValue'";

    if ($conn->query($sql) === TRUE) {
        echo "Status updated successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>