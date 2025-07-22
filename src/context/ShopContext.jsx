import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import { FaCheckCircle } from "react-icons/fa";
import { products } from "../assets/frontend_assets/assets"; // required for cart amount
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  const addToCart = (itemId, quantityLabel) => {
    if (!quantityLabel) {
      toast.error("Select Quantity First");
      return;
    }

    const updatedCart = structuredClone(cartItems);

    if (updatedCart[itemId]) {
      if (updatedCart[itemId][quantityLabel]) {
        updatedCart[itemId][quantityLabel] += 1;
      } else {
        updatedCart[itemId][quantityLabel] = 1;
      }
    } else {
      updatedCart[itemId] = { [quantityLabel]: 1 };
    }

    setCartItems(updatedCart);
    console.log("🛒 Cart Updated:", updatedCart);

    toast.success(
      <span className="flex items-center gap-2 text-2xl">
        <FaCheckCircle className="text-green-500" />
        Added to Cart!
      </span>,
      { icon: false }
    );
  };

  const getCartCount = () => {
    let totalCount = 0;

    for (const itemId in cartItems) {
      for (const qtyLabel in cartItems[itemId]) {
        try {
          const count = cartItems[itemId][qtyLabel];
          if (count > 0) {
            totalCount += count;
          }
        } catch (err) {
          console.error("Cart count error:", err);
        }
      }
    }

    return totalCount;
  };

  const updateQuantity = (id, label, value) => {
    if (value < 1) return;
    const updated = { ...cartItems };
    updated[id][label] = value;
    setCartItems(updated);
  };

  const removeItem = (id, label) => {
    const updated = { ...cartItems };
    delete updated[id][label];
    if (Object.keys(updated[id]).length === 0) {
      delete updated[id];
    }
    setCartItems(updated);
  };

  // Quantity Label to Weight Multiplier
  const quantityMap = {
    "100g": 1,
    "250g": 2.5,
    "500g": 5,
    "1kg": 10,
    "2kg": 20,
    "5kg": 50,
  };

  const getCartAmount = () => {
    let totalAmount = 0;

    for (const productId in cartItems) {
      const product = products.find((p) => p._id === productId);
      if (!product) continue;

      for (const quantityLabel in cartItems[productId]) {
        const quantity = cartItems[productId][quantityLabel];
        const multiplier = quantityMap[quantityLabel] || 1;
        totalAmount += product.price * multiplier * quantity;
      }
    }

    return totalAmount;
  };

  const value = {
    cartItems,
    setCartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    removeItem,
    getCartAmount, 
    navigate,
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
