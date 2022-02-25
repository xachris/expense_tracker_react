// 项目: Expense Tracker React Version 1.0
// 名称: AddTransaction 组件
// 用途: 添加交易项目

// 导入核心模块, 导入语境钩子
import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';


// 定义组件, 用于导出
export const AddTransaction = () => {

  // 初始化默认值
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  // 导入全局语境 -- 调度函数2, 添加交易 -- 传入当前交易数组
  const { addTransaction } = useContext(GlobalContext);

  // 事件监听函数, 用于更
  const onSubmit = e => {
    e.preventDefault();                               // 禁止默认行为

    const newTransaction = {                          // 定义新交易对象         
      id: Math.floor(Math.random() * 100000000),      // 随机数做ID
      text,
      amount: +amount                                 // 强制正数做金额
    }

    addTransaction(newTransaction);                   // 调用调度函数2, 添加交易
  }

  // 页面显示添加交易表单
  return (
    <>
      <h3>添加新记录 Add New Transaction</h3>

      <form onSubmit={onSubmit}>

        <div className="form-control">

          <label htmlFor="text">
            事项 Item
          </label>
          
          <input 
            type="text" 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            placeholder="输入文字 Enter text..."
          />

        </div>

        <div className="form-control">

          <label htmlFor="amount">
            金额 Amount<br/>(negative - 支出 expense, positive - 收入 income)
          </label>

          <input 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            placeholder="Enter amount..." 
          />

        </div>

        <button className="btn">添加账目 Add Transaction</button>

      </form>
    </>
  )
}
