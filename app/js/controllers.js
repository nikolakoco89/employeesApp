var employeesApp = angular.module('employeesApp', []);

function EmployeesCtrl($scope, $http) {
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
}
