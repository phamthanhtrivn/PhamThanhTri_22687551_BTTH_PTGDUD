import React from "react";
import { addItem } from "./features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./components/CartItem";
import CartSummary from "./components/CartSummary";

const products = [
  { id: 1, name: "Laptop ASUS", price: 1000 },
  { id: 2, name: "Chuột Logitech", price: 50 },
  { id: 3, name: "Tai nghe Sony", price: 150 },
];

const App = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">🛒 Giỏ hàng</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Danh sách sản phẩm */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Sản phẩm</h2>
          {products.map((product) => (
            <div
              key={product.id}
              className="flex justify-between items-center mb-4"
            >
              <div>
                <h3 className="text-lg">{product.name}</h3>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
              </div>
              <button
                onClick={() => dispatch(addItem({ ...product, quantity: 1 }))}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Thêm
              </button>
            </div>
          ))}
        </div>

        {/* Giỏ hàng */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Giỏ hàng của bạn</h2>
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Chưa có sản phẩm nào.</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
              <CartSummary />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
