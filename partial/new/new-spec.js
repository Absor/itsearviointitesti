describe('NewSaTestCtrl', function () {

    beforeEach(module('satest'));

    var scope, ctrl;

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller('NewSaTestCtrl', {$scope: scope});
    }));

    it('creates a new test object', inject(function () {
        expect(scope.saTest).toEqual(jasmine.any(Object));
        expect(scope.saTest.title).toBeDefined();
        expect(scope.saTest.description).toBeDefined();
        expect(scope.saTest.themes).toEqual(jasmine.any(Array));
    }));

    it('adds a new theme to test when the method is called', inject(function () {
        expect(scope.saTest.themes.length).toEqual(0);
        scope.addTheme();
        expect(scope.saTest.themes.length).toEqual(1);
        expect(scope.saTest.themes[0]).toEqual(jasmine.any(Object));
    }));
});