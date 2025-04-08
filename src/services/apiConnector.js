import axios from "axios";

// export const axiosInstance = axios.create({});

const baseURL = "http://localhost:4000/api/v1";

export const axiosInstance = axios.create({
  baseURL,
});

export const apiConnector = (method, url, bodyData, headers, params) => {
  console.log("API CONNECTOR", method, url, bodyData, headers, params);
  return axiosInstance({
    method: `${method}`,
    url: `${url}`,
    data: bodyData ? bodyData : null,
    // data: bodyData ? JSON.stringify(bodyData) : null,
    headers: headers ? headers : null,
    params: params ? params : null,
  });

};
