import React from "react";
import ExpenseTracker from "../components/ExpenseT/index";
import { GlobalProvider } from "../context";
import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <GlobalProvider>
      <Navbar />
      <div className="flex justify-center items-center  mt-20">
        <ExpenseTracker />
      </div>
    </GlobalProvider>
  );
}
