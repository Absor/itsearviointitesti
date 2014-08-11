angular.module('satest').controller('IndexCtrl', function ($scope, $state, saTest) {
    saTest.all()
        .then(function (tests) {
            $scope.saTests = tests;
        }, function (reason) {
            // TODO error
        });

    $scope.goToTest = function(id) {
        $state.go('show', {testId: id});
    };
});