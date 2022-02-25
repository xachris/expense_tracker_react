import React, {useContext} from 'react';
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
export const Transaction = ({ transaction }) => {

  const { deleteTransaction } = useContext(GlobalContext);            // 语境

  const sign = transaction.amount < 0 ? '-' : '+';                    // 选择正负号

  // 页面显示 项目名称, 加减金额, 删除提示
  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{sign}{moneyFormatter(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  )
}
