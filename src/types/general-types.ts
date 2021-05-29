export interface Age {
  title: string;
  selectionIndex: number;
}

export interface Cost {
  name: string;
  amount: number;
  enabled: boolean;
}

export type State = { age?: {} | Age | null; cost?: {} | Cost[] | null };
export type filterAction = { type: string; payload: {} | Age | Cost };
