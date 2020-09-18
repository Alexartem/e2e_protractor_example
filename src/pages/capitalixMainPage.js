const capitalixLogo = element(by.xpath("//a[@class='capitalix-logo header__logo']"));

const CapitalixMainPage = function() {
    this.isCapitalixLogoPresent = function() {
        return capitalixLogo.isPresent();
    }
}
module.exports = new CapitalixMainPage();