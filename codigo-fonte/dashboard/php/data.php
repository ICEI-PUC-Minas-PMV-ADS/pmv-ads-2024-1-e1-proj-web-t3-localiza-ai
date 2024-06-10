<?php
include 'config.php';

// Inicializar resposta como um array
$response = array();
$response['visualizacoes_empresa'] = 0;
$response['novos_clientes'] = 0;
$response['orcamentos_aprovados'] = 0;
$response['equipamentos_reparo'] = 0;
$response['visualizacoes_mensais'] = array();
$response['clicks_mensais'] = array();
$response['referencias'] = array();
$response['mensagens'] = array();

// Buscar dados de visualizações e cliques por mês
for ($i = 1; $i <= 12; $i++) {
    $mes = str_pad($i, 2, '0', STR_PAD_LEFT);
    $sql_visualizacoes = "SELECT COUNT(*) as total FROM visualizacoes WHERE MONTH(data) = '$mes'";
    $sql_clicks = "SELECT COUNT(*) as total FROM clicks WHERE MONTH(data) = '$mes'";
    
    $result_visualizacoes = $conn->query($sql_visualizacoes);
    $result_clicks = $conn->query($sql_clicks);

    $visualizacoes = $result_visualizacoes->fetch_assoc()['total'];
    $clicks = $result_clicks->fetch_assoc()['total'];

    array_push($response['visualizacoes_mensais'], $visualizacoes);
    array_push($response['clicks_mensais'], $clicks);
}

// Buscar outras informações
$sql_visualizacoes_empresa = "SELECT COUNT(*) as total FROM visualizacoes";
$sql_novos_clientes = "SELECT COUNT(*) as total FROM clientes WHERE data_cadastro > DATE_SUB(NOW(), INTERVAL 1 MONTH)";
$sql_orcamentos_aprovados = "SELECT COUNT(*) as total FROM orcamentos WHERE status = 'aprovado'";
$sql_equipamentos_reparo = "SELECT COUNT(*) as total FROM reparos WHERE status = 'em andamento'";

$response['visualizacoes_empresa'] = $conn->query($sql_visualizacoes_empresa)->fetch_assoc()['total'];
$response['novos_clientes'] = $conn->query($sql_novos_clientes)->fetch_assoc()['total'];
$response['orcamentos_aprovados'] = $conn->query($sql_orcamentos_aprovados)->fetch_assoc()['total'];
$response['equipamentos_reparo'] = $conn->query($sql_equipamentos_reparo)->fetch_assoc()['total'];

// Buscar referências
$sql_referencias = "SELECT local, SUM(visualizacoes) AS total_visualizacoes, SUM(clicks) AS total_clicks, (SUM(clicks) / SUM(visualizacoes)) * 100 AS taxa_conversao FROM referencias GROUP BY local";
$result_referencias = $conn->query($sql_referencias);

while ($row = $result_referencias->fetch_assoc()) {
    array_push($response['referencias'], array(
        'local' => $row['local'],
        'total_visualizacoes' => $row['total_visualizacoes'],
        'total_clicks' => $row['total_clicks'],
        'taxa_conversao' => $row['taxa_conversao']
    ));
}

// Buscar mensagens
$sql_mensagens = "SELECT usuario, texto, data, status FROM mensagens ORDER BY data DESC LIMIT 10";
$result_mensagens = $conn->query($sql_mensagens);

while ($row = $result_mensagens->fetch_assoc()) {
    array_push($response['mensagens'], $row);
}

echo json_encode($response);

$conn->close();
?>
