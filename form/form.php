<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    // Укажите адрес, на который нужно отправить сообщение
    $to = "fkhamroev@icloud.com";
    
    // Заголовки письма
    $subject = "Сообщение с формы на вашем сайте";
    $headers = "From: $email";
    
    // Отправка письма
    $sent = mail($to, $subject, $message, $headers);
    
    if ($sent) {
        echo "succes";
    }
    else {
        echo "Error";
    }
}

