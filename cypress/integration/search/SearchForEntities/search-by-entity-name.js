let Home = require('../../../pages/search/searchNavigation.js')

const SEARCH_BUTTON = "a[ui-sref='app.search']";
const SEARCH_BAR = "input[type='text']";
const SEARCH_RESULT_FIRST_ENTRY = "tr[add-to-selection='searchResult']";
const ENTITY_DESCRIPTION_FIELD = "div.row.row-line.ng-scope"

When("I type {string} in the searchfield", searchTerm => {
    Home.typeInSearchBar(searchTerm);
});
 
When("I press the enter key", () => {
    Home.pressEnterInSearchBar();
});


When("I click on the first searchresult", () => {
    Home.clickOnFirstSearchEntry();
});


Then("I should see the entity with description {string} in the left panel", descriptionName => {
    Home.compareSelectedEntityDescription(descriptionName);
});