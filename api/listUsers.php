<?php
require_once '../model/user.php';
$user = new User();
print_r($user->listAllUsers());
?>