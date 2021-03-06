﻿var EmployeesControllers = angular.module('EmployeesControllers', []);

EmployeesControllers.controller('EmployeesCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.formData = {};

    $http.get('/api/employees')
        .success(function(data) {
            $scope.employees = data;
            console.log(data);
        }). error(function(data) {
            console.log('Error:' + data);
        });

    $scope.addEmployee = function() {
        $http.post('/api/employees', $scope.formData)
            .success(function(data) {
                $scope.formData = {};
                $scope.employees = data;
                console.log(data);
            }).error(function(data) {
                console.log('Error: ' + data);
            });
    };

    $scope.removeEmployee = function(id) {
        $http.delete('/api/employees/' + id)
            .success(function(data) {
                $scope.employees = data;
                console.log(data);
            }).error(function(data) {
                console.log('Error: ' + data);
            });
    };

    $scope.orderProp = 'firstName';
}]);

EmployeesControllers.controller('EmployeeDetailsCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        $http.get('/api/employees/' + $routeParams.employeeId)
            .success(function(data) {
                console.log('Success ama: ' + data);
                $scope.employee = data;
            }).error(function(data) {
                console.log('Error: ' + data);
            });
    }]);