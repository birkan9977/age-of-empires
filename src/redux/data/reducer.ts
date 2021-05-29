import { DATA_UPDATE } from "../action-types";

const dataReducer = (state, action) => {
  switch (action.type) {
    case DATA_UPDATE:
      return { ...state, data: action.payload };

    default:
      return { ...state };
  }
};

export default dataReducer;
