export interface Age {
  title: string;
  selectionIndex: number;
}

export interface Cost {
  wood: number;
  food: number;
  gold: number;
}

export interface Filters {
  filters: {
    age?: Age;
    cost?: Cost;
  };
}
