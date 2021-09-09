import axios from "axios";
import * as endpoints from "../../constants/endpoints";

const list = async (params) => {
  return axios.get(endpoints.ENDPOINT_GET);
};

const details = async (id) => {
  const params = { id: id };

  return axios.get(endpoints.ENDPOINT_DETAILS, {
    params: params,
  });
};

export { list, details };
