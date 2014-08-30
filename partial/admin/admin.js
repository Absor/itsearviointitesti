angular.module('satest').controller('AdminCtrl',function($scope, $state, Authentication){
    $scope.signOut = function() {
        Authentication.signOut();
        $state.go('index');
    };
});