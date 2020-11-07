
// Setting up App Reducer
export default (state,action) => {
    switch(action.type){
        case 'ADD_INCOME':
            return {
                ...state,
                incomeTransactions: [action.payload, ...state.incomeTransactions]
            }
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenseTransactions: [action.payload, ...state.expenseTransactions]
            }
        case 'DELETE_EXPENSE':
            return {
                ...state,
                incomeTransactions: state.incomeTransactions.filter(incT => incT.id !== action.payload),
                expenseTransactions: state.expenseTransactions.filter(expT => expT.id !== action.payload)
            }
        default:
            return state;
    }
}