import classnames from "@umbrellio/prefix-classnames";
import { classPrefix as prefix } from "../../utils/class-prefix";
import "../../styles/css/units/ages-filter.css";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { agesData as ages } from "../../data/ages-data";
import { changeAgeFilter } from "../../redux/filters/actions";
import { Age } from "../../types/general-types";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { InferredDataState } from "../../redux/selectors";

const cn = classnames(`${prefix}`);

const AgesFilter = (): JSX.Element => {
  const age: Age = useAppSelector(
    (state: InferredDataState) => state.filterReducer.age
  );
  const dispatch = useAppDispatch();
  return (
    <div className={cn("ages")}>
      <h2>Ages</h2>
      <div className={cn("ages-options-container")}>
        <BottomNavigation
          data-testid="age-nav"
          value={age.selectionIndex || 0}
          onChange={(event, newValue) => {
            dispatch(changeAgeFilter(ages[newValue]));
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
        <div className={cn("hidden")}>
          AGE <span data-testid="age-value">{age.title}</span>
        </div>
      </div>
    </div>
  );
};

export default AgesFilter;
