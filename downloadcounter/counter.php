<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

$id = $_GET['id'] ?? $_POST['id'] ?? '';
$type = $_GET['type'] ?? $_POST['type'] ?? 'likes';
$action = $_GET['action'] ?? $_POST['action'] ?? 'get';

if (!preg_match('/^[a-zA-Z0-9_-]+$/', $id)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'ID inválido']);
    exit;
}

$allowedTypes = ['likes', 'downloads'];

if (!in_array($type, $allowedTypes, true)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Tipo inválido']);
    exit;
}

if (!in_array($action, ['get', 'increment'], true)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Acción inválida']);
    exit;
}

$dataDir = __DIR__ . '/data';

if (!is_dir($dataDir) && !mkdir($dataDir, 0755, true) && !is_dir($dataDir)) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'No se pudo crear la carpeta de datos']);
    exit;
}

$file = $dataDir . '/' . $type . '_' . $id . '.txt';

if (!file_exists($file)) {
    if (file_put_contents($file, '0', LOCK_EX) === false) {
        http_response_code(500);
        echo json_encode(['success' => false, 'error' => 'No se pudo crear el contador']);
        exit;
    }
}

if ($action === 'get') {
    $count = (int)trim((string)file_get_contents($file));

    echo json_encode([
        'success' => true,
        'id' => $id,
        'type' => $type,
        'count' => $count
    ]);
    exit;
}

$handle = fopen($file, 'c+');

if (!$handle) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'No se pudo abrir el contador']);
    exit;
}

if (!flock($handle, LOCK_EX)) {
    fclose($handle);
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'No se pudo bloquear el contador']);
    exit;
}

rewind($handle);
$count = (int)trim((string)stream_get_contents($handle));
$count++;

rewind($handle);
ftruncate($handle, 0);
fwrite($handle, (string)$count);
fflush($handle);
flock($handle, LOCK_UN);
fclose($handle);

echo json_encode([
    'success' => true,
    'id' => $id,
    'type' => $type,
    'count' => $count
]);
