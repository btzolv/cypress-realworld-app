import loginPage from '../../pages/loginPage';

describe('Login', () => {

  beforeEach(() => {
    loginPage.visit();
  });

  it.only('Deve fazer login com sucesso', () => {
    cy.fixture('user').then((user) => {
      loginPage.login(user.validUser.username, user.validUser.password);
      loginPage.shouldBeLoggedIn();
    });
  });


  it('Não deve habilitar botão de login com dados inválidos', () => {
    loginPage.fillUsername('a');
    loginPage.fillPassword('1');

    loginPage.shouldDisableButton();
    });
  });

  it('Deve exibir erro com credenciais inválidas', () => {
    cy.fixture('user').then((user) => {
      loginPage.login(user.invalidUser.username, user.invalidUser.password);
      loginPage.shouldShowError();
    });
  });
