const SEARCH_BUTTON = "a[ui-sref='app.search']";
const NOTES_BUTTON = "a[ui-sref='app.notes']";
const SEARCH_BAR = "input[type='text']";
const SEARCH_RESULT_FIRST_ENTRY = "tr[add-to-selection='searchResult']";
const ENTITY_DESCRIPTION_FIELD = "div.row.row-line.ng-scope"
const NOTE_RESULT_FIRST_ENTRY = "tr[ng-repeat='note in $data | filter: $ctrl.noteFilter']"

class Home {
  static goToHomePage() {
    cy.viewport(1920, 1080)
    cy.visit(Cypress.env('host'), {
      auth: {
        username: Cypress.env('auth_user'),
        password: Cypress.env('auth_pass')
      }
    })
  }

  static clickSearchButton() {
    cy.get(SEARCH_BUTTON)
      .click()

    cy.url()
      .should('include', '/app/search')
  }

  static clickNotesButton() {
    cy.get(NOTES_BUTTON)
      .click()

    cy.url()
      .should('include', '/app/notes')
  }

  static typeInSearchBar(searchTerm) {
    cy.get(SEARCH_BAR)
      .type(searchTerm)
      .should('have.value', searchTerm)
  }

  static pressEnterInSearchBar() {
    cy.get(SEARCH_BAR)
      .type('{enter}')
  }

  static clickOnFirstSearchEntry() {
    cy.get(SEARCH_RESULT_FIRST_ENTRY)
      .eq(0)
      .click()
  }

  static compareSelectedEntityDescription(descriptionName) {
    cy.get(ENTITY_DESCRIPTION_FIELD)
      .eq(2)
      .contains('div', descriptionName)
  }

  static clickOnFirstNoteEntry() {
    cy.get(NOTES_BUTTON)
    .click()
  }

  static compareSelectedNoteContent(noteContent) {
    cy.contains('div', noteContent)
	  expect(true).to.equal(false)
  }
}

module.exports = Home;
