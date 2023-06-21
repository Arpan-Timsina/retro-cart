import { createContext, useReducer } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        [action.itemId]: state[action.itemId] + 1,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        [action.itemId]: state[action.itemId] - 1,
      };
    case "UPDATE_CART_ITEM_COUNT":
      return {
        ...state,
        [action.itemId]: action.newAmount,
      };
    case "CHECKOUT":
      return getDefaultCart();
    default:
      return state;
  }
};

export const ShopContextProvider = (props) => {
  const [cartItems, dispatch] = useReducer(cartReducer, getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    dispatch({ type: "ADD_TO_CART", itemId });
  };

  const removeFromCart = (itemId) => {
    dispatch({ type: "REMOVE_FROM_CART", itemId });
  };

  const updateCartItemCount = (newAmount, itemId) => {
    dispatch({ type: "UPDATE_CART_ITEM_COUNT", itemId, newAmount });
  };

  const checkout = () => {
    dispatch({ type: "CHECKOUT" });
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
