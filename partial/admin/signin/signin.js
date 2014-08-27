angular.module('satest').controller('SigninCtrl',function($scope, $state, Authentication){
    $scope.user = {username: "", password: ""};

    $scope.signIn = function() {
        Authentication.signIn($scope.user).then(function(data) {
            $state.go('index');
        }, function(error) {
            $scope.alerts.push({ type: 'danger', msg: 'Sähköpostiosoite tai salasana virheellinen.' });
        });
    };
});