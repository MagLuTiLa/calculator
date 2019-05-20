Feature: SearchForEntities
	In order to see the details of an entity
	As a user
	I want to search for entities in the search menu


Background:
	Given I navigate to the website
	When I click on the Search button

Scenario: Search by entity name
	When I type "Alert1" in the searchfield
	And I press the enter key
	And I click on the first searchresult
	Then I should see the entity with description "Alert1" in the left panel

Scenario: Search by note content
	When I type "Duly noted" in the searchfield
	And I press the enter key
	And I click on the first searchresult
	And I press the Notes button
	And I click on the first noteresult
	Then I should see the note with partial contents: "Duly noted"