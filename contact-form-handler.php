<?php
    $name = $_Post['name'];
    $visitor_email = $_POST['email'];
    $subject = $_POST['subject'];

    $email_from = 'perezsergio1984@gmail.com'
    $email_subject = "New message";

    $email_body = "User name: $name.\n".
                    "User Email: $visitor_email.\n". 
                    "User message: $subject.\n".


    $to = "perezsergio1984@gmail.com";
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $visitor_email \r\n"

    mail($to, $email_subject, $email_body, $headers);

    header("Location: index.html")
?>
