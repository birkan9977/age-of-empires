import classnames from "@umbrellio/prefix-classnames";
import { classPrefix as prefix } from "../../utils/class-prefix";
import "../../styles/css/units.css";
import AgesFilter from "../units/ages-filter";
import CostsFilter from "../units/costs-filter";
import DataTable from "../units/table";
const cn = classnames(`${prefix}`);

const Units = () => {
  return (
    <div className={cn("units")}>
      <h1>Units Page</h1>
      <div id="ages-filter">
        <AgesFilter />
      </div>
      <div id="costs-filter">
        <CostsFilter />
      </div>
      <div id="data-table" className={cn("data-container")}>
        <DataTable />
      </div>
    </div>
  );
};

export default Units;
