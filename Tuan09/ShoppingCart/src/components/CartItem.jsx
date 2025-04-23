import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../features/cart/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value);
    dispatch(updateQuantity({ id: item.id, quantity }));
  };

  return (
    <div className="flex justify-between items-center border-b py-4">
      <div>
        <h2 className="text-lg font-semibold">{item.name}</h2>
        <p className="text-gray-600">${item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center space-x-4">
        <input
          type="number"
          min="1"
          defaultValue={1}
          value={item.quantity}
          onChange={handleQuantityChange}
          className="w-16 text-center border rounded"
        />
        <button
          onClick={() => dispatch(removeItem({ id: item.id }))}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Xóa
        </button>
      </div>
    </div>
  );
};

export default CartItem;
