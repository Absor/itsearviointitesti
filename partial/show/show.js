angular.module('satest').controller('ShowCtrl',function($scope, $stateParams, $window, Test){
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

    $scope.print = function() {
        $window.print();
    };

    $scope.getLightColor = function(hex) {
        return one.color(hex).lightness(0.9).hex();
    };
});