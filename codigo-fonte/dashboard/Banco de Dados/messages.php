<?php
include 'config.php';

$response = array();
$response['users'] = array();
$response['messages'] = array();

// Buscar usuários
$sql = "SELECT id, name, unread FROM users";
$result = $conn->query($sql);

while ($row = $result->fetch_assoc()) {
    $response['users'][] = array(
        'id' => $row['id'],
        'name' => $row['name'],
        'unread' => $row['unread']
    );
}

// Buscar mensagens
$sql = "SELECT sender, text, time FROM messages";
$result = $conn->query($sql);

while ($row = $result->fetch_assoc()) {
    $response['messages'][] = array(
        'sender' => $row['sender'],
        'text' => $row['text'],
        'time' => $row['time']
    );
}

echo json_encode($response);

$conn->close();
?>
