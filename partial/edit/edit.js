angular.module('satest').controller('EditCtrl',function($scope, $stateParams, $modal, $state, Test){
    var test = {};

    $scope.getTest = function() {
        return test;
    }

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

    var getRandomColor = function() {
        var letters = ['A','B','C','D','E'];
        var color = '#';
        for (var i=0; i<3; i++ ) {
            color += letters[Math.floor(Math.random() * letters.length)];
        }
        return color;
    };

    $scope.openMarkdownHelpModal = function() {
        $modal.open({
            templateUrl: 'partial/edit/markdown-modal.html',
            size: 'lg'
        });
    };
});