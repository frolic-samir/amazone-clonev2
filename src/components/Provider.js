import React, { createContext, useReducer } from "react";

export const Store = createContext();

const InitialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return {
        ...state,
        user: action.user,
      };

    case "ADD_TO_BASKET":
      const index = state.basket.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        const newBasket = [...state.basket];
        newBasket[index] = {
          ...newBasket[index],
          qty: newBasket[index].qty + 1,
        };
        return {
          ...state,
          basket: newBasket,
          //another way of solving
          // basket: state.basket.map((item) =>
          //   item.id === action.payload.id
          //     ? { ...action.payload, qty: item.qty + 1 }
          //     : item
          // ),
        };
      }
      return {
        ...state,
        basket: [...state.basket, { ...action.payload, qty: 1 }],
      };

    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.id),
      };

    case "INCREASE_QTY":
      return {
        ...state,
        basket: state.basket.map((item) =>
          item.id === action.id ? { ...item, qty: item.qty + 1 } : item
        ),
      };

    case "DECREASE_QTY":
      const deletingItemIndex = state.basket.findIndex(
        (item) => item.id === action.id && item.qty === 1
      );
      // console.log(deletingItemIndex);
      if (deletingItemIndex >= 0) {
        return {
          ...state,
          basket: state.basket.filter((item) => item.id !== action.id),
        };
      }
      return {
        ...state,
        basket: state.basket.map((item) =>
          item.id === action.id ? { ...item, qty: item.qty - 1 } : item
        ),
      };

    default:
      return state;
  }
};

export const subTotal = (basket) => {
  const total = basket.reduce(
    (amount, item) => parseFloat(item.price) * parseFloat(item.qty) + amount,
    0
  );
  return total;
};

const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, InitialState);
  return (
    <Store.Provider value={[state, dispatch]}>{props.children}</Store.Provider>
  );
};
export default StoreProvider;
