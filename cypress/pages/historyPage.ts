class HistoryPage {
    elements = {
      transactionList: '[data-test="transaction-list"]',
      // Usamos o seletor ^= para encontrar elementos que começam com esse nome
      transactionItem: '[data-test^="transaction-item"]', 
      personalTab: '[data-test="nav-personal-tab"]'
    }
  
    acessarHistoricoPessoal() {
      cy.get(this.elements.personalTab).should('be.visible').click();
    }
  
    validarTransacoesExibidas() {
      // Garantimos que a lista existe primeiro
      cy.get(this.elements.transactionList).should('be.visible');
      
      // Validamos que há itens. O Cypress fará o 'retry' automaticamente aqui 
      // até que os itens carregados pela API apareçam no DOM.
      cy.get(this.elements.transactionItem, { timeout: 10000 })
        .should('have.length.at.least', 1);
    }
  
    validarListaVazia() {
      // No RWA, o container da lista não existe ou fica vazio neste cenário
      cy.contains('No Transactions', { timeout: 5000 }).should('be.visible');
    }
  }
  
  export default new HistoryPage();