<?php
include 'config.php';

$sender = $_POST['sender'];
$text = $_POST['text'];
$time = date('H:i:s');

$sql = "INSERT INTO messages (sender, text, time) VALUES ('$sender', '$text', '$time')";

if ($conn->query($sql) === TRUE) {
    echo "Mensagem enviada com sucesso!";
} else {
    echo "Erro ao enviar mensagem: " . $conn->error;
}

$conn->close();
?>
