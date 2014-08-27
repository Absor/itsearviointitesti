angular.module('satest').factory('Alert',function($rootScope) {

    $rootScope.alerts = [];

    $rootScope.addAlert = function() {
        $rootScope.alerts.push({msg: 'Another alert!'});
    };

    $rootScope.closeAlert = function(index) {
        $rootScope.alerts.splice(index, 1);
    };

    var Alert = {
        clear: function() {
            $rootScope.alerts = [];
        }
    };

    return Alert;
});