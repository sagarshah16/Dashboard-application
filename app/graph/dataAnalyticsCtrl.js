(function(){
    "use strict";
    angular
        .module("employeeManagement")
        .controller("DataAnalyticsController",["$scope",'employees',DataAnalyticsController]);

    function DataAnalyticsController($scope, employees)
    {
        $scope.title="Data Analytics";
        $scope.options = {
            chart: {
                type: 'pieChart',
                height: 500,
                x: function(d){return d.Year;},
                y: function(d){return d.Total;},
                showLabels: true,
                duration: 500,
                labelThreshold: 0.01,
                labelSunbeamLayout: true,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };

        $scope.data = employees.data;

    }
}());

