class LoginPage {

    elements = {
      usernameInput: '[data-test="signin-username"] input',
      passwordInput: '[data-test="signin-password"] input',
      submitButton: '[data-test="signin-submit"]',
      errorMessage: 'Username or password is invalid'
    }
  
    visit() {
      cy.visit('/signin');
    }
  
    fillUsername(username) {
      cy.get(this.elements.usernameInput).clear().type(username);
    }
  
    fillPassword(password) {
      cy.get(this.elements.passwordInput).clear().type(password);
    }
  
    submit() {
      cy.get(this.elements.submitButton).click();
    }
  
    login(username, password) {
        this.visit();
        this.fillUsername(username);
        this.fillPassword(password);
        this.submit();
      }
  
    shouldBeLoggedIn() {
      cy.url().should('include', '/');
    }
  
    shouldShowError() {
      cy.contains(this.elements.errorMessage).should('be.visible');
    }
  
    shouldDisableButton() {
      cy.get(this.elements.submitButton).should('be.disabled');
    }
  
  }
  
  export default new LoginPage();