describe('ClaimgroupCtrl', function () {

    beforeEach(module('satest'));

    var scope, ctrl;

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();

        scope.saTest = {
            maxChosenPerGroup: 1
        };

        ctrl = $controller('ClaimgroupCtrl', {$scope: scope, $stateParams: {claimgroupId: 123}});

        var claimgroup = [
            {"text": "Koen tekeväni mielekästä työtä, kun kirjoitan."},
            {"text": "Ajanhallintani on tehokasta ja suoriudun tehtävistä hyvinkin lyhyessä ajassa."},
            {"text": "Oman alan kirjoitustyyli on hyvin hallussa."},
            {"text": "Jäsentelen tekstini yleensä hyvin, mutta muiden palaute on tarpeellista."},
            {"text": "Osaan hyvin oman alani viittauskäytännöt."},
            {"text": "Suurin osa pilkuistani ja yhdyssanoistani on oikein."}
        ];
        scope.getClaimgroup = function() {
            return claimgroup;
        };
    }));

    it('should attach claimgroupId to scope', inject(function () {
        expect(scope.claimgroupId).toEqual(123);
    }));

    it('should tell if a claim is chosen', inject(function () {
        expect(scope.isClaimChosen(scope.getClaimgroup()[1])).toBeFalsy();
    }));

    it('should toggle a claim to true', inject(function () {
        var claim = scope.getClaimgroup()[0];
        scope.toggleClaimChosen(claim);
        expect(scope.isClaimChosen(claim)).toBe(true);
    }));

    it('should toggle a claim to false', inject(function () {
        var claim = scope.getClaimgroup()[0];
        scope.toggleClaimChosen(claim);
        scope.toggleClaimChosen(claim);
        expect(scope.isClaimChosen(claim)).toBe(false);
    }));

    it('should not toggle more than max amount of claims to true', inject(function () {
        var claim1 = scope.getClaimgroup()[0];
        var claim2 = scope.getClaimgroup()[1];
        scope.toggleClaimChosen(claim1);
        scope.toggleClaimChosen(claim2);
        expect(scope.isClaimChosen(claim1)).toBe(true);
        expect(scope.isClaimChosen(claim2)).toBeFalsy();
    }));

    it('should tell if it is the first claimgroup when it is not', inject(function () {
        expect(scope.isFirstClaimgroup()).toEqual(false);
    }));

    it('should tell if it is the first claimgroup when it is', inject(function () {
        scope.claimgroupId = 0;
        expect(scope.isFirstClaimgroup()).toEqual(true);
    }));

    it('should tell if it is the last claimgroup when it is not', inject(function () {
        scope.claimgroupId = 0;
        scope.getClaimgroups = function() {
            return [1,2,3,4,5];
        };
        expect(scope.isLastClaimgroup()).toEqual(false);
    }));

    it('should tell if it is the last claimgroup when it is', inject(function () {
        scope.claimgroupId = 4;
        scope.getClaimgroups = function() {
            return [0,1,2,3,4];
        };
        expect(scope.isLastClaimgroup()).toEqual(true);
    }));

    // TODO progress tests
});