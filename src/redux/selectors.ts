export const getFiltersState = (state) => state.filterReducer;
export const getAge = (state) => state.filterReducer.age;
export const getCost = (state) => state.filterReducer.cost;
export const getDataState = (state) => state.dataReducer.data;
export const getRowIdState = (state) => state.dataReducer.rowId;
