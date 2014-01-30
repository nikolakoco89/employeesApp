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






//employeesApp.controller('EmployeesCtrl', ['$scope', '$http',
//    function ($scope, $http) {
//        $http.get('employees/employees.json').success(function (data) {
//            $scope.employees = data;
//        }).error(function (data, status) {
//                window.alert("NIKOLA");
//            });
//
//        $scope.orderProp = 'age';
//
//        $scope.save = function ($scope, $http) {
///*            $http.post('employees/employees.json', { firstName: '$scope.firstName', lastName: '$scope.lastName', photo: '$scope.photo' }).success(function (response) {
//
//            }).error(function () {
//                    window.alert("NIKOLA");
//                });*/
//            $scope.employees = [{
//                'firstName': 'Nikolche',
//                'lastName': 'Kochovski',
//                'photo' : 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-prn2/c0.0.160.160/p160x160/1119366_1553250848_1992939247_n.jpg'
//            }];
//            //$scope.employees.push({firstName: '$scope.firstName', lastName: '$scope.lastName', photo: '$scope.photo'});
//        };
//    }]);
