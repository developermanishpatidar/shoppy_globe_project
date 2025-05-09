import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import '../style.css';

function ProductDetail() {
    const [products, setProducts] = useState([])
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    // Call Api to get product details
    useEffect(()=> {
        const getProducts = async () => {
          try{
            let resp =  await axios.get("https://dummyjson.com/products")
            setProducts(resp.data.products)
          }catch(error) {
            console.log(error)
          }
        }
        getProducts();
    },[])

    if (!product) return <p>Product not found.</p>;
  
    return (
      <>
        <div className="product-detail" key={product.id}>
            <img src={product.thumbnail} alt="img"/>
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <p>{product.description}</p>
        </div>
      </>
    );
  }
  
  export default ProductDetail;