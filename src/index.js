// 项目: Expense Tracker React Version 1.0
// 名称: index 主页面
// 用途: 导入App主组件




// 0. 加载核心模块
import React from 'react';            // 加载 React
import ReactDOM from 'react-dom';     // 加载 ReactDOM


// 1. 加载核心组件
import App from './App';              // 加载 组件 <App />


// 2. 渲染页面, 渲染至主页面根部
ReactDOM.render(<App />, document.getElementById('root'));
