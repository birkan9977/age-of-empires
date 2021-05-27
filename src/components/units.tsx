import classnames from "@umbrellio/prefix-classnames";
import { classPrefix as prefix } from "../utils/class-prefix";
import "../styles/css/units.css";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { useEffect, useState } from "react";
import { agesData as ages } from "../data/ages-data";
import type { Filters } from "../types/general-types";

const cn = classnames(`${prefix}`);

const Units = () => {
  const initFilters: Filters = {
    filters: {
      age: {
        title: "All",
        selectionIndex: 0,
      },
      cost: {
        wood: 10,
        food: 20,
        gold: 30,
      },
    },
  };

  const [state, setState] = useState(initFilters);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div className={cn("units")}>
      <h1>Units Page</h1>
      <div className={cn("ages")}>
        <h2>Ages</h2>
        <div className={cn("ages-options-container")}>
          <BottomNavigation
            value={state?.filters?.age?.selectionIndex}
            onChange={(event, newValue) => {
              setState({
                ...state,
                filters: {
                  age: {
                    title: ages[newValue]["title"],
                    selectionIndex: newValue,
                  },
                },
              });
            }}
            showLabels
          >
            {ages.map((item, index) => {
              return (
                <BottomNavigationAction
                  key={index}
                  className={cn("age-options")}
                  label={item.title}
                />
              );
            })}
          </BottomNavigation>
        </div>
      </div>
    </div>
  );
};

export default Units;
