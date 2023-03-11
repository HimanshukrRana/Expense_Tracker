import React, { useContext } from "react";
import { GlobalContext } from "../../context";

function Balance() {
  const { transactions } = useContext(GlobalContext);

  //   const amounts = transactions.map((transaction) => transaction.amount);

  //   const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const balance = transactions.reduce(
    (acc, curVal) =>
      curVal.category === "expense" ? acc - curVal.amount : acc + curVal.amount,
    0
  );

  return (
    <div>
      <p className="text-[2rem]">Your Balance</p>
      <p className="text-[1.5rem]">{`$${balance}`}</p>
    </div>
  );
}

export default Balance;
