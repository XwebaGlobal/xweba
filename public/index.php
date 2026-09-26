<?php
/**
 * XwebA Fallback Production Router for Hostinger & cPanel
 */

$uri = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH);
$docRoot = __DIR__;

$targetFile = null;
if ($uri !== '/' && file_exists($docRoot . $uri) && !is_dir($docRoot . $uri)) {
    $targetFile = $docRoot . $uri;
}

if ($targetFile) {
    $ext = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));
    $mimeTypes = [
        'js'    => 'application/javascript; charset=UTF-8',
        'mjs'   => 'application/javascript; charset=UTF-8',
        'css'   => 'text/css; charset=UTF-8',
        'json'  => 'application/json',
        'svg'   => 'image/svg+xml',
        'webp'  => 'image/webp',
        'png'   => 'image/png',
        'jpg'   => 'image/jpeg',
        'jpeg'  => 'image/jpeg',
        'gif'   => 'image/gif',
        'ico'   => 'image/x-icon',
        'woff2' => 'font/woff2',
        'woff'  => 'font/woff',
        'ttf'   => 'font/ttf',
    ];

    if (isset($mimeTypes[$ext])) {
        header('Content-Type: ' . $mimeTypes[$ext]);
    }

    if (in_array($ext, ['js', 'css', 'webp', 'jpg', 'png', 'svg', 'woff2'])) {
        header('Cache-Control: public, max-age=31536000, immutable');
    }

    readfile($targetFile);
    exit;
}

if (file_exists($docRoot . '/index.html')) {
    header('Content-Type: text/html; charset=UTF-8');
    header('Cache-Control: no-cache, no-store, must-revalidate');
    readfile($docRoot . '/index.html');
    exit;
}

http_response_code(404);
echo 'Production index.html not found.';
