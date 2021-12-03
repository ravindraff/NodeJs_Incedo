import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions/cartAction";

const cartState = (state) => {
  console.log(state);
  return state.cartReducer.cartItems;
};
export default function Cart() {
  const cartItems = useSelector(cartState);
  const dispatch = useDispatch();
  // const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    dispatch(actions.fetchCart());
  }, [cartItems]);
  const handleDecrement = (cart_id, quantity) => {
    dispatch(actions.decrementQuantity(cart_id, quantity));
  };
  const handleIncrement = (cart_id, quantity) => {
    dispatch(actions.incrementQuantity(cart_id, quantity));
  };
  const handleRemove = (cart_id) => {
    dispatch(actions.removeItem(cart_id));
  };
  let listItems = cartItems.map((item, i) => {
    return (
      <li key={i}>
        <div
          className="card shadow p-3 mb-5 bg-body rounded"
          style={{ width: "18rem" }}
        >
          <img src={item.src} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.desc}</p>
            <div className="container-fluid">
              <div className="input-group col-12">
                <button
                  type="button"
                  className=" btn btn-primary input-group-text "
                  onClick={() => handleDecrement(item.id, item.quantity)}
                >
                  -
                </button>
                <div className="form-control text-center ">{item.quantity}</div>
                <button
                  type="button"
                  className="btn btn-primary input-group-text text-center "
                  onClick={() => handleIncrement(item.id, item.quantity)}
                >
                  +
                </button>
              </div>
              <div className="col-12">
                <button
                  className="btn btn-danger mt-2"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>

                <div className="container-fluid mt-2">
                  <p className="card-text">
                    Price:${item.price} <br />
                    Total:${item.price * item.quantity}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  });
  return (
    <div className="container shadow-sm p-3 mb-5 bg-body rounded">
      <h2>Shoes in your cart</h2>
      <ul className="list-unstyled">{listItems}</ul>
    </div>
  );
}
