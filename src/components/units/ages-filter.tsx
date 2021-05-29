import classnames from "@umbrellio/prefix-classnames";
import { classPrefix as prefix } from "../../utils/class-prefix";
import "../../styles/css/units/ages-filter.css";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { agesData as ages } from "../../data/ages-data";
import { changeAgeFilter } from "../../redux/filters/actions";
import { connect } from "react-redux";

const cn = classnames(`${prefix}`);
const debug = false;

const AgesFilter = (props) => {
  return (
    <div className={cn("ages")}>
      <h2>Ages</h2>
      <div className={cn("ages-options-container")}>
        <BottomNavigation
          value={props.age.selectionIndex ?? 0}
          onChange={(event, newValue) => {
            //setValue(newValue);
            props.changeAgeFilter(ages[newValue]);
          }}
          showLabels
        >
          {ages.map((item, index) => {
            return (
              <BottomNavigationAction
                key={`agetab-${index}`}
                className={cn("age-options")}
                label={item.title}
              />
            );
          })}
        </BottomNavigation>
        {debug && <div>AGE {props.age.title}</div>}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { age } = state.filters;
  return { age };
};

export default connect(mapStateToProps, { changeAgeFilter })(AgesFilter);
