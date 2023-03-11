import React, { useContext } from "react";
import { GlobalContext } from "../../context";

function TransactionList() {
  const { transactions, deleteTransaction } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className={transaction.category === "expense" ? "minus" : "plus"}
          >
            {transaction.text}{" "}
            <span>
              {transaction.category === "expense" ? "-" : "+"}$
              {Math.abs(transaction.amount)}
            </span>
            <button
              className="delete-btn"
              onClick={() => deleteTransaction(transaction.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
