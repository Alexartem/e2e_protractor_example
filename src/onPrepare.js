const onPrepare = function() {
    browser.sleep(5000);
    browser
        .manage()
        .window()
        .maximize();
    browser.waitForAngularEnabled(false);
};

module.exports = {
    onPrepare
};