import React,{createContext,useReducer,useEffect} from 'react';
import AppReducer from './AppReducer';


const initialState = {
    incomeTransactions:JSON.parse(localStorage.getItem('Income_Transactions')) || [],
    expenseTransactions: JSON.parse(localStorage.getItem('Expense_Transactions')) || [],
}



// Setting up context API
export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    // Setting up Local Storage functionality
    useEffect(() => {
        localStorage.setItem('Income_Transactions', JSON.stringify(state.incomeTransactions));
        localStorage.setItem('Expense_Transactions', JSON.stringify(state.expenseTransactions));
    })
    // Setting up  action for adding an income
    const addIncome = (incomeTransaction) => {
        dispatch({
            type: 'ADD_INCOME',
            payload: incomeTransaction
        })
    }
    // Setting up  action for adding an income
    const addExpense = (expenseTransaction) => {
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expenseTransaction
        })
    }
    // Setting up  action for deleting an income/expense
    const deleteExpense = (id) => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: id
        })
    }


    return (
        <GlobalContext.Provider 
        value={{
            incomeTransactions: state.incomeTransactions,
            expenseTransactions: state.expenseTransactions,
            addIncome,
            addExpense,
            deleteExpense
        }}>
            {children}
        </GlobalContext.Provider>
    )
}