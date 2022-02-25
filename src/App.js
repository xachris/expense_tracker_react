// 项目: Expense Tracker React Version 1.0
// 名称: App 核心组件
// 用途: 嵌入全部其它组件, 导入至index主页面后渲染至浏览器呈现


// 0. 加载核心模块
import React from 'react';

// 1. 加载自定义模块: 页首, 余额, 收入, 交易, 入账
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

// 2. 加载自定义全局语境
import { GlobalProvider } from './context/GlobalState';

// 3. 加载CSS样式
import './App.css';


// 4. 声明核心组件
function App() {

  // 返回页面架构: 全局语境, 页首, 余额, 收入, 交易, 入账 
  return (

    <GlobalProvider>                    
      <Header />

      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>

    </GlobalProvider>

  );
}


// 5. 默认导出模块
export default App;
