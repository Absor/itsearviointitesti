angular.module('satest').controller('AdminCtrl',function($scope, Authentication){
    $scope.signOut = Authentication.signOut;
});