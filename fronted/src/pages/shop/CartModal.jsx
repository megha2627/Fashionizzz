

/*import React from "react";
import OrderSummary from "./OrderSummary";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  updateQuantity,
} from "../../redux/features/cart/cartSlice";

const CartModal = ({ products, isOpen, onClose }) => {
  const dispatch = useDispatch();

  const handleQuantity = (type, _id) => {
    const payload = { type, _id };
    dispatch(updateQuantity(payload));
  };

  const handleRemove = (e, _id) => {
    e.preventDefault();
    dispatch(removeFromCart({ _id }));
  };

  return (
    <>
      <div
        className={`fixed z-50 inset-0 bg-black bg-opacity-50 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ transition: "opacity 300ms" }}
        onClick={onClose}
      ></div>
      <div
        className={`fixed z-50 right-0 top-0 md:w-1/3 w-full bg-white h-full overflow-y-auto transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ transition: "transform 300ms" }}
      >
        <div className="p-4 mt-4">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-xl font-semibold">Your Cart</h4>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-900"
            >
              <i className="ri-close-fill bg-black p-1 text-white"></i>
            </button>
          </div>

          <div className="cart-items">
            {products.length === 0 ? (
              <div>Your cart is empty</div>
            ) : (
              products.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row md:items-center md:justify-between shadow-md md:p-5 p-2 mb-4"
                >
                  <span className="mr-4 px-1 bg-primary text-white rounded-full">
                    0{index + 1}.
                  </span>
                  <img
                    src={item.image}
                    alt="product"
                    className="size-12 object-cover mr-4"
                  />
                  <div className="flex flex-col items-center md:items-start">
                    <h5 className="text-lg font-small">{item.name}</h5>
                    <p className="text-gray-600 text-sm">
                      ${Number(item.price).toFixed(2)}
                    </p>
                  </div>
                  <div className="flex flex-col items-center mt-2 w-full md:w-auto md:flex-row md:justify-start">
                    <div className="flex items-center justify-center">
                      <button
                        className="size-6 flex items-center justify-center px-1.5 rounded-full bg-gray-200 text-gray-700 hover:bg-primary hover:text-white"
                        onClick={() => handleQuantity("decrement", item._id)}
                      >
                        -
                      </button>
                      <span className="px-2 text-center mx-1">
                        {item.quantity}
                      </span>
                      <button
                        className="size-6 flex items-center justify-center px-1.5 rounded-full bg-gray-200 text-gray-700 hover:bg-primary hover:text-white"
                        onClick={() => handleQuantity("increment", item._id)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="text-red-500 hover:text-red-800 mt-2 md:mt-0 md:ml-4"
                      onClick={(e) => handleRemove(e, item._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          {products.length > 0 && <OrderSummary />}
        </div>
      </div>
    </>
  );
};

export default CartModal;*/


import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateQuantity,
  removeFromCart,
  clearCart,
} from "../../redux/features/cart/cartSlice";
import { Link } from "react-router-dom";

const CartModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const handleIncrement = (id) => {
    dispatch(updateQuantity({ id, type: "increment" }));
  };

  const handleDecrement = (id) => {
    dispatch(updateQuantity({ id, type: "decrement" }));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>
      <div
        className={`fixed top-0 right-0 w-full md:w-1/4 h-full bg-white z-50 shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ transition: "transform 300ms" }}
      >
        <div className="p-4 mt-4">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-xl font-semibold">Your Cart</h4>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-900"
            >
              <i className="ri-close-fill bg-black p-1 text-white"></i>
            </button>
          </div>

          <div className="cart-items">
            {products.length === 0 ? (
              <div>Your cart is empty</div>
            ) : (
              products.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row md:items-center md:justify-between shadow-md md:p-5 p-2 mb-4"
                >
                  <span className="mr-4 px-1 bg-primary text-white rounded-full">
                    0{index + 1}.
                  </span>
                  <img
                    src={item.image}
                    alt="product"
                    className="size-12 object-cover mr-4"
                  />
                  <div className="flex flex-col items-center md:items-start">
                    <h5 className="text-lg font-small">{item.name}</h5>
                    <p className="text-gray-600 text-sm">
                      ${Number(item.price).toFixed(2)}
                    </p>
                  </div>
                  <div className="flex flex-col items-center mt-2 w-full md:w-auto md:flex-row md:justify-start">
                    <div className="flex items-center justify-center">
                      <button
                        className="size-6 flex items-center justify-center px-1.5 rounded-full bg-gray-200 text-gray-700 hover:bg-primary hover:text-white"
                        onClick={() => handleDecrement(item.id)}
                      >
                        -
                      </button>
                      <span className="px-2 text-center mx-1">
                        {item.quantity}
                      </span>
                      <button
                        className="size-6 flex items-center justify-center px-1.5 rounded-full bg-gray-200 text-gray-700 hover:bg-primary hover:text-white"
                        onClick={() => handleIncrement(item.id)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="text-red-500 hover:text-red-800 mt-2 md:mt-0 md:ml-4"
                      onClick={() => handleRemove(item.id)}
                    >
                      clear
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          {products.length > 0 && (
            <div className="flex justify-between items-center mt-4">
              <p className="text-lg font-medium">
                Total: ${totalPrice.toFixed(2)}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={handleClearCart}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700"
                >
                  Clear Cart
                </button>
                <Link to="/checkout">
                  <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark">
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          )}
          <div className="flex justify-end gap-2 mt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartModal;