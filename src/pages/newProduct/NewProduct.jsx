import "./newProduct.css";
import { useState } from "react";

export default function NewProduct() {
    const [form, setForm] = useState({
        name: "",
        price: "",
        stock: "",
        status: "active",
        image: null,
    });
    const [preview, setPreview] = useState(null);

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleFile = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setForm(prev => ({ ...prev, image: file }));
        setPreview(URL.createObjectURL(file));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="newProduct">
            <h2 className="addProductTitle">New Product</h2>

            <form className="addProductForm" onSubmit={handleSubmit}>
                <div className="addProductItem addProductImageItem">
                    <label>Product Image</label>
                    <label htmlFor="productImg" className="addProductImageLabel">
                        {preview
                            ? <img src={preview} alt="preview" className="addProductPreview" />
                            : <span className="addProductImagePlaceholder">Click to upload</span>
                        }
                    </label>
                    <input type="file" id="productImg" accept="image/*" onChange={handleFile} style={{ display: "none" }} />
                </div>

                <div className="addProductItem">
                    <label>Product Name</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="e.g. Wireless Headphones"
                    />
                </div>

                <div className="addProductItem">
                    <label>Price</label>
                    <input
                        type="text"
                        name="price"
                        value={form.price}
                        onChange={handleChange}
                        placeholder="e.g. $49.99"
                    />
                </div>

                <div className="addProductItem">
                    <label>Stock Quantity</label>
                    <input
                        type="number"
                        name="stock"
                        value={form.stock}
                        onChange={handleChange}
                        placeholder="e.g. 100"
                    />
                </div>

                <div className="addProductItem">
                    <label>Status</label>
                    <select name="status" value={form.status} onChange={handleChange}>
                        <option value="active">Active</option>
                        <option value="low stock">Low Stock</option>
                        <option value="out of stock">Out of Stock</option>
                    </select>
                </div>

                <button type="submit" className="addProductButton">Create Product</button>
            </form>
        </div>
    );
}
