import { DATA_UPDATE, ROW_ID, UNIT_DETAIL } from "../action-types";

export const updateData = (value) => {
  const dataUpdateAction = {
    type: DATA_UPDATE,
    payload: value,
  };

  return dataUpdateAction;
};
export const setSelectedRow = (id: number) => {
  const selectedRowAction = {
    type: ROW_ID,
    payload: id,
  };

  return selectedRowAction;
};

export const setUnitDetail = (value) => {
  const unitDetailAction = {
    type: UNIT_DETAIL,
    payload: value,
  };

  return unitDetailAction;
};
