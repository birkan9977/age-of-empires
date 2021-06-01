import classnames from "@umbrellio/prefix-classnames";
import { classPrefix as prefix } from "../../utils/class-prefix";
import clsx from "clsx";
import "../../styles/css/unit-detail.css";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { useEffect } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 0.1,
    },
    paperTitle: {
      padding: "10px",
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    paperDesc: {
      padding: "10px",
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);
const cn = classnames(`${prefix}`);

type Prop = {
  unitDetail?: any;
};
const UnitDetail = ({ unitDetail }: Prop): JSX.Element => {
  useEffect(() => {
    const element = document.getElementById("unit-detail");
    if (element) {
      window.scroll(0, element.offsetTop - 200);
    }
  }, [unitDetail]);

  const classes = useStyles();
  return (
    <div id="unit-detail" className={cn("unit-detail")}>
      <h1>Unit Detail Page</h1>
      <div className={clsx(classes.root, cn("table-container"))}>
        {unitDetail
          ? unitDetail.map((row, index: number) => {
              return (
                <div className={cn("grid-container")} key={`row-${index}`}>
                  <Grid container spacing={1}>
                    <Grid item xs={12} sm={3} role="field-name">
                      <Paper
                        className={clsx(classes.paperTitle, cn("paper-col1"))}
                      >
                        {row[0]}:
                      </Paper>
                    </Grid>
                    <Grid item xs={12} sm={9} role="field-description">
                      <Paper
                        className={clsx(classes.paperDesc, cn("paper-col2"))}
                      >
                        {row[1]}
                      </Paper>
                    </Grid>
                  </Grid>
                </div>
              );
            })
          : null}
      </div>
      <div className={cn("foor-note")}>
        <sup>*</sup>NA: Not Available
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { unitDetail } = state.dataReducer;
  return { unitDetail };
};

export default connect(mapStateToProps)(UnitDetail);
