import { CHANGE_AGE_FILTER, CHANGE_COST_FILTER } from "../action-types";
import { initialState } from "../../data/initial-state";
import { State, FilterAction } from "../../types/general-types";

const filterReducer = (state: State = initialState, action: FilterAction) => {
  switch (action.type) {
    case CHANGE_AGE_FILTER:
      return { ...state, age: action.payload };

    case CHANGE_COST_FILTER:
      return { ...state, cost: action.payload };

    default:
      return { ...state };
  }
};

export default filterReducer;
