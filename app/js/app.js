/**
 * Created by kochovski on 30/01/14.
 */
var employeesApp = angular.module('employeesApp', [
    'ngRoute',
    'EmployeesControllers',
    'employeeAppAnimations'
]);

employeesApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/employees', {
                templateUrl: 'partials/employees_list.html',
                controller: 'EmployeesCtrl'
            }).
            when('/employees/add_new', {
                templateUrl: 'partials/employees_add_new.html',
                controller: 'EmployeeAddNewCtrl'
            }).
            when('/employees/:employeeId', {
                templateUrl: 'partials/employees_details.html',
                controller: 'EmployeeDetailsCtrl'
            }).
            otherwise({
                redirectTo: '/employees'
            });
    }]);