(function() {
    "use strict";
    var app = angular.module("employeeManagement",
        ["common.services",
            "ui.router",
            "ui.mask",
            "ui.bootstrap",
            'ngTouch',
            'ui.grid',
            'nvd3']);

    app.config(["$stateProvider",
                "$urlRouterProvider",
                    function($stateProvider,$urlRouterProvider){
                        $urlRouterProvider.otherwise("/");

                        $stateProvider
                            .state("home",{
                                url:"/",
                                templateUrl:"app/mainView.html"

                            })
                            .state("emplList",{
                                url:"/personaldetails",
                                templateUrl:"app/personaldetails/emplListView.html",
                                controller: "EmployeeListController as vm"
                            })
                            .state("emplEdit",{
                                abstract:true,
                                url:"/personaldetails/edit/:emplId",
                                templateUrl:"app/personaldetails/emplEditView.html",
                                controller: "EmployeeEditController as vm",
                                resolve:{
                                    employeeResource :"employeeResource",
                                    employee: function(employeeResource,$stateParams) {
                                        var emplId = $stateParams.emplId;
                                         return employeeResource.getUser(emplId);
                                    }
                                }

                            })
                            .state("emplEdit.personal",{
                                url:"/personal",
                                templateUrl:"app/personaldetails/emplEditPersonalView.html"
                            })

                            .state("emplDetail",{
                                url:"/personaldetails/:emplId",
                                templateUrl:"app/personaldetails/emplDetailsView.html",
                                controller: "EmployeeDetailController as vm",
                                resolve:{
                                    employeeResource :"employeeResource",
                                    employee: function(employeeResource,$stateParams) {
                                        var emplId = $stateParams.emplId;
                                        return employeeResource.getUser(emplId);
                                    }
                                }
                            })
                            .state("dataAnalytics",{
                                url: "/dataAnalytics",
                                templateUrl:"app/graph/dataAnalyticsView.html",
                                controller:"DataAnalyticsController",
                                resolve: {
                                    employeeResource : "employeeResource",
                                    employees: function(employeeResource){
                                         return employeeResource.getCount();
                                        // function(response) {
                                        //         // no code needed for success
                                        //     },
                                        //     function(response) {
                                        //         if (response.status == 404) {
                                        //             alert("Desired message for 404 error- " +
                                        //                 response.config.method + " " +response.config.url);
                                        //         } else {
                                        //             alert(response.statusText);
                                        //         }
                                        //     }).$promise;

                                    }
                                }
                            })
                    }]

    );

}());
