# RESTFUL API de Usuários

API desenvolvida em Node.js durante aula do curso de JavaScript da HCode na Udemy.

### Instalação
```
npm install
```


### Excutando servidor
```
npm start
```

## Rotas
Obter todos os usuários:
```
GET /users
```

Exemplo de resultado:
```json
{
    "users":[]
}
```

Cadastrar um novo usuário:
```
POST /users
```
name e email são obrigatorios para o cadastro do usuário.

Exemplo de resultado:
```json
{
    "_id":"BGYubAM75RkPIc2U",
    "name":"Tony Stark"
    "email":"tonystark@stark.com"
}
```

Obter dados de um usuário:
```
GET /users/:id
```

Exemplo de resultado:
```json
{
    "_id":"BGYubAM75RkPIc2U",
    "name":"Tony Stark"
    "email":"tonystark@stark.com"
}
```

Editar um usuário:
```
PUT /users/:id
```

Exemplo de resultado:
```json
{
    "_id":"BGYubAM75RkPIc2U"
}
```

Excluir um usuário:
```
DELETE /users/:id
```
Exemplo de resultado:
```json
{
    "_id":"BGYubAM75RkPIc2U"
}
```
