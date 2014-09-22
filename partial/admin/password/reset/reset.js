angular.module('satest').controller('ResetCtrl',function($scope, $stateParams, Authentication){
    $scope.user = {
        email: "",
        password: "",
        password_confirmation: "",
        token: $stateParams.token
    };

    $scope.passwordsMatch = function() {
        return $scope.user.password === $scope.user.password_confirmation;
    };

    $scope.reset = function() {
        Authentication.resetPassword($scope.user).then(function() {
            $scope.alerts.push({ type: 'success', msg: 'Salasana vaihdettu.' });
            $scope.user = {
                email: "",
                password: "",
                password_confirmation: "",
                token: $stateParams.token
            };
        }, function() {
            $scope.alerts.push({ type: 'warning', msg: 'Virhe. Yritä uudelleen hetken kuluttua.' });
        });
    };
});