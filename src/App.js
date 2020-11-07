import React from "react";
import "./App.css";
import { Header, Balance, AddTransaction, IncomeList, ExpenseList } from "./components";
import { GlobalContextProvider } from "./Context/GlobalState";

function App() {
  return (
    <GlobalContextProvider>
      <div className="container">
        <div className="app_wrapper">
          <Header />
          <Balance />
          <AddTransaction />
          <IncomeList />
          <ExpenseList />
        </div>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
