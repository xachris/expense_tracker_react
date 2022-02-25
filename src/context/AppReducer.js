// 项目: Expense Tracker React Version 1.0
// 名称: Reducer 归约组件
// 用途: 用于管理状态逻辑, 嵌套进语境组件


// 定义归约组件, 传入React默认的 state状态对象 和 action行为对象(内含条件)
export default (state, action) => {

  switch(action.type) {                     // 传入action.type

    case 'DELETE_TRANSACTION':              // 若行为条件为 删除
      return {
        ...state,                           // 其它状态项目不变, 仅选择未被删除的交易
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      }
    case 'ADD_TRANSACTION':                 // 若行为条件为 添加
      return {
        ...state,                           // 其它状态项目不变, 仅改变交易项目列表中的 金额
        transactions: [action.payload, ...state.transactions]
      }
    default:
      return state;                         // 默认返回原状态
  }
}