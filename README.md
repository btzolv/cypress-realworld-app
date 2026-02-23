🚀 Projeto de Automação: Cypress E2E - Real World App
Este projeto tem como objetivo automatizar o fluxo principal de um sistema bancário, cobrindo desde o registro até a transação financeira.

🛠️ Tecnologias Utilizadas
- Cypress 

- JavaScript 

Page Objects Model (POM)

Faker/Fixtures

🏗️ Estrutura do Projeto
O projeto foi organizado para ser escalável e de fácil manutenção:

cypress/pages/: Contém os Page Objects com a lógica de interação das telas.

cypress/tests/ui/: Contém os arquivos de teste divididos por funcionalidades.

cypress/fixtures/: Contém a massa de dados utilizada nos testes.

🧪 Testes Implementados
Cadastro de Usuário: Registro de uma nova conta com sucesso.

Login: Autenticação e validação do fluxo de onboarding para novos usuários.

Transação Financeira:

Envio de dinheiro entre usuários com saldo suficiente.

Tentativa de envio sem saldo (Cenário Negativo).

🐛 Bug Report: Saldo Negativo Permitido
Durante a execução dos testes automatizados, foi identificada uma falha crítica na regra de negócio:

ID do Cenário: it('Deve exibir mensagem de erro ao enviar sem saldo suficiente')

Comportamento Esperado: O sistema deveria bloquear a transação e exibir a mensagem "Insufficient funds".

Comportamento Atual: O sistema permite a conclusão do pagamento, gerando um saldo negativo para o usuário.

Status do Teste: ❌ Falhando (Conforme esperado para evidenciar o bug).

🚀 Como rodar o projeto
Clone o repositório.

Instale as dependências: npm install.

Inicialize o banco de dados: npm run db:seed.

Abra o Cypress: npx cypress open.