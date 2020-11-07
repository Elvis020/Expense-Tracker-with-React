import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import IncomeTransaction from "./IncomeTransaction";

const IncomeList = () => {
  // Setting up Context API to be used here
  const { incomeTransactions } = useContext(GlobalContext);

  return (
    <div className="transactions transactions-income">
      <h2>Transaction History</h2>
      {incomeTransactions.map((incomeTransaction) => (
        <ul key={incomeTransaction.id} className="transaction-list">
          <IncomeTransaction incomeTransaction={incomeTransaction} />
        </ul>
      ))}
    </div>
  );
};

export default IncomeList;
