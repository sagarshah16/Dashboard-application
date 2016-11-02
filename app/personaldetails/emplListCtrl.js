(function(){
     "use strict";
    angular
        .module("employeeManagement")
        .controller("EmployeeListController",["employeeResource",EmployeeListController]);
    function EmployeeListController(employeeResource){
        var vm=this;

        employeeResource.listUsers().then(function(response){

         vm.employees = JSON.parse(JSON.stringify(response.data));

        });
        vm.gridOptions = {
            data: 'vm.employees',
            columnDefs: [{
                rowHeight: 30,
                name: 'Number',
                cellTemplate: '<a ui-sref="emplDetail({emplId: row.entity.Id})"> {{rowRenderIndex + 1}}</a>'
            }, {
                name: 'First Name',
                field: 'First_Name'
            }, {
                name: 'Last Name',
                field: 'Last_Name'
            },{
                name: 'Email',
                field: 'Email'
            }, {
                name: 'Hire Date',
                field: 'Hire_Date'
            },{
                name: 'Action ',
                cellTemplate: '<a class="btn btn-primary btn-sm" ui-sref="emplEdit.personal({emplId: row.entity.Id})"> Edit </a>' +
                '  <button ng-click="grid.appScope.vm.delete(row.entity.Id,  rowRenderIndex)" type="button" class="btn btn-danger btn-sm">Delete</button>'

            }
            ]
        };
        vm.delete = function(id, index){
             employeeResource.deleteUser(id).then(function(response){
                 vm.employees.splice(index, 1);
                 toastr.success("Record deleted Successfully");
            });
        }



        }


}());