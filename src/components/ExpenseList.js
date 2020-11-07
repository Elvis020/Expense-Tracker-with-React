import React, {useContext} from 'react';
import {GlobalContext} from '../Context/GlobalState';
import ExpenseTransaction from './ExpenseTransaction'

const ExpenseList = () => {

    // Setting up context tot be used in this component
    const {expenseTransactions} = useContext(GlobalContext)


    return (
        <div className="transactions transactions-expense">
            <h2>Transaction History</h2>
            {expenseTransactions.map(expenseTransaction => (
                <ul key={expenseTransaction.id} className="transaction-list">
                    <ExpenseTransaction expenseTransaction={expenseTransaction} />
                </ul>
            ))}
            
        </div>
    )
}

export default ExpenseList
