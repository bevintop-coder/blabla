<?php


$url=$_POST["url"];


$code=
substr(md5($url),0,6);


echo "Short URL : localhost/".$code;


?>