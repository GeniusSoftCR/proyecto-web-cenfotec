<?php
    $EmailFrom = "no-reply@aazcat.com";
    $EmailReply = "no-reply@aazcast.com";
    $Name = Trim(stripslashes($_POST['name']));
    $Email = Trim(stripslashes($_POST['mail']));
    $EmailTo = "geniusSoft.8@gmail.com";
    $Mensaje = Trim(stripslashes($_POST['mensaje']));
    $Subject = "Mensaje desde la web de genius";

    $headers = "From: " . strip_tags($EmailFrom) . "\r\n";
    $headers .= "Reply-To: ". strip_tags($EmailReply) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Validation
    $validationOK=true;
    if (!$validationOK) {
      print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
      exit;
    }

    // prepare email body text
    $Body = "<html><body>";
    $Body .= "<h1>Hola, Este mail es desde la web</h1>";
    $Body .= "<p>Hemos recibido un mensaje de:  ". $Name .",</p>";
    $Body .= "<p>con el mail: ". $Email ."</p>";
    $Body .= "\n";
    $Body .= "<p>Mensaje: ". $Mensaje ."</p>";
    $Body .= "\n";
    $Body .= "<br>";
    $Body .= "<br>";
    $Body .= "</body></html>";

    // send email
    $success = mail($EmailTo, $Subject, $Body, $headers);

    // redirect to success page

?>
