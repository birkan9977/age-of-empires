import { CHANGE_AGE_FILTER, CHANGE_COST_FILTER } from "../action-types";
import { filterAction, Age, Cost } from "../../types/general-types";

export const changeAgeFilter = (value: Age): filterAction => {
  const ageFilterAction: filterAction = {
    type: CHANGE_AGE_FILTER,
    payload: value,
  };

  return ageFilterAction;
};

export const changeCostsFilter = (value: Cost): filterAction => {
  const costsFilterAction: filterAction = {
    type: CHANGE_COST_FILTER,
    payload: value,
  };

  return costsFilterAction;
};
