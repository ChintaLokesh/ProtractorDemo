function addTestRepo(){
    this.firstTextBox=element(by.model("first"));
    this.secondTextBox=  element(by.model("second"));
  // this.selectOption=element(by.model("operator")).element(by.css("option:nth-child(3)"));
    this.goButton= element(by.id("gobutton"));
    this.result=element(by.css("h2"));

    this.getURL=function(text){
        browser.get(text);
    },

    this.getOption=function(){
        this.selectOption=element(by.model("operator")).element(by.css("option:nth-child(3)"));
    }
    
}

module.exports=new addTestRepo();