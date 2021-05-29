import {Age , Cost} from "../types/general-types"

export const initialState:{ age: Age; cost: Cost[] } = {
  age: {
    title: "All",
    selectionIndex: 0,
  },
  cost: [
    {
      name: "wood",
      amount: 20,
      enabled: false,
    },
    {
      name: "food",
      amount: 20,
      enabled: false,
    },
    {
      name: "gold",
      amount: 20,
      enabled: false,
    },
  ],
};
