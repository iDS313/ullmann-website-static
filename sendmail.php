<?php
$to="ati@ullmannlab.com";
$subject=$_POST['subject'];
$from=$_POST['email'];
$txt=$_POST['message'];
$headers = $from . "\r\n" ;
mail($to,$subject,$txt,$headers);
header('Location: contactus.html');
?>