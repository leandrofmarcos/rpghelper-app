import axios from "axios";
import * as endpoints from "../constants/endpoints";

export const http = axios.create({
  baseURL: endpoints.URL_BASE,
  timeout: 1000,
});

export default http;
