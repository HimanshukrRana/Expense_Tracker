/* eslint-disable no-undef */
import React, { createContext, useReducer } from "react";

import AppReducer from "./AppReducer";

//initial state

const initialState = {
  transactions: JSON.parse(localStorage.getItem("transactions")) || [
    { id: 1, amount: 100, text: "Food", category: "expense" },
  ],
};

//create context

export const GlobalContext = createContext(initialState);

//Provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }
  function addTransaction(transactions) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transactions,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
