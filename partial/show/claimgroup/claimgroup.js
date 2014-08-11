angular.module('satest').controller('ClaimgroupCtrl',function($scope, $stateParams, $state){
    $scope.claimgroupId = parseInt($stateParams.claimgroupId);
    // TODO if cant find saTest or claimgroup -> redirect
    $scope.claims = $scope.saTest.claimgroups[$scope.claimgroupId];

    $scope.isClaimChosen = function(claim) {
        return claim._chosen;
    };

    $scope.toggleClaimChosen = function(claim) {
        if (!claim._chosen) {
            var numChosen = _.reduce($scope.claims, function(sum, claim) {
                if (claim._chosen) {
                    return sum + 1;
                }
                return sum;
            }, 0);
            if (numChosen >= $scope.saTest.maxChosenPerGroup) {
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
        return $scope.claimgroupId === $scope.saTest.claimgroups.length - 1;
    };

    $scope.getProgress = function() {
        return ($scope.claimgroupId / ($scope.saTest.claimgroups.length)) * 100;
    };

    $scope.getSingleItemProgress = function() {
        return (1 / ($scope.saTest.claimgroups.length)) * 100;
    };
});