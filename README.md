# Task Manager
 
## Sobre
Este projeto é desenvolvido com Node.js e React.js, e tem como objetivo gerenciar tarefas.

## Tecnologias utilizadas
- Node.js
- Prisma
- Express
- MySQL
- Jest
- Supertest
- Swagger

---
## Como rodar o projeto localmente

### Passo a Passo

1. **Clone o repositório:**
   
   ```bash
   git clone https://github.com/ClaudioSousa44/backend-task_manager.git
   ```
   
2. **Navegue até o diretório do projeto:**
   
   ```bash
   cd backend-task_manager
   ```
   
3. **Instale as dependências:**
 
   ```bash
   npm install
   ```

4. **Crie um arquivo .env na raiz do projeto e defina a variável DATABASE_URL com a URL de conexão do seu banco de dados MySQL:**

   ```env
   DATABASE_URL=mysql://usuario:senha@localhost:3306/task_manager
   ```

5. **Rode as migrações do Prisma:**

   ```bash
   npx prisma migrate dev
   ```

6. **Inicie o servidor:**

   ```bash
   npm start
   ```

A API estará disponível em http://localhost:3000.

## Documentação da API

Para acessar a documentação com Swagger basta usar a url com /api-docs.
Localmente: [aqui](http://localhost:3000/api-docs)
Deploy: [aqui](https://backend-taskmanager-production.up.railway.app/api-docs/)

## Testes

Os testes foram realizados utilizando Jest. Para executá-los, use o seguinte comando:]

 ```bash
  npm test
  ```

---
## Decisões técnicas

- **Arquitetura MVC:** Ajuda a estruturar bem o código, separando a lógica da aplicação do banco de dados e da API. Isso facilita a manutenção e a escalabilidade do sistema.
- **Prisma:** Utilizado para escrever menos código repetitivo, aumentar a segurança, facilitar a manutenção e escalabilidade e trabalhar com migrations de forma simples.
- **Documentação Swagger:** Facilita a comunicação entre desenvolvedores e consumidores da API, além de garantir que a documentação esteja sempre atualizada e sincronizada com o código.
- **Teste automatizado:** No projeto ajuda a evitar bugs, melhora a manutenção do código e garante que as funcionalidades estejam funcionando corretamente.
- **Deploy:** O deploy realizado na Railway é essencial para garantir que sua aplicação seja utilizada de forma eficiente e confiável, saindo do ambiente de desenvolvimento e se tornando um produto funcional e acessível.

## Possíveis implementações futuras

- **Histórico e Restauração de Tarefas:** Implementar uma funcionalidade para que os usuários possam ver o histórico de tarefas e até mesmo restaurar tarefas deletadas.
- **Implementação de Filtros e Busca Avançada:** Implementar filtros e uma busca eficiente para que os usuários possam encontrar tarefas com mais facilidade.
- **Autenticação e Autorização de Usuários:** Implementar um sistema de login e registro de usuários para autenticação aumentando a segurança.
- **Paginação:** Implementar paginação para melhorar o desempenho e a experiência do usuário.

---
## Url do deploy
[Clique aqui](https://backend-taskmanager-production.up.railway.app/api-docs/) para ver a API no deploy.

# Autor
Claudio Sousa

