// 项目: Expense Tracker React Version 1.0
// 名称: Balance 组件
// 用途: 显示页首

// 导入核心模块, 导入语境钩子
import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

// 定义函数, 用于格式化数字
function moneyFormatter(num) {

  let p = num.toFixed(2).split('.');                // 取小数点2位, 然后分开, 返回数组

  return (                                          // 判定正负号, 判定数字长度, 每三位加逗号
    '¥ ' + (p[0].split('')[0]=== '-' ? '-' : '') +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') + '.' + p[1]                           // 最后添加小数部分
  );
}


// 定义组件, 用于导出
export const Balance = () => {

  const { transactions } = useContext(GlobalContext);                  // 交易
  const amounts = transactions.map(transaction => transaction.amount); // 数量 (数组映射函数)
  const total = amounts.reduce((acc, item) => (acc += item), 0);       // 总额 (数组归约函数)

  // 页面显示格式化后的总额
  return (
    <>
      <h4>余额 Balance</h4>
    <h1>{moneyFormatter(total)}</h1>
    </>
  )
}
