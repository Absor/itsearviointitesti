angular.module('satest').controller('EditCtrl',function($scope, $stateParams, $modal, $state, Test){
    var test;

    $scope.getTest = function() {
        return test;
    };

    $scope.getCurrentState = function() {
        return  $state.current.name;
    };

    $scope.isNew = function() {
        return !$stateParams.testId;
    };

    if (!$scope.isNew()) {
        Test.findOne($stateParams.testId).then(function(newTest) {
            test = newTest;
        }, function() {
            // TODO error redirect
        });
    }

    $scope.openMarkdownHelpModal = function() {
        $modal.open({
            templateUrl: 'partial/admin/edit/markdown-modal.html',
            size: 'lg'
        });
    };
});