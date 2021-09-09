import { listRemote as listRemoteData } from "../data";
import { detailsRemote as detailsRemoteData } from "../data";

const list = async () => {
  try {
    const response = await listRemoteData();

    return response;
  } catch (e) {
    throw e;
  }
};

const details = async () => {
  try {
    const response = await detailsRemoteData();

    return response;
  } catch (e) {
    throw e;
  }
};

export { list, details };
