import React from "react";
import "./CartProduct.css";
import { useStateValue } from "./StateProvider";

function CartProduct({ id, image, title, price, rating, hideButton }) {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div className="cartProduct">
      <img className="cartProduct__image" src={image} alt="" />
      <div className="cartProduct__info">
        <p className="cartProduct__title">{title}</p>
        <p className="cartProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="cartProduct__rating">
          {" "}
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p> &#11088; </p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromCart}>Remove from Cart</button>
        )}
      </div>
    </div>
  );
}

export default CartProduct;
