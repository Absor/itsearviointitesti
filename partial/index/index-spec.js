describe('IndexCtrl', function () {

    beforeEach(module('satest'));

    var scope, ctrl, testMock, allDeferred, rootScope, stateMock;

    beforeEach(inject(function ($rootScope, $controller, $q) {
        rootScope = $rootScope;
        allDeferred = $q.defer();
        var all = jasmine.createSpy('Test.findAll function').andReturn(allDeferred.promise);
        testMock = {findAll: all};
        stateMock = {};

        scope = $rootScope.$new();
        ctrl = $controller('IndexCtrl', {$scope: scope, Test: testMock, $state: stateMock});
    }));

    it('gets all tests from Test service', function () {
        expect(testMock.findAll).toHaveBeenCalled();
        var result = [];
        allDeferred.resolve(result);
        rootScope.$apply();
        expect(scope.tests).toBe(result);
    });

    it('calling goToTest calls the $state with right parameters', function() {
        stateMock.go = jasmine.createSpy('$state.go function');
        scope.goToTest("test");
        expect(stateMock.go).toHaveBeenCalledWith('show', {testId: "test"});
    });
});