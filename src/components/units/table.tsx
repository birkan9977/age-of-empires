import { DataGrid } from "@material-ui/data-grid";
import { connect } from "react-redux";
import classnames from "@umbrellio/prefix-classnames";
import { classPrefix as prefix } from "../../utils/class-prefix";
import "../../styles/css/units/table-data.css";
import { setSelectedRow } from "../../redux/data/actions"
import { useHistory } from "react-router-dom";

const cn = classnames(`${prefix}`);

type Row = {
  id:number;
  name:string;
  age:string;
  cost?:{
    Wood?:number | null;
    Food?:Number | null;
    Gold?:Number | null;
  };
}

const DataTable = (props) => {
  const { data, setRowId } = props;
  const history = useHistory();

  const handleRowSelect = (gridRow) => {
    //console.log(gridRow, typeof gridRow)
    setRowId(gridRow.row.id);
    history.push("/unit-detail");
  };
  
  const columns = [
    { field: "id", headerName: "id", width: 130 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "age", headerName: "Age", width: 150 },
    { field: "costs", headerName: "Costs", width: 200 },
  ];

  
  let rows:Row[] = [];

  if (data) {
    rows = data.map((dataRow:Row) => {
      let row = {
        id: dataRow.id,
        name: dataRow.name,
        age: dataRow.age,
        costs: "",
      };
      if (dataRow.cost) {
        const costField: string[] = [];
        if (dataRow.cost.Wood)
          costField.push(`Wood: ${dataRow.cost.Wood}`);
        if (dataRow.cost.Food)
          costField.push(`Food: ${dataRow.cost.Food}`);
        if (dataRow.cost.Gold)
          costField.push(`Gold: ${dataRow.cost.Gold}`);
        const costString = costField.join(", ");
        row.costs = costString;
      } else {
        row.costs = "No Cost";
      }
      return row;
    });
  }
  //MuiDataGrid-row
  return (
    <div className={cn("table-container")}>
      <div className={cn("records-number-text")}>
        Number of Records Displayed:{" "}
        <span data-testid="number-of-records">{rows.length}</span>
      </div>
      <div className={cn("table")}>
        <DataGrid
          hideFooterSelectedRowCount
          rows={rows}
          columns={columns}
          pageSize={25}
          disableColumnSelector
          onRowClick={handleRowSelect}
          rowsPerPageOptions={[25, 50, 100]}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { data } = state.dataReducer;
  return { data };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setRowId: (rowId:number)=> dispatch(setSelectedRow(rowId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataTable);
