<?php

require_once '../model/user.php';
$user = new User();
$groupByColumn = 'YEAR(Hire_Date)';
print_r(json_encode($user->calculateEmplPerYear('Id',$groupByColumn)));
?>
