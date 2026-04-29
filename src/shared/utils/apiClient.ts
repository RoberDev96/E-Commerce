import axios from "axios";

export const apiClient = axios.create({
  baseURL: 'https://fakestoreapi.com/products',
  timeout: 5000
})