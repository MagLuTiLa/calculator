let Home = require('../../pages/search/searchNavigation.js')

const SEARCH_BUTTON = "a[ui-sref='app.search']";
Given("I navigate to the website", () => {
  Home.goToHomePage();
});

When("I click on the Search button", () => {
  Home.clickSearchButton();
});