// 项目: Expense Tracker React Version 1.0
// 名称: IncomeExpenses 组件
// 用途: 显示收入

// 导入核心模块, 导入语境钩子
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

// 定义函数, 用于格式化数字
function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '¥ ' +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}

// 定义组件, 用于导出
export const IncomeExpenses = () => {

  const { transactions } = useContext(GlobalContext);                       // 语境

  const amounts = transactions.map(transaction => transaction.amount);      // 数量

  const income = amounts                                                    // 收入
    .filter(item => item > 0)                                               // 选择大于0的
    .reduce((acc, item) => (acc += item), 0);                               // 数字累加

  const expense = (                                                         // 开支
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
  );

  // 页面显示格式化后的收入和支出数字
  return (
    <div className="inc-exp-container">

      <div>
        <h4>收入 Income</h4>
        <p className="money plus">{moneyFormatter(income)}</p>
      </div>
      
      <div>
        <h4>支出 Expense</h4>
        <p className="money minus">{moneyFormatter(expense)}</p>
      </div>
      
    </div>
  )
}
