(function(){
   "use strict";

    angular
        .module("employeeManagement")
        .controller("EmployeeDetailController",["employee","employeeResource",EmployeeDetailController]);
    function EmployeeDetailController(employee,employeeResource){

        var vm=this;
        vm.employee= employee.data;
        vm.title="Employee Details" + vm.employee.First_Name;


    }
}());
