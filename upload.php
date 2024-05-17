<?php
$uploadDir = 'uploads/';

// Check if the form was submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Check if there was no upload error
    if ($_FILES['videoFile']['error'] === UPLOAD_ERR_OK) {
        $tempName = $_FILES['videoFile']['tmp_name'];
        $fileName = basename($_FILES['videoFile']['name']);
        $uploadPath = $uploadDir . $fileName;

        // Move the uploaded file to the uploads directory
        if (move_uploaded_file($tempName, $uploadPath)) {
            echo 'File uploaded successfully.';
        } else {
            echo 'Error uploading file.';
        }
    } else {
        echo 'Error: ' . $_FILES['videoFile']['error'];
    }
}
?>
