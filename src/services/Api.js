import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:4000",
});
const getRequestMethod = async (endpoint) => {
  try {
    const response = await apiClient.get(endpoint);
    return response;
  } catch (e) {
    console.log("Error occurred: " + e.message);
    throw e; // You might want to re-throw the error for handling it further up the call stack
  }
};

const postRequestMethod = async (endpoint, data) => {
  try {
    const response = await apiClient.post(endpoint, data);
    return response;
  } catch (e) {
    console.error("Error occurred: " + e.message);
    throw e; // Re-throw the error for handling it further up the call stack
  }
};

const putRequestMethod = async (endpoint, data) => {
  try {
    const response = await apiClient.put(endpoint, data);
    return response;
  } catch (e) {
    console.error("Error occurred: " + e.message);
    throw e; // Re-throw the error for handling it further up the call stack
  }
};

const deleteRequestMethod = async (endpoint) => {
  try {
    const response = await apiClient.delete(endpoint);
    return response;
  } catch (e) {
    console.error("Error occurred: " + e.message);
    throw e; // Re-throw the error for handling it further up the call stack
  }
};

export {
  getRequestMethod,
  postRequestMethod,
  putRequestMethod,
  deleteRequestMethod,
};
