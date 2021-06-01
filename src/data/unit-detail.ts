const refineUnitDetail = (data) => {
  const refineCost = (item) => {
    if (!data.cost) return "None";
    return data.cost[item] ? data.cost[item] : "None";
  };

  const refineField = (item) => {
    if (!data[item]) return "NA*";
    return data[item];
  };

  const unitDetailTable = [
    ["ID", data.id],
    ["Name", data.name],
    ["Description", data.description],
    ["Min. Required. Age", data.age],
    ["Wood Cost", refineCost("Wood")],
    ["Food Cost", refineCost("Food")],
    ["Gold Cost", refineCost("Gold")],
    ["Build Time", refineField("build_time")],
    ["Reload Time", refineField("reload_time")],
    ["Hit Points", refineField("hit_points")],
    ["Attact", refineField("attack")],
    ["Accuracy", refineField("accuracy")],
  ];

  return unitDetailTable;
};

export default refineUnitDetail;
