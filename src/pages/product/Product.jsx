import { Link, useParams } from "react-router-dom";
import "./product.css";
import Charts from "../../components/charts/Charts";
import { productData, productRows } from "../../sampleData";
import { Publish } from "@material-ui/icons";
import { useState } from "react";

export default function Product() {
    const { productId } = useParams();
    const found = productRows.find(p => p.id === Number(productId));

    const [form, setForm] = useState({
        productname: found?.productname ?? "",
        price: found?.price ?? "",
        stock: found?.stock ?? "",
        status: found?.status ?? "active",
    });

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="product">
            <div className="productTitleContainer">
                <h2 className="productTitle">Product Detail</h2>
                <Link to="/newProduct">
                    <button className="productAddButton">+ New Product</button>
                </Link>
            </div>

            <div className="productTop">
                <div className="productTopLeft">
                    <Charts data={productData} dataKey="Sales" title="Sales Performance" />
                </div>

                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img
                            src={found?.img ?? "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=80&h=80&fit=crop"}
                            alt={found?.productname}
                            className="productInfoImg"
                        />
                        <span className="productName">{found?.productname ?? "Unknown Product"}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">ID</span>
                            <span className="productInfoValue">{found?.id ?? "—"}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Stock</span>
                            <span className="productInfoValue">{found?.stock ?? "—"}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Status</span>
                            <span className="productInfoValue">{found?.status ?? "—"}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Price</span>
                            <span className="productInfoValue">{found?.price ?? "—"}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="productBottom">
                <span className="productUpdateTitle">Edit Product</span>
                <form className="productForm" onSubmit={handleSubmit}>
                    <div className="productFormLeft">
                        <div className="productFormItem">
                            <label>Product Name</label>
                            <input
                                type="text"
                                name="productname"
                                value={form.productname}
                                onChange={handleChange}
                                placeholder="Product name"
                                className="productFormInput"
                            />
                        </div>
                        <div className="productFormItem">
                            <label>Price</label>
                            <input
                                type="text"
                                name="price"
                                value={form.price}
                                onChange={handleChange}
                                placeholder="e.g. $49.99"
                                className="productFormInput"
                            />
                        </div>
                        <div className="productFormItem">
                            <label>Stock</label>
                            <input
                                type="number"
                                name="stock"
                                value={form.stock}
                                onChange={handleChange}
                                placeholder="Quantity"
                                className="productFormInput"
                            />
                        </div>
                        <div className="productFormItem">
                            <label>Status</label>
                            <select
                                name="status"
                                value={form.status}
                                onChange={handleChange}
                                className="productFormSelect"
                            >
                                <option value="active">Active</option>
                                <option value="low stock">Low Stock</option>
                                <option value="out of stock">Out of Stock</option>
                            </select>
                        </div>
                    </div>

                    <div className="productFormRight">
                        <div className="productUpload">
                            <img
                                src={found?.img ?? "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop"}
                                alt="product"
                                className="productUploadImg"
                            />
                            <label htmlFor="productFile" className="productUploadLabel">
                                <Publish />
                            </label>
                            <input type="file" id="productFile" style={{ display: "none" }} />
                        </div>
                        <button type="submit" className="productButton">Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
