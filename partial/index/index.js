angular.module('satest').controller('IndexCtrl', function ($scope, saTest) {
    saTest.all().then(function (tests) {
        $scope.saTests = tests;
    }, function (reason) {
        // TODO error
    });
});