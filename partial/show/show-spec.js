describe('ShowCtrl', function() {

    beforeEach(module('satest'));

    var scope, ctrl, testMock, findDeferred, rootScope, stateMock;

    beforeEach(inject(function ($rootScope, $controller, $q) {
        rootScope = $rootScope;
        findDeferred = $q.defer();
        var find = jasmine.createSpy('Test.findOne function').andReturn(findDeferred.promise);
        testMock = {findOne: find};
        stateMock = {};

        scope = $rootScope.$new();
        ctrl = $controller('ShowCtrl', {$scope: scope, Test: testMock, $state: stateMock});
    }));

    it('gets the test from Test service', function () {
        expect(testMock.findOne).toHaveBeenCalled();
        var result = {};
        findDeferred.resolve(result);
        rootScope.$apply();
        expect(scope.test).toBe(result);
    });
});