/* eslint-disable */
import { Promise } from "core-js";
import HTTP from "@/utils/http";
const api = new HTTP("clientes");

const listarClientes = async ({ commit }, payload) => {
  return await api
    .get(`clientes`, payload)
    .then(async (resp) => {
      return Promise.resolve(resp);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

const listarClientesPorCodigo = async ({ commit }, payload) => {
  return await api
    .get(`clientes/${payload.id}`)
    .then(async (resp) => {
      return Promise.resolve(resp);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

const salvar = async ({ commit }, payload) => {
  return await api
    .post("clientes", payload)
    .then(async (resp) => {
      return Promise.resolve(resp);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

const remover = async ({ commit }, payload) => {
  return await api
    .delete(`clientes/${payload.id}`, { data: payload })
    .then(async (resp) => {
      return Promise.resolve(resp);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

const atualizar = async ({ commit }, payload) => {
  return await api
    .put(`clientes/${payload.id}`, payload)
    .then(async (resp) => {
      return Promise.resolve(resp);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

export default {
  listarClientes,
  listarClientesPorCodigo,
  salvar,
  remover,
  atualizar,
};
