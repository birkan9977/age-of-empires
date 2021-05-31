import classnames from "@umbrellio/prefix-classnames";
import { classPrefix as prefix } from "../../utils/class-prefix";
import "../../styles/css/units/ages-filter.css";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { agesData as ages } from "../../data/ages-data";
import { changeAgeFilter } from "../../redux/filters/actions";
import { connect } from "react-redux";
import { Age } from "../../types/general-types";

const cn = classnames(`${prefix}`);

type Prop = {
  age?: Age | any;
  changeAgeFilter?: { type: string; payload: {} } | any;
};

const AgesFilter = (props: Prop): JSX.Element => {
  const { age, changeAgeFilter } = props;

  return (
    <div className={cn("ages")}>
      <h2>Ages</h2>
      <div className={cn("ages-options-container")}>
        <BottomNavigation
          value={age.selectionIndex ?? 0}
          onChange={(event, newValue) => {
            //setValue(newValue);
            changeAgeFilter(ages[newValue]);
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
        {/*below div is only for testing purposes*/}
        <div className={cn("hidden")}>
          AGE <span data-testid="age-value">{age.title}</span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { age } = state.filterReducer;
  return { age };
};

export default connect(mapStateToProps, { changeAgeFilter })(AgesFilter);
