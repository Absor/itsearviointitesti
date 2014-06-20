angular.module('satest').controller('NewSaTestCtrl', function ($scope) {
    $scope.saTest = {
        title: null,
        description: null,
        themes: []
    };

    $scope.addTheme = function() {
        $scope.saTest.themes.push({

        });
    };

    $scope.removeTheme = function(theme) {

    };
});

function getRandomColor() {
    var letters = ['A','B','C','D','E'];
    var color = '#';
    for (var i=0; i<3; i++ ) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}