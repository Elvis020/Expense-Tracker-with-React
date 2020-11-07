import React, {useContext} from "react";
import {GlobalContext} from '../Context/GlobalState';

const Balance = () => {
  const {incomeTransactions,expenseTransactions} = useContext(GlobalContext)


  // Setting up calculation for incomeAmount ans expenseAmount;
  const incomeA = incomeTransactions.map(incA => incA.incomeAmount);
  const expenseA = expenseTransactions.map(expA => expA.expenseAmount);

  const totalIncome = incomeA.reduce((acc,item) => (acc += item),0).toFixed(2)
  const totalExpense = expenseA.reduce((acc,item) => (acc += item),0).toFixed(2)


  return (
    <div className="balance">
      <h2>Your Balance</h2>
      <h3>GH {(totalIncome-totalExpense).toFixed(2)}</h3>
      <div className="income-expense">
        <div className="plus">
          <h3>Income</h3>
          <p>+GH {totalIncome}</p>
        </div>
        <div className="minus">
          <h3>Expenses</h3>
          <p>-GH {totalExpense}</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
