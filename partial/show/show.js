angular.module('satest').controller('ShowCtrl',function($scope, $stateParams, saTest){
    saTest.find($stateParams.testId)
        .then(function (test) {
            $scope.saTest = test;
        }, function (reason) {
            // TODO error + redirect
        });
});