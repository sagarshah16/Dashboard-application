(function(){
    "use strict";
    angular
        .module("common.services")
        .factory("employeeResource",["$http", "$q",employeeResource]);

    function employeeResource($http, $q){
        return {
          addUser: function (data) {
                 return $http.post('api/addUser.php', data);
            },
          deleteUser: function (id) {
                 return $http.get('api/deleteUser.php',{
                    params: {
                        Id: id
                    }
                });
            },
            getUser: function (id){
                   return $http.get('api/getUser.php',{
                    params: {
                        Id: id
                    }
                });
            },
            editUser: function (data) {
              return $http.post('api/edituser.php', data);
            
            },

            listUsers: function () {
                return $http.get('api/listUsers.php');
            },
            getCount: function () {
                return $http.get('api/getCount.php');
            },
        };

    }

}());
