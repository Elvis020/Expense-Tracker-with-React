import React,{useContext} from "react";
import {GlobalContext} from '../Context/GlobalState';

const IncomeTransaction = ({incomeTransaction}) => {
  const {deleteExpense} = useContext(GlobalContext);

  
  return (
    <li className="transaction">
      <span className="transaction-text">{incomeTransaction.incomeText}</span>
      <span className="transaction-amount">GH{incomeTransaction.incomeAmount}</span>
      <button className="delete-btn" onClick={() => deleteExpense(incomeTransaction.id)}  >
        <i className="fa fa-trash" ></i>
      </button>
    </li>
  );
};

export default IncomeTransaction;
