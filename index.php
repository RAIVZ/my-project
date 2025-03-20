<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
ob_start(); // Включаем буферизацию вывода

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars($_POST["name"] ?? '');
    $age = (int) ($_POST["age"] ?? 0);
    $fon = (int) ($_POST["fon"] ?? 0);

    if (!empty($name) && $age > 0) {
        $data = "$name, номер телефона $fon, $age лет\n";
        file_put_contents("data.txt", $data, FILE_APPEND);
        ob_clean();
        header("Location: thankyou.html");
        exit;
    } else {
        echo "Ошибка: Введите корректные данные!";
    }
} else {
    echo "Ошибка: Данные не отправлены!";
}

ob_end_flush(); // Завершаем буферизацию
?>
</body>
</html>