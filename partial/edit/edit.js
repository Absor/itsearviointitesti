angular.module('satest').controller('EditCtrl',function($scope, $stateParams){
    $scope.isNew = function() {
        console.log(!$stateParams.testId);
        return !$stateParams.testId;
    };

    var getRandomColor = function() {
        var letters = ['A','B','C','D','E'];
        var color = '#';
        for (var i=0; i<3; i++ ) {
            color += letters[Math.floor(Math.random() * letters.length)];
        }
        return color;
    };
});