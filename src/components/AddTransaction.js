import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../Context/GlobalState";

const AddTransaction = () => {
  // For Income
  // Setting up ADD_INCOME from context API
  const { addIncome, addExpense } = useContext(GlobalContext);

  const [income, setIncome] = useState({
    incomeText: "",
    incomeAmount: 0,
  });

  // Destructuring the income
  const { incomeText, incomeAmount } = income;

  const onIncomeChange = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
  };

  const onSubmitIncome = (e) => {
    e.preventDefault();
    if ((incomeText.length && incomeAmount.length) > 0) {
      const newIncome = {
        id: uuidv4(),
        incomeText,
        incomeAmount: incomeAmount * 1, // Multiplying it by 1 converts it from string to number
      };
      addIncome(newIncome);
      setIncome({
        incomeText: "",
        incomeAmount: 0,
      });
    } else {
      alert("Expense cannot be empty");
    }
  };

  // For Expense
  const [expense, setExpense] = useState({
    expenseText: "",
    expenseAmount: 0,
  });

  // Destructuring the income
  const { expenseText, expenseAmount } = expense;

  const onExpenseChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const onSubmitExpense = (e) => {
    e.preventDefault();
    if ((expenseText.length && expenseAmount.length) > 0) {
      const newExpense = {
        id: uuidv4(),
        expenseText,
        expenseAmount: expenseAmount * 1, // Multiplying it by 1 converts it from string to number
      };
      addExpense(newExpense);
      setExpense({
        expenseText: "",
        expenseAmount: 0,
      });
    } else {
      alert("Expense cannot be empty");
    }
  };
  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmitIncome}>
        <div className="input-group income">
          <input value={incomeText} onChange={onIncomeChange} name="incomeText" type="text" placeholder="Add Income..." autoComplete="off" />
          <input value={incomeAmount} onChange={onIncomeChange} name="incomeAmount" type="number" placeholder="Amount" autoComplete="off" />
          <input type="submit" value="Submit" />
        </div>
      </form>
      <form onSubmit={onSubmitExpense}>
        <div className="input-group expense">
          <input value={expenseText} onChange={onExpenseChange} name="expenseText" type="text" placeholder="Add Expense..." autoComplete="off" />
          <input value={expenseAmount} onChange={onExpenseChange} name="expenseAmount" type="number" placeholder="Amount" autoComplete="off" />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
