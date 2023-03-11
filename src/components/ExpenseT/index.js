import React, { useContext } from "react";

import Balance from "./Balance";
import IncomeExpenses from "./IncomeExpenses";
import TransactionList from "./TransactionList";
import AddTransaction from "./AddTransaction";

import "../../styles/Expense.css";
import PieChart from "../charts/PieChart";
import { GlobalContext } from "../../context";

export default function ExpenseT() {
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
    <div>
      <div>
        <div className="flex gap-12 ">
          <div className="w-[400px] h-auto">
            <Balance />
            <IncomeExpenses />
            <TransactionList />
          </div>
          <div className="w-[400px] h-auto mt-7">
            <AddTransaction />
          </div>
        </div>
      </div>
      <div className="chart flex gap-4">
        <PieChart
          title="Income"
          value={income}
          series={[100, 0]}
          colors={["#275be8", "#e5e8ef"]}
        />
        <PieChart
          title="Expense"
          value={expense}
          series={[100, 0]}
          colors={["#275be8", "#e5e8ef"]}
        />
      </div>
    </div>
  );
}

// export default index;
