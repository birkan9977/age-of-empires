import { useState, useEffect } from "react";
import classnames from "@umbrellio/prefix-classnames";
import { classPrefix as prefix } from "../../utils/class-prefix";
import "../../styles/css/units/costs-filter.css";
import { costsData } from "../../data/costs-data";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";
import Slider from "@material-ui/core/Slider";
import { findParentId } from "../../utils/helper-functions";
import { changeCostsFilter } from "../../redux/filters/actions";
import { Cost } from "../../types/general-types";
import { useAppSelector, useAppDispatch } from "../../redux/hooks"
import { InferredDataState } from "../../redux/selectors"

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

const cn = classnames(`${prefix}`);

const CostsFilter = (): JSX.Element => {
  const cost:Cost = useAppSelector((state: InferredDataState) => state.filterReducer.cost) 
  const dispatch = useAppDispatch()

  const [state, setState] = useState<{
    wood: boolean;
    food: boolean;
    gold: boolean;
  }>({
    wood: cost[0].enabled || false,
    food: cost[1].enabled || false,
    gold: cost[2].enabled || false,
  });
  const [sliderValues, setSliderValues] = useState<{
    wood: number;
    food: number;
    gold: number;
  }>({
    wood: cost[0].amount || 0,
    food: cost[1].amount || 0,
    gold: cost[2].amount || 0,
  });

  const handleCheckBoxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const handleSliderChange = (event: any, newValue: number | number[]) => {
    //control the mousemove event unexpected results
    if (event.target.className) {
      if (event.target.className.indexOf("MuiSlider") > -1) {
        //slider component does not return a specific attribute because of the mouse events
        //therefore we find the parent node for identifying the slider id.
        const id: string | null = findParentId(event, "slider-context");
        if (typeof id === "string") {
          const index: number = id.indexOf("slider-context");
          const refinedId: string = id.substring(0, index - 1);
          const regex = new RegExp(`(^wood$)|(^food$)|(^gold$)`, "g");
          const found: boolean = refinedId.search(regex) > -1;
          if (found) {
            setSliderValues({ ...sliderValues, [refinedId]: newValue });
          }
        }
      }
    }
  };

  //onMouseOut send the data to redux
  const handleSliderCommit = (event: any, value: number | number[]): void => {
    //console.log("slider ", sliderValues);
    updateDataforRedux();
  };

  const updateDataforRedux = (): void => {
    const costDataForRedux = costsData.map(
      (item): Cost => {
        return {
          name: item.name,
          amount: sliderValues[item.name],
          enabled: state[item.name],
        };
      }
    );
    //console.log("redux data", costDataForRedux);
    dispatch(changeCostsFilter(costDataForRedux));
  };

  useEffect(() => {
    updateDataforRedux();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <div className={cn("costs")}>
      <h2>Costs</h2>
      <div className={cn("costs-options-container")}>
        {costsData.map((costItem, index) => {
          return (
            <div className={cn("row")} key={`cost-items-${index}`}>
              <div className={cn("column", "checkbox-column")}>
                <FormControlLabel
                  control={
                    <GreenCheckbox
                      role="checkbox"
                      aria-checked={state[costItem.name]}
                      data-testid={`${costItem.name}-input`}
                      checked={state[costItem.name]}
                      onChange={handleCheckBoxChange}
                      name={costItem.name}
                    />
                  }
                  label={costItem.label}
                />
              </div>
              <div className={cn("column", "slider-column")}>
                <FormControlLabel
                  control={
                    <div
                      id={`${costItem.name}-slider-context`}
                      className={cn("slider")}
                    >
                      <Slider
                        aria-label={`${costItem.name}-cost-slider-input`}
                        data-testid={`${costItem.name}-slider-input`}
                        aria-valuenow={sliderValues[costItem.name]}
                        aria-valuetext={`${
                          costItem.name
                        } value is ${sliderValues[costItem.name].toString()}`}
                        value={sliderValues[costItem.name]}
                        onChange={handleSliderChange}
                        onChangeCommitted={handleSliderCommit}
                        aria-labelledby="continuous-slider"
                        min={0}
                        max={200}
                        title={`${costItem.label}-${
                          sliderValues[costItem.name]
                        }`}
                        disabled={!state[costItem.name]}
                      />
                    </div>
                  }
                  label={""}
                />
              </div>
              <div
                id={`slider-${costItem.name}-label`}
                data-testid={`${costItem.name}-slider-label`}
                className={cn("column", "slider-label")}
                title="Min: 0; Max: 200"
              >
                {sliderValues[costItem.name]}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CostsFilter;
