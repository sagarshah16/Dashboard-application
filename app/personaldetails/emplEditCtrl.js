(function(){
    "use strict";
    angular
        .module("employeeManagement")
        .controller("EmployeeEditController",["employee","$state","employeeResource",EmployeeEditController]);

    function EmployeeEditController(employee,$state, employeeResource){
        var vm=this;

        if(employee.data && employee.data.Id)
        {
            vm.employee= employee.data;
            vm.title= "Edit:" + vm.employee.First_Name;
            vm.employee.Hire_Date = new Date(employee.data.Hire_Date);
            vm.submit=function(data){
            employeeResource.editUser(data).then(function(response){
                if(response.data) {
                    toastr.success("Record Edited Successfully");
                    $state.go('emplList');
                }else{
                    toastr.error("Something Wrong");
                }
                });

            }
        }
        else
        {
            vm.title="New Employee";
            vm.submit=function(data){
            employeeResource.addUser(data).then(function(response){
                if(response.data.status == "success") {
                    toastr.success("Employee Added Successfully");
                    $state.go('emplList');
                }
                else if(response.data.status == "error"){
                    toastr.error("Employee already exsist.");
                }
                else{
                    toastr.error("Something Wrong");
                }
                });

            }
        }
        vm.open = function($event){
            $event.preventDefault();
            $event.stopPropagation();
            vm.opened = !vm.opened;
        };


        vm.cancel=function(){
            $state.go('emplList');
        }

        vm.clear = function() {
            vm.dt = null;
        };



        vm.dateOptions = {
            maxDate: new Date(),
            minDate: new Date(1900,1,1),
            startingDay: 1
        };

        vm.open = function() {
            vm.opened = true;
        };

        // $scope.altInputFormats = ['M!/d!/yyyy'];

        vm.popup = {
            opened: false
        };

    }
}());

