import { DATA_UPDATE, ROW_ID } from "../action-types";

export const updateData = (value) => {
  const dataUpdateAction = {
    type: DATA_UPDATE,
    payload: value,
  };

  return dataUpdateAction;
};
export const setSelectedRow = (rowId:number) => {
  const selectedRowAction = {
    type: ROW_ID,
    payload: rowId,
  };

  return selectedRowAction;
};
