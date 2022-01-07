import React, {useState, useMemo, useEffect} from 'react';
import { Link, useLocation } from "react-router-dom";
import "./Product.css";
import Chart from "../../components/chart/Chart"
import { productData } from '../../dummyData';
import { Publish, SettingsApplications } from "@material-ui/icons";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/apiCalls";
import { userRequest } from '../../requestMethod';
import { updateProducts } from '../../redux/apiCalls';
import { getStorage, ref, uploadBytes } from '@firebase/storage';
import { uploadBytesResumable } from '@firebase/storage';
import app from '../../firebase';
import { getDownloadURL } from '@firebase/storage';

export default function Product() {
  const [input, setInput] = useState([]);
  const [file, setFile] = useState('');
  const [cat, setCat] = useState([]);
  const dispatch = useDispatch();
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [qStats, setqStats] = useState([]);
  const product = useSelector((state) => state.product.products.find((product) => product._id === productId));

 const handleChange = (e) => {
     setInput(prev => {
       return {...prev, [e.target.name]:e.target.value}
     })
 }

 const handleCategories = (e) => {
     setCat(e.target.value.split(","));
 }

 const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(fileName, storage);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', 
(snapshot) => {
  // Observe state change events such as progress, pause, and resume
  // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
  const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  console.log('Upload is ' + progress + '% done');
  switch (snapshot.state) {
    case 'paused':
      console.log('Upload is paused');
      break;
    case 'running':
      console.log('Upload is running');
      break;
    default:
  }
}, 
(error) => {
  // Handle unsuccessful uploads
}, 
() => {
  // Handle successful uploads on complete
  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
  getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    const products = {...input, img:downloadURL, categories: cat};
    updateProducts(products, dispatch);
  });
}
);
  }

const MONTHS = useMemo(
    ()=> [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ],[]);

    useEffect(() => {
      const getStats = async() => {
          try{
            const res = await userRequest.get("/order/income?pid=" + productId);
          res.data.map((item) =>
              setqStats((prev) => [
                {name: MONTHS[item._id - 1], Sales: item.total},
              ]),
          );
          }catch(err){
            console.log(err);
          }
         
      };
      getStats();
    }, [productId,MONTHS]);

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
              <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src={product.img} />
                  <span className="productName">{product.title}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">{product._id}</span>
                  </div>
    
                  <div className="productInfoItem">
                      <span className="productInfoKey">In stock:</span>
                      <span className="productInfoValue">{product.inStock}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Product Name</label>
                  <input name="title" type="text" onChange={handleChange} placeholder={product.title} />
                  <label>Product Description</label>
                  <input name="description" type="text" onChange={handleChange} placeholder={product.description} />
                  <label>Product Price</label>
                  <input name="price" type="text" onChange={handleChange} placeholder={product.price} />
                  <label>In Stock</label>
                  <select onChange={handleChange} name="inStock" id="idStock">
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                  </select>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src={product.img} alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} onChange={(e) => setFile(e.target.files[0])} />
                  </div>
                  <button onClick={handleClick} className="productButton">Update</button>
              </div>
          </form>
      </div>
    </div>
  );
}
