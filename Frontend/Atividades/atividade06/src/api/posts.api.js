import axios from "axios";

const url_base = "http://localhost:3000";

export const criarPost = (texto, likes, token) => {
  return axios({
    method: "POST",
    url: url_base + "/posts",
    data: {
      texto,
      likes,
    },
    headers: {
      token,
    },
  });
};

export const updatePost = (token, { id, usuario, texto, likes }) => {
  return axios({
    method: "PUT",
    url: url_base + `/posts/${id}`,
    data: {
      id,
      usuario,
      texto,
      likes,
    },
    headers: {
      token,
    },
  });
};

export const fetchPosts = (token) => {
  return axios({
    method: "GET",
    url: url_base + "/posts",
    headers: {
      token,
    },
  });
};
