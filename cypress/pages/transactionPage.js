class TransactionPage {

    acessarNovaTransacao() {
      cy.get('[data-test="nav-top-new-transaction"]').click();
    }
  
    selecionarUsuario() {
      cy.get('[data-test="user-list-item"]').first().click();
    }
  
    preencherValor(valor) {
      cy.get('[data-test="amount-input"] input').clear().type(valor);
    }
  
    preencherDescricao(descricao) {
      cy.get('[data-test="transaction-create-description-input"] input')
        .clear()
        .type(descricao);
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