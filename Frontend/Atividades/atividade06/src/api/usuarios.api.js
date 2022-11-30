import axios from "axios";

const url_base = "http://localhost:3000";

export const login = (email, senha) => {
  return axios({
    method: "POST",
    url: url_base + "/usuarios/logar",
    data: {
      email,
      senha,
    },
  });
};

export const criarUsuario = (nome, email, senha) => {
  return axios({
    method: "POST",
    url: url_base + "/usuarios",
    data: {
      nome,
      email,
      senha,
    },
  });
};

export const fetchusuarios = (token) => {
  return axios({
    method: "GET",
    url: url_base + "/usuarios",
    headers: {
      token,
    },
  });
};
