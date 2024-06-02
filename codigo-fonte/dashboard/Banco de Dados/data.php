<?php
include 'config.php';

// Inicializar resposta como um array
$response = array();

// Consultas para buscar os dados do banco de dados

// Consulta para visualizações, cliques e taxas de conversão
$sql = "SELECT local, 
               SUM(visualizacoes) AS total_visualizacoes, 
               SUM(clicks) AS total_clicks, 
               (SUM(clicks) / SUM(visualizacoes)) * 100 AS taxa_conversao 
        FROM visualizacoes 
        GROUP BY local";
$result = $conn->query($sql);

$referencias = array();

while ($row = $result->fetch_assoc()) {
    $referencias[] = array(
        'local' => $row['local'],
        'total_visualizacoes' => $row['total_visualizacoes'],
        'total_clicks' => $row['total_clicks'],
        'taxa_conversao' => $row['taxa_conversao']
    );
}

$response['referencias'] = $referencias;

// Enviar a resposta como JSON
echo json_encode($response);

$conn->close();
?>
