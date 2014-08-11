describe('IndexCtrl', function () {

    beforeEach(module('satest'));

    var scope, ctrl, saTestMock, allDeferred, rootScope, stateMock;

    beforeEach(inject(function ($rootScope, $controller, $q) {
        rootScope = $rootScope;
        allDeferred = $q.defer();
        var all = jasmine.createSpy('saTest.all function').andReturn(allDeferred.promise);
        saTestMock = {all: all};
        stateMock = {};

        scope = $rootScope.$new();
        ctrl = $controller('IndexCtrl', {$scope: scope, saTest: saTestMock, $state: stateMock});
    }));

    it('gets all tests from saTest service', function () {
        expect(saTestMock.all).toHaveBeenCalled();
        var result = [];
        allDeferred.resolve(result);
        rootScope.$apply();
        expect(scope.saTests).toBe(result);
    });

    it('calling goToTest calls the $state with right parameters', function() {
        stateMock.go = jasmine.createSpy('$state.go function');
        scope.goToTest("test");
        expect(stateMock.go).toHaveBeenCalledWith('show', {testId: "test"});
    });
});