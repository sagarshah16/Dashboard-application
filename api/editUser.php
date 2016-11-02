<?php
require_once("../model/user.php");
$user = new User();
$data = json_decode(file_get_contents('php://input'), true);
$id = intval($data['Id']);
 unset($data['Id']);
print_r(json_encode($user->update('Id', $id ,$data)));
?>