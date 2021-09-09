import { listRemote as listRemoteRepository } from "../repositories";
import { detailsRemote as detailsRemoteRepository } from "../repositories";
import { Left, Right } from "../../utils/response";

const list = async () => {
  try {
    const response = await listRemoteRepository();

    return Right(response);
  } catch (error) {
    return Left({ message: "erro no serviço ....", data: error });
  }
};

const details = async () => {
  try {
    const response = await detailsRemoteRepository();

    return Right(response);
  } catch (error) {
    return Left({ message: "erro no serviço ....", data: error });
  }
};

export { list, details };
