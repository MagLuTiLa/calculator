let Calc = require('../../../pages/search/calcNavigation.js')


When("I do nothing", () => {
    Calc.doNothing();
});
 
Then("I can see that the page is called Calculator", () => {
    Calc.checkTitle();
});
