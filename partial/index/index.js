angular.module('satest').controller('IndexCtrl', function ($scope, $state, Test) {
    $scope.isLoadingNew = false;

    Test.findAll()
        .then(function (tests) {
            $scope.tests = tests;
        }, function (reason) {
            $scope.alerts.push({ type: 'warning', msg: 'Virhe haettaessa testejä. Yritä uudelleen hetken kuluttua.' });
        });

    $scope.goToTest = function(id) {
        $state.go('show', {testId: id});
    };

    $scope.newTest = function() {
        $scope.isLoadingNew = true;
        Test.create({
            title: "",
            maxChosenPerGroup: 3,
            showInterpretationThreshold: 0,
            descriptionPageText: "",
            testPagesText: "",
            interpretationPageText: "",
            interpretations: []
        }).then(function(test) {
            $scope.isLoadingNew = false;
            $state.go('edit.general', {testId: test.id});
        }, function() {
            $scope.isLoadingNew = false;
            $scope.alerts.push({ type: 'warning', msg: 'Virhe luodessa testiä. Yritä uudelleen hetken kuluttua.' });
        });
    };

    $scope.deleteTest = function(test) {
        Test.destroy(test).then(function(deletedTest) {
            _.remove($scope.tests, function(otherTest) {
                return test.id === otherTest.id;
            });
        }, function() {
            $scope.alerts.push({ type: 'warning', msg: 'Virhe poistettaessa testiä. Yritä uudelleen hetken kuluttua.' });
        });
    };
});