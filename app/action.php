<?php
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$route = $_POST['user_route'];
$transport = $_POST['user_transport'];
$weight = $_POST['user_weight'];
$volume = $_POST['user_volume'];
$token = "1292449005:AAEq-Kea1Q8JfBOVEASVdxT3pRKELM8q2tc";
$chat_id = "-408364227";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email' => $email,
  'Маршрут перевозки: ' => $route,
  'Оптимальный транспорт: ' => $transport,
  'Общий объем м3: ' => $volume,
  'Общий вес: ' => $weight,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: ./page/thank_you_page.html');
} else {
  echo "Error";
}
?>