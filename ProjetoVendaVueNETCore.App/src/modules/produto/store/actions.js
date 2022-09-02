/* eslint-disable */
import { Promise } from "core-js";
import HTTP from "@/utils/http";
const api = new HTTP("produtos");

const listarProdutos = async ({ commit }, payload) => {
  return await api
    .get(`produtos`, payload)
    .then(async (resp) => {
      return Promise.resolve(resp);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

const listarProdutosPorCodigo = async ({ commit }, payload) => {
  return await api
    .get(`produtos/${payload.id}`)
    .then(async (resp) => {
      return Promise.resolve(resp);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

const salvar = async ({ commit }, payload) => {
  return await api
    .post("produtos", payload)
    .then(async (resp) => {
      return Promise.resolve(resp);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

const remover = async ({ commit }, payload) => {
  return await api
    .delete(`produtos/${payload.id}`, { data: payload })
    .then(async (resp) => {
      return Promise.resolve(resp);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

const atualizar = async ({ commit }, payload) => {
  return await api
    .put(`produtos/${payload.id}`, payload)
    .then(async (resp) => {
      return Promise.resolve(resp);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

export default {
  listarProdutos,
  listarProdutosPorCodigo,
  salvar,
  remover,
  atualizar,
};
