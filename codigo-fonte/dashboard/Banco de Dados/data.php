<?php
include 'config.php';

// Inicializar resposta como um array
$response = array();

// Consultas para buscar os dados do banco de dados

// Exemplo de consulta para visualizações da empresa
$sql = "SELECT COUNT(*) as visualizacoes FROM visualizacoes_empresa";
$result = $conn->query($sql);
$row = $result->fetch_assoc();
$response['visualizacoes_empresa'] = $row['visualizacoes'];

// Exemplo de consulta para novos clientes
$sql = "SELECT COUNT(*) as novos_clientes FROM clientes WHERE created_at > NOW() - INTERVAL 1 DAY";
$result = $conn->query($sql);
$row = $result->fetch_assoc();
$response['novos_clientes'] = $row['novos_clientes'];

// Exemplo de consulta para orçamentos aprovados
$sql = "SELECT COUNT(*) as orcamentos_aprovados FROM orcamentos WHERE status = 'aprovado'";
$result = $conn->query($sql);
$row = $result->fetch_assoc();
$response['orcamentos_aprovados'] = $row['orcamentos_aprovados'];

// Exemplo de consulta para equipamentos em reparo
$sql = "SELECT COUNT(*) as equipamentos_reparo FROM equipamentos WHERE status = 'em reparo'";
$result = $conn->query($sql);
$row = $result->fetch_assoc();
$response['equipamentos_reparo'] = $row['equipamentos_reparo'];

// Dados do gráfico de estatísticas
// Você precisa ajustar essa consulta para pegar os dados de estatísticas reais do seu banco de dados
// Aqui é um exemplo estático
$response['estatisticas'] = array(
    'labels' => ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    'series' => [
        [5, 10, 15, 20, 25, 30] // Substitua por dados reais
    ]
);

// Enviar a resposta como JSON
echo json_encode($response);

$conn->close();
?>
