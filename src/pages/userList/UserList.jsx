import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../sampleData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    };

    const columns = [
        { field: "id", headerName: "ID", width: 60 },
        {
            field: "user", headerName: "User", width: 200,
            renderCell: (params) => (
                <div className="userListUser">
                    <img className="userListImg" src={params.row.avatar} alt="" />
                    <span>{params.row.username}</span>
                </div>
            ),
        },
        { field: "email", headerName: "Email", width: 210 },
        {
            field: "status", headerName: "Status", width: 110,
            renderCell: (params) => (
                <span className={`statusChip ${params.row.status}`}>{params.row.status}</span>
            ),
        },
        { field: "transaction", headerName: "Transaction", width: 140 },
        {
            field: "action", headerName: "Action", width: 150, sortable: false,
            renderCell: (params) => (
                <div className="userListActions">
                    <Link to={`/user/${params.row.id}`}>
                        <button className="userListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)} />
                </div>
            ),
        },
    ];

    return (
        <div className="userList">
            <div className="userListHeader">
                <h2>All Users</h2>
                <Link to="/newUser">
                    <button className="userListAdd">+ Add New</button>
                </Link>
            </div>
            <div className="userListGrid">
                <DataGrid
                    rows={data}
                    columns={columns}
                    pageSizeOptions={[10, 20]}
                    initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
                    checkboxSelection
                    disableRowSelectionOnClick
                    sx={{
                        border: "none",
                        "& .MuiDataGrid-columnHeaders": { backgroundColor: "#faf7f4", fontSize: 13, fontWeight: 700 },
                        "& .MuiDataGrid-row:hover": { backgroundColor: "#faf7f4" },
                        "& .MuiDataGrid-cell": { fontSize: 13 },
                    }}
                />
            </div>
        </div>
    );
}
