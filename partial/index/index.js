angular.module('satest').controller('IndexCtrl', function ($scope, $state, Test) {
    Test.findAll()
        .then(function (tests) {
            $scope.tests = tests;
        }, function (reason) {
            // TODO error
        });

    $scope.goToTest = function(id) {
        $state.go('show', {testId: id});
    };
});