import axios from "axios";

const url_base = "http://localhost:3000";

export const criarComentario = (texto, id_post, token) => {
  return axios({
    method: "POST",
    url: url_base + "/comentarios",
    headers: {
      token,
    },
    data: {
      texto,
      id_post,
    },
  });
};

export const fetchComentarios = (token) => {
  return axios({
    method: "GET",
    url: url_base + "/comentarios",
    headers: {
      token,
    },
  });
};

export const fetchComentariosPorPost = (token, id_post) => {
  return axios({
    method: "GET",
    url: url_base + `/posts/${id_post}/comentarios`,
    headers: {
      token,
    },
  });
};
