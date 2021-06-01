import { CHANGE_AGE_FILTER, CHANGE_COST_FILTER } from "../action-types";
import { FilterAction, Age, Cost } from "../../types/general-types";

export const changeAgeFilter = (value: Age): FilterAction => {
  const ageFilterAction: FilterAction = {
    type: CHANGE_AGE_FILTER,
    payload: value,
  };

  return ageFilterAction;
};

export const changeCostsFilter = (value: Cost[]): FilterAction => {
  const costsFilterAction: FilterAction = {
    type: CHANGE_COST_FILTER,
    payload: value,
  };

  return costsFilterAction;
};
