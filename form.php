<?php
if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['mail'];
    $title = $_POST['title'];
    $message = $_POST['message'];

    $file = file_get_contents("mail.txt");

    $info = $file. "\n name: " .$name. "\n email: " .$email. "\n title:" .$title. "\n message: " .$message;
    $finalOutput = file_put_contents("mail.txt", $info);

    if($finalOutput) {
        header("Location: index.php");
    } else {
        echo "error";
    }
}
?>