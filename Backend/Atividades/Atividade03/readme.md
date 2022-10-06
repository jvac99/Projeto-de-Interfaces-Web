# Atividade 3

## Node.js, Express.js e Mongoose REST

#### João Victor Aquino Correia (470914)

## Node.js, Express.js e Mongoose REST

#### João Victor Aquino Correia (470914)

**OBS:**

- Na questão 2 em evitar de enviar senha do usuário para o cliente, o exemplo está com a senha, eu fiz duas funções uma com a senha e outra sem, a que está sendo chamada é a sem a senha.

```
const render = ({ _id, nome, email }) => {
  return {
    id: _id,
    nome: nome,
    email: email,
  };
};

const renderComSenha = ({ _id, nome, email, senha }) => {
  return {
    id: _id,
    nome: nome,
    email: email,
    senha: senha,
  };
};
```

- Eu organizei os endpoints de uma forma que achei mais organizado.

  - GET /api/usuarios/:id/posts (está em post.controller)

  - GET /api/posts/:id/comentarios (está em comentario.controller)
