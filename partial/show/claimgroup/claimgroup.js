angular.module('satest').controller('ClaimgroupCtrl',function($scope, $stateParams, $state){
    $scope.claimgroupId = parseInt($stateParams.claimgroupId);
    $scope.getClaimgroup = function() {
        return $scope.getClaimgroups()[$scope.claimgroupId];
    };

    $scope.isClaimChosen = function(claim) {
        return claim._chosen;
    };

    $scope.toggleClaimChosen = function(claim) {
        if (!claim._chosen) {
            var numChosen = _.reduce($scope.getClaimgroup(), function(sum, claim) {
                if (claim._chosen) {
                    return sum + 1;
                }
                return sum;
            }, 0);
            if (numChosen >= $scope.test.maxChosenPerGroup) {
                // TODO error?
                return;
            }
        }
        claim._chosen = !claim._chosen;
    };

    $scope.isFirstClaimgroup = function() {
        return $scope.claimgroupId === 0;
    };

    $scope.isLastClaimgroup = function() {
        return $scope.claimgroupId === _.size($scope.getClaimgroups()) - 1;
    };

    $scope.getProgressPercentage = function() {
        return ($scope.claimgroupId / (_.size($scope.getClaimgroups()))) * 100;
    };

    $scope.getSingleItemProgressPercentage = function() {
        return (1 / (_.size($scope.getClaimgroups()))) * 100;
    };

    $scope.getProgress = function() {
        return ($scope.claimgroupId + 1) + "/" + _.size($scope.getClaimgroups());
    };
});