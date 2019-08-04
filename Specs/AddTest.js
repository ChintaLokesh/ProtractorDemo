describe('Juliemer APP Testing',function(){

    var   obj;
    var testData=require('../DataRepo/AddDataRepo.js');
    var using = require('jasmine-data-provider');
    beforeEach(function(){
        obj=require('../ObjRepo/AddTestRepo');
        
        
       obj.getURL("http://juliemr.github.io/protractor-demo/");
    });

    using(testData.dataDriven, function (data, description) {

    
    it('Addition Functionality Testing'+description,function(){
        
       obj.firstTextBox.sendKeys(data.firstNum);
      // obj.getOption("3").click();
      //  obj.selectOption.click();
       
        obj.secondTextBox.sendKeys(data.secondNum);
        obj.goButton.click();
        obj.result.getText().then(function(text){
            console.log("result is "+text);
            expect(text).toBe(data.result);
            console.log("test is executed successfully");
            console.log("End of Suite");
        })
      })
    });
      afterEach(function(){
          console.log("Test is completed successfully");
      })
})