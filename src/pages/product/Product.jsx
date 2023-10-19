import { Link } from 'react-router-dom'
import './product.css'
import Chart from "../../components/charts/Charts"
import { productData } from '../../sampleData'
import { Publish } from '@material-ui/icons'


export default function Product() {
  return (
    <div className="product">
        <div className="productTitleContainer">
          <h1 className="productTitle">Product</h1>
          <Link to="/newproduct">
          <button className="productAddButton">Create</button>
          </Link>
        </div>
        <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" title="Sales Report"/>
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src="https://imgs.search.brave.com/AVUFcMlvK4KyO0ouHQzbASz2Qb5fEWyamc8RlSQKvt4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMjIx/MDExL3BleGVscy1w/aG90by0yMjEwMTEu/anBlZz9hdXRvPWNv/bXByZXNzJmNzPXRp/bnlzcmdiJmRwcj0x/Jnc9NTAw" alt="" className="productInfoImg" />
            <span className="productName">Apple</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">264</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">4418</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">active:</span>
              <span className="productInfoValue">yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">no</span>
            </div>
          </div>
        </div>
        </div>
        <div className="productBottom">
          <form  className="productForm">
            <div className="productFormLeft">
              <label>Product Name</label>
              <input type="text" placeholder='Apple' />
              <label>In Stock</label>
              <select name="inStock" id="idStock">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <label>Active</label>
              <select name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="productFormRight">
              <div className="productUpload">
                <img src="https://imgs.search.brave.com/AVUFcMlvK4KyO0ouHQzbASz2Qb5fEWyamc8RlSQKvt4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMjIx/MDExL3BleGVscy1w/aG90by0yMjEwMTEu/anBlZz9hdXRvPWNv/bXByZXNzJmNzPXRp/bnlzcmdiJmRwcj0x/Jnc9NTAw" alt="" className="productUploadImg" />
                <label for="file">
                  <Publish />
                </label>
                <input type="file" id='file' style={{display:"none"}} />
              </div>
              <button className="productButton">Update</button>
            </div>
          </form>
        </div>
    </div>
  )
}
