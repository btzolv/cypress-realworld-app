import loginPage from '../../pages/loginPage.js';
import transactionPage from '../../pages/transactionPage.js';

describe('Funcionalidade: Enviar Dinheiro', () => {
  
  beforeEach(() => {
    loginPage.visit();
  });

  it('Deve fazer login com sucesso', () => {
    cy.fixture('user').then((user) => {
      loginPage.login(user.validUser.username, user.validUser.password);
      loginPage.shouldBeLoggedIn();
  });

  it('Deve enviar dinheiro com sucesso (Saldo Suficiente)', () => {
    transactionPage.acessarNovaTransacao();
    transactionPage.selecionarUsuario();
    transactionPage.preencherValor('10');
    transactionPage.preencherDescricao('Pagamento teste sucesso');
    transactionPage.enviarPagamento();
    transactionPage.validarSucesso();
  });

  it('Deve exibir mensagem de erro ao enviar sem saldo suficiente', () => {
    transactionPage.acessarNovaTransacao();
    transactionPage.selecionarUsuario();
   
    transactionPage.preencherValor('999999'); 
    transactionPage.preencherDescricao('Teste saldo insuficiente');
    transactionPage.enviarPagamento();
    transactionPage.validarErroSaldo();
  });
});
});