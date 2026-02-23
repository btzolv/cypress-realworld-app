class TransactionPage {

    configurarContaInicial() {
      cy.get('[data-test="user-onboarding-next"]').click();
      
      cy.get('#bankaccount-bankName-input').should('be.visible').type('Banco da Beatriz');
      cy.get('#bankaccount-routingNumber-input').type('123456789');
      cy.get('#bankaccount-accountNumber-input').type('123456789');
      
      cy.get('[data-test="bankaccount-submit"]').click();
      cy.get('[data-test="user-onboarding-next"]').should('be.visible').click();

      cy.get('[data-test="user-onboarding-dialog"]').should('not.exist');
    }    

    acessarNovaTransacao() {
      cy.get('[data-test="nav-top-new-transaction"]').click();
    }
  
    selecionarUsuario() {
      cy.get('[data-test="user-list-search-input"]').should('be.visible').type('Ines');
      cy.contains('Ines' , { timeout: 10000 }).should('be.visible').click();
    }
  
    preencherValor(valor) {
      cy.get('#amount').should('be.visible').type(valor);
    }
  
    preencherDescricao(descricao) {
      cy.get('#transaction-create-description-input').should('be.visible').type(descricao);
    }
  
    enviarPagamento() {
      cy.get('[data-test="transaction-create-submit-payment"]').click();
    }
  
    validarSucesso() {
      cy.contains('Transaction Submitted').should('be.visible');
    }
  
    validarErroSaldo() {
      cy.contains('Insufficient funds').should('be.visible');
    }
  }
  
  export default new TransactionPage();