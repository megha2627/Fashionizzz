import React from "react";
import OrderSummary from "./OrderSummary";

const CartModal = ({ products, isOpen, onClose }) => {
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
        className={`fixed z-50 right-0 top-0 md:w-1/3 w-full bg-white h-full overflow-y-auto 
                     transition-transform ${
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
                      <button className="size-6 flex items-center justify-center px-1.5 rounded-full bg-gray-200 text-gray-700 hover:bg-primary hover:text-white ">
                        -
                      </button>
                      <span className="px-2 text-center mx-1">
                        {item.quantity}
                      </span>
                      <button className="size-6 flex items-center justify-center px-1.5 rounded-full bg-gray-200 text-gray-700 hover:bg-primary hover:text-white ">
                        +
                      </button>
                    </div>
                    <button className="text-red-500 hover:text-red-800 mt-2 md:mt-0 md:ml-4">
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

export default CartModal;
