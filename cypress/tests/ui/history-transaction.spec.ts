import loginPage from '../../pages/loginPage';
import historyPage from '../../pages/historyPage';

describe('Funcionalidade: Visualizar Histórico de Transações', () => {

  beforeEach(() => {
    loginPage.visit();
    cy.fixture('user').then((user) => {
        loginPage.login(user.validUser.username, user.validUser.password);
      });
  
  });

  it.only('Deve visualizar histórico de transações com sucesso', () => {
    historyPage.acessarHistoricoPessoal();
 
    cy.url().should('include', '/personal'); 
    
    historyPage.validarTransacoesExibidas();
    cy.screenshot('historico-sucesso');
  });

  it('Deve exibir mensagem quando o usuário não possui transações anteriores', () => {
    historyPage.acessarHistoricoPessoal();
    historyPage.validarListaVazia();
    cy.screenshot('historico-vazio');
  });
});