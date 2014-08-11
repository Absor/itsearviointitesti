angular.module('satest').controller('ShowCtrl',function($scope, $stateParams, saTest){
    saTest.find($stateParams.testId)
        .then(function (test) {
            $scope.saTest = test;
        }, function (reason) {
            // TODO error + redirect
        });

    var claimGroups;
    $scope.getClaimgroups = function() {
        if (!$scope.saTest) {
            return null;
        }
        if (!claimGroups) {
            claimGroups = _.groupBy(_.reduce($scope.saTest.interpretations, function(array, interpretation) {
                return array.concat(interpretation.claims);
            }, []), 'claimgroupId');
        }
        return claimGroups;
    };
});