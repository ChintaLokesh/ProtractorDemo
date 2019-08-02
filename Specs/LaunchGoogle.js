

describe('Launch Google Page',function(){
    it('Check Google Page is Opened',function(){
        browser.waitForAngularEnabled(false);
        browser.get("http://google.com");
    })
})