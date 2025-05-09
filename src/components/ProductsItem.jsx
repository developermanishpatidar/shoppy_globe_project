import { Link } from "react-router-dom";
import "../style.css";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

function ProductsItem({ product }) {
  const dispatch = useDispatch();

  // Add to product on Cart
  const handleAddToCart = (product) => {
      dispatch(addItem(product))
  };

  return (
    <>
      <div className="product-item">
        <img src={product.thumbnail} alt="img"/>
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <Link to={`/productDetail/${product.id}`}>View Details</Link>
        <button onClick={()=>handleAddToCart(product)}>Add to Cart</button>
      </div>
    </>
  );
}

export default ProductsItem;