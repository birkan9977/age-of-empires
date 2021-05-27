import classnames from "@umbrellio/prefix-classnames";
import { classPrefix as prefix } from "../utils/class-prefix";
import "../styles/css/units.css";
const cn = classnames(`${prefix}`);

const Units = () => {
  return (
    <div className={cn("units")}>
      <h1>Units Page</h1>
      <div></div>
    </div>
  );
};

export default Units;
