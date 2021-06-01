export interface Age {
  title: string;
  selectionIndex: number;
}

export interface Cost {
  name: string;
  amount: number;
  enabled: boolean;
}

export type FilterState = {
  age: Age;
  cost: Cost[];
};

export interface RawData {
  id: number;
  name: string;
  age?: string;
  description?: string;
}

export interface UnitDetail {}

export interface DataState {
  data?: [] | RawData[] | null;
  rowId?: number;
  unitDetail?: [(string | number)[], string[]];
}

export type FilterAction = { type: string; payload: {} | Age | Cost[] };
