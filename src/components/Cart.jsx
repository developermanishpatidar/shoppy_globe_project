import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../features/cart/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  // Remove product from Cart
  const handleRemoveToCart = (id) => {
    dispatch(removeItem(id))
  }

  return (
    <>
      {cartItems.length > 0 ? (
        cartItems.map((product, index) => (
          <div className="product-detail" key={index}>
              <img src={product.thumbnail} alt="img"/>
              <h2>{product.title}</h2>
              <p>${product.price}</p>
              <p>{product.description}</p>
              <button onClick={()=>handleRemoveToCart(product.id)}>Remove to Cart</button>
          </div>
        ))
      ) : (
        <p>No Product Found.</p>
      )}
    </>
  );
}

export default Cart;
