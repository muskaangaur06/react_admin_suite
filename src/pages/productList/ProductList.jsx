import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { productRows } from "../../sampleData";

export default function ProductList() {
    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    };

    const columns = [
        { field: "id", headerName: "ID", width: 60 },
        {
            field: "product", headerName: "Product", width: 220,
            renderCell: (params) => (
                <div className="productListItem">
                    <img className="productListImg" src={params.row.img} alt="" />
                    <span>{params.row.productname}</span>
                </div>
            ),
        },
        { field: "stock", headerName: "Stock", width: 100 },
        {
            field: "status", headerName: "Status", width: 120,
            renderCell: (params) => (
                <span className={`statusChip ${params.row.status.replace(" ", "-")}`}>{params.row.status}</span>
            ),
        },
        { field: "price", headerName: "Price", width: 120 },
        {
            field: "action", headerName: "Action", width: 150, sortable: false,
            renderCell: (params) => (
                <div className="productListActions">
                    <Link to={`/product/${params.row.id}`}>
                        <button className="productListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className="productListDelete" onClick={() => handleDelete(params.row.id)} />
                </div>
            ),
        },
    ];

    return (
        <div className="productList">
            <div className="productListHeader">
                <h2>All Products</h2>
                <Link to="/newProduct">
                    <button className="productListAdd">+ Add New</button>
                </Link>
            </div>
            <div className="productListGrid">
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
