<?php

require_once '../model/user.php';
$user = new User();
print_r(json_encode($user->find('Id', $_GET['Id'])));
?>
