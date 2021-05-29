import { DataGrid } from "@material-ui/data-grid";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import classnames from "@umbrellio/prefix-classnames";
import { classPrefix as prefix } from "../../utils/class-prefix";
import "../../styles/css/units/table-data.css";
const cn = classnames(`${prefix}`);

const DataTable = (props) => {
  const { data } = props;
  const [rowid, setRowId] = useState(0);

  const handleRowSelect: any = (e) => {
    setRowId(e);
  };
  useEffect(() => {
    if (data) {
      console.log(rowid);
    }
  });
  console.log("DATA TABLE", data);
  const columns = [
    { field: "id", headerName: "id", width: 130 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "age", headerName: "Age", width: 150 },
    { field: "costs", headerName: "Costs", width: 200 },
  ];

  let rows = [];

  if (data) {
    rows = data.map((dataRow) => {
      let row = {
        id: dataRow.id,
        name: dataRow.name,
        age: dataRow.age,
        costs: "",
      };
      if (dataRow.cost) {
        const costStringArray: string[] = [];
        if (dataRow.cost.hasOwnProperty("Wood"))
          costStringArray.push(`Wood: ${dataRow.cost.Wood}`);
        if (dataRow.cost.hasOwnProperty("Food"))
          costStringArray.push(`Food: ${dataRow.cost.Food}`);
        if (dataRow.cost.hasOwnProperty("Gold"))
          costStringArray.push(`Gold: ${dataRow.cost.Gold}`);
        const costString = costStringArray.join(", ");
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
        Number of Records Displayed: {rows.length}
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

export default connect(mapStateToProps)(DataTable);
