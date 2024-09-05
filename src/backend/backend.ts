import axios from "axios";

/*
  This is backend.ts. Here are the functions that call endpoints on the backend,
  mostly for fetching data from the database throught the backend controllers.
*/

export const getExample = async () => {
  return axios.get(`${import.meta.env.VITE_BACKEND_URI}/get-example`);
};
