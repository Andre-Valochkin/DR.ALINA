<!-- подключаем PHP к нашелу сайту -->
<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru','phpmailer/language/');
$mail->IsHTML(true);

// от кого письмо
$mail->setFrom('info@fls.guru', 'настройщик')
// кому отправить
$mail->addAddress('code@fls.guru');
// тема письма
$mail->Subject = 'тема письма';

//выбор руки
$hand = 'Правая';
if($_POST['hand'] == 'left'){
    $hand = 'Левая';
}

// тело письма
$body='<h1>Встречайте наше письмо!</h1>';

if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
}

if(trim(!empty($_POST['tel']))){
    $body.='<p><strong>Телефон:</strong> '.$_POST['tel'].'</p>';
}

if(trim(!empty($_POST['email']))){
    $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
}

if(trim(!empty($_POST['hand']))){
    $body.='<p><strong>Рука:</strong> '.$hand.'</p>';
}

if(trim(!empty($_POST['age']))){
    $body.='<p><strong>Возраст:</strong> '.$_POST['age'].'</p>';
}

if(trim(!empty($_POST['message']))){
    $body.='<p><strong>Сообщение:</strong> '.$_POST['message'].'</p>';
}

// Прикрепить фаил
if (!empty($_FILES['image']['tmp_name'])){
    //путь загрузки файла
    $filePath = __DIR__ . "/files/" . $_FILES['image']['name'];
    //грузим фаил
    if(copy($_FILES['image']['tmp_name'], $filePath)){
        $fileAttach = $filePath;
        $body.='<p><strong>Фото в приложении</strong>';
        $mail->addAttachment($fileAttach);
    }
}

$mail->Body = $body;

//отправляем
if(!$mail->send()){
    $message = 'Ошибка';
}else{
    $message = 'Сообщение отправленно';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>