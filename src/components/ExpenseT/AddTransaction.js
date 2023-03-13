import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context";

function AddTransaction() {
  const { addTransaction } = useContext(GlobalContext);

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("expense");

  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 10000),
      category,
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
    // eslint-disable-next-line no-restricted-globals
    // location.reload();
  };

  return (
    <div>
      <h3 className="">Add New transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control flex gap-3 ">
          <label htmlFor="category">Category</label>

          <select
            type="category"
            className="rounded-lg"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
            required
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
