<?php
require_once("../database/orm.php");
class User extends DB
{

    private $email;

    function __construct() {
        $tableName = 'Employee';
        parent::__construct($tableName);
    }

    public function addUser($data){
        $this->email = $data['Email'];
        if($this->isExists('Email',$this->email))
        {
            $result['status'] = "error";

        }
        else
        {
            $this->create($data);
            $result['status'] = "success";

        }
        return json_encode($result);
  }

    public function listAllUsers() {
        return json_encode($this->selectAll());
    }
 
}