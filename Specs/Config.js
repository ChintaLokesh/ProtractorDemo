var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config={
    framework:"jasmine",
    seleniumAddress:"http://localhost:4444/wd/hub",
    specs:["../Specs/LaunchGoogle.js"],
    onPrepare:function(){
        browser.manage().window().maximize();
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
              savePath: 'target/screenshots'
            })
            );
        },
            jasmineNodeOpts: {
                showColors: true, // Use colors in the command line report.
              },
              suites:
              {
                    smoke :['../Specs/AddTest.js', '../Specs/LaunchGoogle.js']
              }
    
}