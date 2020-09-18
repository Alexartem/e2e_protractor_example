const searchInput = element(by.css('input[role = "combobox"]'));
const searchButton = element(by.xpath("//*[@id=\"tsf\"]/div[2]/div[1]/div[3]/center/input[1]"))

const GoogleMainPage = function() {

    this.get = function() {
        browser.get('https://www.google.com/');
    };

    this.setSearchValue = function(value) {
        searchInput.sendKeys(value)
    };

    this.clickSearchButton = function(){
        searchButton.submit();
    };
};
module.exports = new GoogleMainPage();

