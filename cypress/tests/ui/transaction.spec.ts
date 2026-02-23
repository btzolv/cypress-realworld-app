  import loginPage from '../../pages/loginPage.js';
  import transactionPage from '../../pages/transactionPage.js';

  describe('Funcionalidade: Enviar Dinheiro', () => {
    
    beforeEach(() => {
      loginPage.visit();
  
      cy.fixture('user').then((user) => {
        loginPage.login(user.validUser.username, user.validUser.password);

        cy.get('body').then(($body) => {
          if ($body.find('[data-test="user-onboarding-dialog"]').length > 0) {
            transactionPage.configurarContaInicial();
          }
        });
        
        cy.get('[data-test="sidenav-username"]').should('be.visible');
      });
    });

    it('Deve enviar dinheiro com sucesso (Saldo Suficiente)', () => {
      transactionPage.acessarNovaTransacao();
      transactionPage.selecionarUsuario();
      transactionPage.preencherValor('10');
      transactionPage.preencherDescricao('Pagamento teste sucesso');
      transactionPage.enviarPagamento();
      transactionPage.validarSucesso();
      cy.screenshot();
    });

    it('Deve exibir mensagem de erro ao enviar sem saldo suficiente', () => {
      transactionPage.acessarNovaTransacao();
      transactionPage.selecionarUsuario();
    
      transactionPage.preencherValor('999999'); 
      transactionPage.preencherDescricao('Teste saldo insuficiente');
      transactionPage.enviarPagamento();
      transactionPage.validarErroSaldo();
      cy.screenshot();
    });
  });