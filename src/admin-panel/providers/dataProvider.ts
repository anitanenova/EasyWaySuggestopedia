import { fetchUtils } from "react-admin";
import { stringify } from "query-string";

import appsettings from "../../appsettings.json";

const apiUrl = appsettings.connection.baseUrl;

const httpClient = (url: string, options: any = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  // // add your own headers here
  options.headers.set("Access-Control-Allow-Origin", "http://localhost");
  options.headers.set("Access-Control-Expose-Headers", "Content-Range");
  options.headers.set("React-Admin-Filter", "Apply");

  return fetchUtils.fetchJson(url, options);
};

export const dataProvider = {
  getList: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    return httpClient(url).then(({ headers, json }) => ({
      data: json.map((resource) => ({ ...resource, id: resource._id })),
      total: parseInt(headers.get("content-range").split("/").pop(), 10),
    }));
  },

  update: (resource, params) => {
    return httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: { ...json, id: json._id } }));
  },

  getOne: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
      data: { ...json, id: json._id },
    })),

  getMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    return httpClient(url).then(({ json }) => ({
      data: json.map((resource) => ({ ...resource, id: resource._id })),
    }));
  },

  getManyReference: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    return httpClient(url).then(({ headers, json }) => ({
      data: json.map((resource) => ({ ...resource, id: resource._id })),
      total: parseInt(headers.get("content-range").split("/").pop(), 10),
    }));
  },

  updateMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json }));
  },

  create: (resource, params) =>
    httpClient(`${apiUrl}/${resource}`, {
      method: "POST",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({
      data: { ...params.data, id: json._id },
    })),

  delete: (resource, params) => {
    return httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "DELETE",
    }).then(({ json }) => {
      return { data: { ...json } };
    });
  },

  deleteMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: "DELETE",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json }));
  },
};
