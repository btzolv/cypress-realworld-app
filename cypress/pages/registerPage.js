class RegisterPage {

    elements = {
      firstNameInput: '[data-test="signup-first-name"] input',
      lastNameInput: '[data-test="signup-last-name"] input',
      usernameInput: '[data-test="signup-username"] input',
      passwordInput: '[data-test="signup-password"] input',
      confirmPasswordInput: '[data-test="signup-confirmPassword"] input',
      submitButton: '[data-test="signup-submit"]'
    }
  
    visit() {
      cy.visit('/signup');
    }
  
    fillFirstName(firstName) {
      cy.get(this.elements.firstNameInput).clear().type(firstName);
    }
  
    fillLastName(lastName) {
      cy.get(this.elements.lastNameInput).clear().type(lastName);
    }
  
    fillUsername(username) {
      cy.get(this.elements.usernameInput).clear().type(username);
    }
  
    fillPassword(password) {
      cy.get(this.elements.passwordInput).clear().type(password);
    }
  
    fillConfirmPassword(password) {
      cy.get(this.elements.confirmPasswordInput).clear().type(password);
    }
  
    submit() {
      cy.get(this.elements.submitButton).click();
    }
  
    register(user) {
      this.fillFirstName(user.firstName);
      this.fillLastName(user.lastName);
      this.fillUsername(user.username);
      this.fillPassword(user.password);
      this.fillConfirmPassword(user.password);
      this.submit();
    }
  
    shouldRedirectToLogin() {
      cy.url().should('include', '/signin');
    }
  
    shouldShowRequiredFieldError() {
      cy.contains('First Name is required').should('be.visible');
    }
  
  }
  
  export default new RegisterPage();