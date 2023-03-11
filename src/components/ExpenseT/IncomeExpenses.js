import React, { useContext } from "react";
import { GlobalContext } from "../../context";

function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);

  function getTotalAmountForCategory(data, category) {
    let total = 0;

    data.forEach((transaction) => {
      if (transaction.category === category) {
        total += transaction.amount;
      }
    });
    return total;
  }

  const income = getTotalAmountForCategory(transactions, "income");

  const expense = getTotalAmountForCategory(transactions, "expense");

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{expense}</p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
