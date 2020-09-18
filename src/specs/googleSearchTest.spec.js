const googleMainPage = require ('../pages/googleMainPage');
const googleSearchResultPage = require('../pages/googleSearchResultsPage');
const capitalixMainPage = require('../pages/capitalixMainPage');
const searchValue = "Capitalix"
describe('Google Search', function() {

    it('Load Google page', function() {
        googleMainPage.get();
        expect(browser.getTitle()).toEqual('Google');

    });

    it('Set search value and search',function() {
        googleMainPage.setSearchValue(searchValue);
        googleMainPage.clickSearchButton();
        expect(googleSearchResultPage.isGoogleSummaryBlockPresent()).toBeTruthy();

    });

    it('Click capitalix link', function(){
        googleSearchResultPage.clickOncapitalixLink();
        expect(capitalixMainPage.isCapitalixLogoPresent()).toBeTruthy();

    });

    it('Sleep', function() {
        browser.sleep(3000);
    });
});