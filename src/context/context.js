import React, {useReducer, createContext } from 'react';
import contextReducer from './contextReducer';


const initialState = JSON.parse(localStorage.getItem('transactions'))  || [{type: "Expense", category: "Clothes", amount: 1000, date: "2022-07-08"},{type: "Income", category: "Investments", amount: 5000, date: "2022-07-08"}];
export const ExpenceTracker = createContext(initialState);

export const Provider = ({children}) =>{
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    const deleteTransactions = (id) =>{
        dispatch({type:'DELETE_TRANSACTIONS',payload: id});
    }

    const addTransactions = (transactions) => {
        dispatch({type:'ADD_TRANSACTIONS',payload: transactions});
    }


    return(
        <ExpenceTracker.Provider value={{
        deleteTransactions,
        addTransactions,
        transactions}}
        >
            {children}
        </ExpenceTracker.Provider>
    )
}
