describe('Index page', function () {

    beforeEach(function() {
        browser.get('#/');
    });

    it('should show the main page title', function() {
        var jumbotronHeader = element(by.css(".jumbotron h1"));
        expect(jumbotronHeader.getText()).toMatch(/.+/);
    });

    it('should be under path /tests', function() {
        expect(browser.getLocationAbsUrl()).toMatch(/.*#\/tests$/);
    });

    it('should list all tests', function() {
        var testHeaders = element.all(by.tagName('h4'));
        expect(testHeaders.count()).toEqual(2);
        expect(testHeaders.first().getText()).toMatch(/.+/);
        expect(testHeaders.last().getText()).toMatch(/.+/);
    });

    it('should go to test page when clicking a test', function() {
        element.all(by.css('.panel')).first().click();
        expect(browser.getLocationAbsUrl()).toMatch(/.*#\/tests\/0$/);
    });
});