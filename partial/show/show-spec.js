describe('ShowCtrl', function() {

    beforeEach(module('satest'));

    var scope, ctrl, saTestMock, findDeferred, rootScope, stateMock;

    beforeEach(inject(function ($rootScope, $controller, $q) {
        rootScope = $rootScope;
        findDeferred = $q.defer();
        var find = jasmine.createSpy('saTest.all function').andReturn(findDeferred.promise);
        saTestMock = {find: find};
        stateMock = {};

        scope = $rootScope.$new();
        ctrl = $controller('ShowCtrl', {$scope: scope, saTest: saTestMock, $state: stateMock});
    }));

    it('gets the test from saTest service', function () {
        expect(saTestMock.find).toHaveBeenCalled();
        var result = {};
        findDeferred.resolve(result);
        rootScope.$apply();
        expect(scope.saTest).toBe(result);
    });
});