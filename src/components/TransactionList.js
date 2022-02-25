// 项目: Expense Tracker React Version 1.0
// 名称: TransactionList 组件
// 用途: 显示交易记录

// 导入核心模块, 导入语境钩子
import React, { useContext } from 'react';
import { Transaction } from './Transaction';                    // 导入交易组件

import { GlobalContext } from '../context/GlobalState';


// 定义组件, 用于导出
export const TransactionList = () => {
  
  const { transactions } = useContext(GlobalContext);           // 语境

  // 页面显示嵌入后的交易组件
  return (
    <>
      <h3>历史记录 History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}
