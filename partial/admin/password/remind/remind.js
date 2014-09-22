angular.module('satest').controller('RemindCtrl',function($scope, Authentication){
    $scope.user = {email: ""};

    $scope.remind = function() {
        Authentication.remindPassword($scope.user).then(function() {
            $scope.alerts.push({ type: 'success', msg: 'Sähköposti lähetetty.' });
            $scope.user.email = "";
        }, function() {
            $scope.alerts.push({ type: 'warning', msg: 'Virhe. Yritä uudelleen hetken kuluttua.' });
        });
    };
});