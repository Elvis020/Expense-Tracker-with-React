import React,{useContext} from "react";
import {GlobalContext} from '../Context/GlobalState';

const ExpenseTransaction = ({ expenseTransaction }) => {

  const {deleteExpense} = useContext(GlobalContext);
  return (
    <li className="transaction">
      <span className="transaction-text">{expenseTransaction.expenseText}</span>
      <span className="transaction-amount">GH{expenseTransaction.expenseAmount}</span>
      <button className="delete-btn" onClick={() => deleteExpense(expenseTransaction.id)} >
        <i className="fa fa-trash"></i>
      </button>
    </li>
  );
};

export default ExpenseTransaction;
