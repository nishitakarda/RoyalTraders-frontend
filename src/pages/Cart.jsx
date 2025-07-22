import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { products, assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { cartItems, updateQuantity, removeItem, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  const quantityMap = {
    "100g": 1,
    "250g": 2.5,
    "500g": 5,
    "1kg": 10,
    "2kg": 20,
    "5kg": 50,
  };

  useEffect(() => {
    const tempData = [];

    for (const productId in cartItems) {
      for (const quantityLabel in cartItems[productId]) {
        if (cartItems[productId][quantityLabel] > 0) {
          tempData.push({
            _id: productId,
            quantityLabel,
            quantity: cartItems[productId][quantityLabel],
          });
        }
      }
    }

    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t pt-40 px-6 sm:px-10 max-w-[1600px] mx-auto">
      <div className="text-3xl mb-6">
        <Title text1="YOUR" text2="CART" />
      </div>

      {cartData.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center my-16">
          <img
            src={assets.not_found}
            alt="Cart is empty"
            className="w-80 h-90 mb-6 opacity-80"
          />
          <p className="text-3xl text-gray-600">Your cart is empty</p>
        </div>
      ) : (
        <>
          {cartData.map((item, index) => {
            const product = products.find((p) => p._id === item._id);
            const multiplier = quantityMap[item.quantityLabel] || 1;
            const finalPrice = Math.round(product.price * multiplier * item.quantity);

            return (
              <div
                key={index}
                className="flex items-start sm:items-center justify-between gap-6 p-4 border rounded-lg mb-4 bg-white shadow-sm"
              >
                {/* Left: Image + Info + Price */}
                <div className="flex gap-4">
                  <img
                    src={product?.image?.[0]}
                    alt={product?.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div>
                    <h2 className="text-xl font-semibold text-[#5a0a0a]">
                      {product?.name}
                    </h2>
                    <p className="text-gray-700 text-lg">
                      Quantity: <span className="font-medium">{item.quantityLabel}</span>
                    </p>
                    <p className="text-xl font-bold text-black mt-2">₹{finalPrice}</p>
                  </div>
                </div>

                {/* Right: Quantity input + Delete */}
                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item._id, item.quantityLabel, parseInt(e.target.value))
                    }
                    className="border max-w-[80px] px-3 py-1 rounded text-center"
                  />
                  <img
                    src={assets.bin_icon}
                    onClick={() => removeItem(item._id, item.quantityLabel)}
                    className="w-5 h-5 cursor-pointer"
                    alt="Delete"
                  />
                </div>
              </div>
            );
          })}

          {/* Total + Checkout */}
          <div className="flex justify-end px-4 sm:px-8 mt-12 mb-20">
            <div className="w-full max-w-md">
              <CartTotal />
              <div className="flex justify-end">
                <button
                  onClick={() => navigate('/place-order')}
                  className="bg-black text-white text-md mt-6 px-4 py-2 rounded hover:bg-gray-800 transition cursor-pointer"
                >
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
