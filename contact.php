<?php
/**
 * ElyDev Portfolio - PHP Mail Handler
 * Manejador de formulario de contacto para servidores con PHP y Apache/Nginx
 * 
 * Si tu hosting soporta PHP (cPanel, Hostinger, VPS, etc.), este archivo procesa
 * las solicitudes POST y envía el correo directamente.
 */

// Cabeceras CORS para permitir peticiones AJAX desde cualquier origen
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$receiving_email = 'eliezerterrero275@gmail.com';

// Obtener datos de POST (ya sea application/x-www-form-urlencoded o JSON)
$inputJSON = file_get_contents('php://input');
$data = json_decode($inputJSON, true);

$name = isset($_POST['name']) ? trim($_POST['name']) : (isset($data['name']) ? trim($data['name']) : '');
$email = isset($_POST['email']) ? trim($_POST['email']) : (isset($data['email']) ? trim($data['email']) : '');
$subject = isset($_POST['subject']) ? trim($_POST['subject']) : (isset($data['subject']) ? trim($data['subject']) : 'Nuevo mensaje desde ElyDev Portfolio');
$message = isset($_POST['message']) ? trim($_POST['message']) : (isset($data['message']) ? trim($data['message']) : '');

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode([
        'status' => 'error',
        'message' => 'Por favor completa todos los campos requeridos (nombre, correo y mensaje).'
    ]);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        'status' => 'error',
        'message' => 'El formato del correo electrónico no es válido.'
    ]);
    exit();
}

// Construcción del mensaje
$email_subject = "[Portafolio ElyDev] " . ($subject ?: 'Consulta de Proyecto');
$email_body = "Has recibido un nuevo mensaje desde tu Portafolio Web:\n\n";
$email_body .= "Nombre: " . $name . "\n";
$email_body .= "Correo: " . $email . "\n";
$email_body .= "Asunto: " . $subject . "\n";
$email_body .= "Fecha: " . date('Y-m-d H:i:s') . "\n\n";
$email_body .= "Mensaje:\n" . $message . "\n\n";
$email_body .= "--------------------------------------------------\n";
$email_body .= "Enviado desde ElyDev Portfolio 2026\n";

// Cabeceras de correo
$headers = "From: " . $name . " <" . $email . ">\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Envío con la función mail() nativa de PHP
$mail_sent = @mail($receiving_email, $email_subject, $email_body, $headers);

if ($mail_sent) {
    http_response_code(200);
    echo json_encode([
        'status' => 'success',
        'message' => '¡Tu mensaje ha sido enviado exitosamente a Eliezer Terrero!'
    ]);
} else {
    // Si la función mail() falla en el servidor, devolver aviso informativo
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => 'No se pudo enviar el correo mediante mail(). Verifica la configuración sendmail/SMTP de tu hosting.'
    ]);
}
?>
