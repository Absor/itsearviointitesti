describe('Show page', function () {

    beforeEach(function() {
        browser.get('#/tests/0');
    });

    it('should show the test title', function() {
        var jumbotronHeader = element(by.css(".jumbotron h1"));
        expect(jumbotronHeader.getText()).toMatch(/.+/);
    });

    it('should go to index page when clicking the link', function() {
        element(by.css('.jumbotron a')).click();
        expect(browser.getLocationAbsUrl()).toMatch(/.*#\/tests$/);
    });

    it('should show the test description', function() {
        var description = element(by.css(".lead"));
        expect(description.getText()).toMatch(/.+/);
    });
});