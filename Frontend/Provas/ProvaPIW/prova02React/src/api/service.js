import axios from "axios";

const url = "https://62cc3547a080052930a7709b.mockapi.io/todo";

export const findAll = () => {
  return axios({
    method: "GET",
    url: url,
  });
};

export const save = (titulo, corpo) => {
  return axios({
    method: "POST",
    url: url,
    data: { titulo, corpo },
  });
};
