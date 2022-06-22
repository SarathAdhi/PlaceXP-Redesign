import axios from "axios";
import { Url } from "../constants/Url";

const Axios = axios.create({
  baseURL: Url,
  headers: {
    "Content-Type": "application/json",
  },
});

export const AxiosGet = async (url) => {
  const { data } = await Axios.get(url);
  return data;
};

export const AxiosPost = async (url, objects) => {
  const response = await Axios.post(url, objects);
  return response;
};
