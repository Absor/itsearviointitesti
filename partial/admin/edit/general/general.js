angular.module('satest').controller('GeneralCtrl',function($scope, Test){
    var testCopy;
    var uneditedCopy;
    $scope.getTestCopy = function() {
        if ($scope.getTest() && !testCopy) {
            testCopy = _.clone($scope.getTest(), true);
            delete testCopy.interpretations;
            uneditedCopy = _.clone(testCopy, true);
        }
        return testCopy;
    };

    $scope.isEdited = function() {
        return !_.isEqual(testCopy, uneditedCopy);
    };

    $scope.updateTest = function() {
        Test.update(testCopy).then(function(updatedTest) {
            delete updatedTest.interpretations;
            _.merge($scope.getTest(), updatedTest);
            testCopy = updatedTest;
            uneditedCopy = _.clone(testCopy, true);
        }, function() {
            $scope.alerts.push({ type: 'warning', msg: 'Virhe tallennettaessa. Yritä uudelleen hetken kuluttua.' });
        });
    };
});