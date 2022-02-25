

// 加载 Hooks, 加载 AppReducer
import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// 设置初始状态对象, 交易为空数组
const initialState = {
  transactions: []
}

// 定义语境供所有组件调用, 用于导出
export const GlobalContext = createContext(initialState);

// 定义全局语境组件, 传入子组件
export const GlobalProvider = ({ children }) => {

  // 调用归约函数, 传入归约规则函数, 传入初始状态对象
  // 返回状态对象, 返回调度函数
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // 调度函数1, 传入删除逻辑, 用于删除
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  // 调度函数2. 传入添加逻辑, 用于添加
  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }


  // 返回一个状态对象, 两个调度函数, 供其它组件调用
  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
  }}>
    {children}
  </GlobalContext.Provider>);
}