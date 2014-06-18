describe('IndexCtrl', function () {

    beforeEach(module('satest'));

    var scope, ctrl, saTestMock, deferred, rootScope;

    beforeEach(inject(function ($rootScope, $controller, $q) {
        rootScope = $rootScope;
        deferred = $q.defer();
        var allMock = jasmine.createSpy('all function').andReturn(deferred.promise);
        saTestMock = {all: allMock};

        scope = $rootScope.$new();
        ctrl = $controller('IndexCtrl', {$scope: scope, saTest: saTestMock});
    }));

    it('gets all tests from saTest service', inject(function () {
        expect(saTestMock.all).toHaveBeenCalled();
        var result = {};
        deferred.resolve(result);
        rootScope.$apply();
        expect(scope.saTests).toBe(result);
    }));

});