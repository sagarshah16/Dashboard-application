<?php
require_once("../model/user.php");
$user = new User();
$data = json_decode(file_get_contents('php://input'), true);
print_r($user->addUser($data));
?>