import { DATA_UPDATE, ROW_ID, UNIT_DETAIL } from "../action-types";

type ActionRowId = {
  rowId: number;
};
type Action = { type: string; payload: {} | number | ActionRowId | any };

const dataReducer = (state, action: Action) => {
  switch (action.type) {
    case DATA_UPDATE:
      return { ...state, data: action.payload };
    case ROW_ID:
      return { ...state, rowId: action.payload };
    case UNIT_DETAIL:
      return { ...state, unitDetail: action.payload };

    default:
      return { ...state };
  }
};

export default dataReducer;
