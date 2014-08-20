angular.module('satest').controller('EditCtrl',function($scope, $stateParams, Test){
    $scope.test = {};

    $scope.isNew = function() {
        return !$stateParams.testId;
    };

    if (!$scope.isNew()) {
        Test.findOne($stateParams.testId).then(function(test) {
            $scope.test = test;
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
});