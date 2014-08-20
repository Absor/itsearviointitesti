angular.module('satest').controller('ShowCtrl',function($scope, $stateParams, Test){
    Test.findOne($stateParams.testId)
        .then(function (test) {
            $scope.test = test;
        }, function (reason) {
            // TODO error + redirect
        });

    var claimGroups;
    $scope.getClaimgroups = function() {
        if (!$scope.test) {
            return null;
        }
        if (!claimGroups) {
            claimGroups = _.toArray(_.groupBy(_.reduce($scope.test.interpretations, function(array, interpretation) {
                return array.concat(interpretation.claims);
            }, []), 'claimgroupId'));
        }
        return claimGroups;
    };
});