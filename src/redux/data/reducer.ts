import { DATA_UPDATE, ROW_ID, UNIT_DETAIL } from "../action-types";
import { DataState } from "../../types/general-types";
import { dataInitialState } from "../../data/data-initial-state";

type Action = { type: string; payload: DataState };

const dataReducer = (state: DataState = dataInitialState, action: Action) => {
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
