import registerPage from '../../pages/registerPage.js';

describe('Cadastro de usuário', () => {

  beforeEach(() => {
    registerPage.visit();
  });

  it('Deve registrar o usuário com sucesso', () => {
    cy.fixture('user').then((user) => {
      registerPage.register(user.validUser);
      registerPage.shouldRedirectToLogin();
      cy.screenshot();
    });
  });

  it('Deve exibir erro ao tentar cadastrar sem preencher campos', () => {
    registerPage.submit();
    registerPage.shouldShowRequiredFieldError();
    cy.screenshot();
  });
});