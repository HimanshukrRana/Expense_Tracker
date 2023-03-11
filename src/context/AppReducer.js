/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      let transactiondel = state.transactions.filter(
        (transaction) => transaction.id !== action.payload
      );
      // localStorage.removeItem("del", transactiondel);
      localStorage.setItem("transactions", JSON.stringify(transactiondel));
      var del = JSON.parse(localStorage.getItem("transactions"));

      return {
        ...state,
        del,
      };
    case "ADD_TRANSACTION":
      let transactionadd = [action.payload, ...state.transactions];
      localStorage.setItem("transactions", JSON.stringify(transactionadd));
      var transaction = JSON.parse(localStorage.getItem("transactions"));

      return {
        ...state,
        transaction,
      };

    default:
      return state;
  }
};
