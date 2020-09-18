const capitalixLink = element.all(by.css('div#search a')).first();
const googleSearchSummaryBlock = element(by.xpath("//*[@id=\"result-stats\"]"));
const GoogleSearchResultPage = function() {
    this.clickOncapitalixLink = function() {
        capitalixLink.click();
    };
    this.isGoogleSummaryBlockPresent = function() {
        return googleSearchSummaryBlock.isPresent()
    }
}
module.exports = new GoogleSearchResultPage();