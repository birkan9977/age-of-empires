export default function filterData(units, filtersState) {
  const { age, cost } = filtersState;
  let filteredData = units;

  if (age.selectionIndex !== 0) {
    //an option other than 'all' selected for age filter
    filteredData = units.filter((unit) => {
      return unit.age === age.title;
    });
  }

  const costEnabled = cost[0].enabled || cost[1].enabled || cost[2].enabled;

  if (costEnabled) {
    filteredData = filteredData.map((unit) => {
      if (unit.cost) {
        let wood = true;
        if (unit.cost.Wood && cost[0].enabled) {
          wood =
            unit.cost.Wood >= cost[0].amount[0] &&
            unit.cost.Wood <= cost[0].amount[1];
        }
        let food = true;
        if (unit.cost.Food && cost[1].enabled) {
          food =
            unit.cost.Food >= cost[1].amount[0] &&
            unit.cost.Food <= cost[1].amount[1];
        }
        let gold = true;
        if (unit.cost.Gold && cost[2].enabled) {
          gold =
            unit.cost.Gold >= cost[2].amount[0] &&
            unit.cost.Gold <= cost[2].amount[1];
        }

        if (wood && food && gold) return unit;
        return null;
      }
      return unit;
    });
  }

  filteredData = filteredData.filter((unit) => unit !== null);

  return filteredData;
}
