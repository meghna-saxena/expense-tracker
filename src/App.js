import React from 'react';
import { GlobalProvider } from './context/GlobalState';
import {
  Header,
  Balance,
  IncomeExpenses,
  TransactionList,
  AddTransaction,
} from './components';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
