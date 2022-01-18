<?php 

$name = $_POST['name']; //создаем переменные и присваиваем им значение из наших инпутов с помощью name="name/phone/email"
$phone = $_POST['phone'];
$email = $_POST['email']; //переменная mail в ПХП не может быть создана, это слово зарезервировано

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'insane4l@mail.ru';                 // Наш логин
$mail->Password = 'Rchiraqx456';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('insane4l@mail.ru', 'Pulse');   // От кого письмо 
$mail->addAddress('insane4l@mail.ru');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML
//вставляем в шаблон письма наши переменные, которые берут данные заполненные пользователем (конкатенация в ПХП делается через точки)
$mail->Subject = 'Это тема сообщения';
$mail->Body    = '
	Пользователь оставил свои данные <br> 
	Имя: ' . $name . ' <br>
	Телефон: ' . $phone . '';
$mail->AltBody = 'Это альтернативный текст';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>