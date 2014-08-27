angular.module('satest').controller('GroupsCtrl',function($scope, Test){

    var claimGroups = null;
    $scope.getClaimgroups = function() {
        if (!claimGroups) {
            if (!$scope.getTest()) {
                return;
            }
            refreshClaims();
        }
        return claimGroups;
    };

    $scope.isEdited = function(claim) {
        return claim._claimgroupId - 1 !== claim.claimgroupId;
    };

    var refreshClaims = function() {
        var allClaims = _.reduce($scope.getTest().interpretations, function(array, interpretation) {
            _.each(interpretation.claims, function(claim) {
                claim._color = interpretation.color;
                claim._category = interpretation.category;
                claim._claimgroupId = claim.claimgroupId + 1;
                claim._interpretationId = interpretation.id;
            });
            return array.concat(interpretation.claims);
        }, []);
        claimGroups = _.toArray(_.groupBy(allClaims, 'claimgroupId'));
    };

    $scope.updateClaim = function(claim) {
        Test.Interpretation.Claim.update($scope.getTest(), {id: claim._interpretationId}, {id: claim.id, claimgroupId: claim._claimgroupId}).then(function(updatedClaim) {
            _.merge(claim, updatedClaim);
            refreshClaims();
        }, function() {
            $scope.alerts.push({ type: 'warning', msg: 'Virhe tallennettaessa väitettä. Yritä uudelleen hetken kuluttua.' });
        });
    };
});