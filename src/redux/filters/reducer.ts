import { CHANGE_AGE_FILTER, CHANGE_COST_FILTER } from "../action-types";
import { filtersInitialState } from "../../data/filters-initial-state";
import { FilterState, FilterAction } from "../../types/general-types";

const filterReducer = (
  state: FilterState = filtersInitialState,
  action: FilterAction
) => {
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
