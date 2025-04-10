# Atividade Avaliativa (e-commerce especializada em produtos esportivos)

Bem-vindo ao repositório de desenvolvimento de API, Este guia irá ajudá-lo a configurar e executar o projeto localmente.

## Pré-requisitos

Certifique-se de ter o seguinte instalado em sua máquina:
- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [npm](https://www.npmjs.com/) (geralmente instalado junto com o Node.js)

## Passo a passo

1. **Clone o repositório**  
    Clone este repositório para sua máquina local:
    ```bash
    git clone https://github.com/Vinirocha388/AtividadeAvaliativa-10-04
    cd AtividadeAvaliativa-10-04
    ```

2. **Instale as dependências**  
    Execute o comando abaixo para instalar todas as dependências do projeto:
    ```bash
    npm install
    ```


3. **Configure o Prisma**  
    Certifique-se de que o arquivo `.env` está configurado corretamente com as informações do banco de dados. Um exemplo de configuração pode ser encontrado no arquivo `DATABASE_URL="file:./dev.db"`.

4. **Execute as migrações do Prisma**  
    Para criar as tabelas no banco de dados, execute:
    ```bash
    npx prisma migrate dev
    ```

5. **Inicie o servidor**  
    Após configurar o banco de dados, inicie o servidor:
    ```bash
    npm run dev
    ```

6. **Acesse o projeto**  
    Abra o postman ou qualquer outro consultor de API e acesse `http://localhost:3000` para visualizar as requisicões e produtos criados.

## Exemplos de Requisições

### **Produtos**

#### **GET /produtos**
Retorna todos os produtos cadastrados.

Exemplo:
```bash
 GET http://localhost:3000/produtos
```

#### **POST /produtos**
Cria um novo produto.

Exemplo:
```bash
 POST http://localhost:3000/produtos \
'{
  "name": "Produto A",
  "price": "100.00",
  "category": "Categoria A",
  "brand": "Marca A",
  "stock": 10
}'
```

#### **GET /produtos/:id**
Retorna um produto específico pelo ID.

Exemplo:
```bash
 GET http://localhost:3000/produtos/1
```

#### **PUT /produtos/:id**
Atualiza um produto pelo ID.

Exemplo:
```bash
 PUT http://localhost:3000/produtos/1 \
 "Content-Type: application/json" \
 '{
  "name": "Produto Atualizado",
  "price": "150.00",
  "category": "Categoria Atualizada",
  "brand": "Marca Atualizada",
  "stock": 20
}'
```

#### **DELETE /produtos/:id**
Deleta um produto pelo ID.

Exemplo:
```bash
 DELETE http://localhost:3000/produtos/1
```

## Decisões de Design e Arquitetura

- **Estrutura MVC**: O projeto foi estruturado seguindo o padrão MVC (Model-View-Controller) para facilitar a separação de responsabilidades.
- **Prisma ORM**: Utilizado para interagir com o banco de dados SQLite, simplificando operações de CRUD.
- **Express.js**: Framework utilizado para gerenciar as rotas e middleware do servidor.
- **Variáveis de Ambiente**: Configurações sensíveis, como a URL do banco de dados, são gerenciadas por meio de variáveis de ambiente.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express.js**: Framework para criação de APIs.
- **Prisma ORM**: Ferramenta para manipulação do banco de dados.
- **SQLite**: Banco de dados utilizado no projeto.
- **dotenv**: Gerenciamento de variáveis de ambiente.
- **Nodemon**: Ferramenta para reiniciar automaticamente o servidor durante o desenvolvimento.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).


# Criador
 Vinícius Rocha
