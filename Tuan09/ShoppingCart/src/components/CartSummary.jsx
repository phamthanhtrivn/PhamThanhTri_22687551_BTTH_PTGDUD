import React from "react";
import { useSelector } from "react-redux";

const CartSummary = () => {
  const cartItems = useSelector(state => state.cart.cartItems)

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0)
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  
  return (
    <div className="p-4 mt-6 border rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-2">Tổng kết</h2>
      <p>
        Tổng số lượng: <span className="font-semibold">{totalQuantity}</span>
      </p>
      <p>
        Tổng tiền:{" "}
        <span className="font-semibold">${totalPrice.toFixed(2)}</span>
      </p>
    </div>
  );
};

export default CartSummary;
