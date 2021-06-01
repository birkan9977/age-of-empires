import { RootState } from "./store";
export const getFiltersState = (state: RootState) => state.filterReducer;
export const getAge = (state:InferredDataState) => state.filterReducer.age;
export const getCost = (state) => state.filterReducer.cost;
export const getDataState = (state) => state.dataReducer.data;
export const getRowIdState = (state) => state.dataReducer.rowId;

export type InferredDataState = ReturnType<typeof getDataState>;
export type InferredFilterState = ReturnType<typeof getFiltersState>;
