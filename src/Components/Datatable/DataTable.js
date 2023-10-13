import React, { useState } from "react";
import "./DataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../DataTableSource";
import { Link } from "react-router-dom";

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const DataTable = () => {
  const [data,setdata]=useState(userRows);
  const handledelet=(id)=>{
   setdata(data.filter(item=>item.id !== id))
  }
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
             <Link to="/users/test" style={{textDecoration:"none"}}></Link>
            <div className="viewButton">View</div>
            <div className="deleteButton"  onClick={()=>handledelet(params.row.id)}>Delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <>
      <div className="datatable">
        <div className="datatableTitle">
          Add New Users
          <Link to="/users/new" className="link" style={{textDecoration:"none"}}>
            Add New
          </Link>
        </div>
        <DataGrid className="datagrid"
          rows={data}
          columns={userColumns.concat(actionColumn)}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 9 },
            },
          }}
          // pageSize={9}
          pageSizeOptions={[9]}
          checkboxSelection
        />
      </div>
    </>
  );
};

export default DataTable;
