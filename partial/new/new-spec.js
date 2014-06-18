describe('NewSaTestCtrl', function () {

    beforeEach(module('satest'));

    var scope, ctrl;

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller('NewSaTestCtrl', {$scope: scope});
    }));

    it('creates a new test object', inject(function () {
        expect(scope.saTest).toBeDefined();
    }));

});