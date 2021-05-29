import { DATA_UPDATE } from "../action-types";

export const updateData = (value) => {
  const dataUpdateAction = {
    type: DATA_UPDATE,
    payload: value,
  };

  return dataUpdateAction;
};
