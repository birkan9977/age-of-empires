import { DATA_UPDATE, ROW_ID } from "../action-types";
type Action = {
  type:string;
  payload:number | [];
}
const dataReducer = (state, action:Action) => {
  switch (action.type) {
    case DATA_UPDATE:
      return { ...state, data: action.payload };
    case ROW_ID:
      return { ...state, rowId: action.payload };

    default:
      return { ...state };
  }
};

export default dataReducer;
