import { CHANGE_AGE_FILTER, CHANGE_COST_FILTER } from "../action-types";

export const changeAgeFilter = (value) => {
  const ageFilterAction = {
    type: CHANGE_AGE_FILTER,
    payload: value,
  };

  return ageFilterAction;
};

export const changeCostsFilter = (value) => {
  const costsFilterAction = {
    type: CHANGE_COST_FILTER,
    payload: value,
  };

  return costsFilterAction;
};
