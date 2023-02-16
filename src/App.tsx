/*
 * @Author: liuwanyong liuwanyong2018@gmail.com
 * @Date: 2022-10-15 22:14:11
 * @LastEditors: liuwanyong liuwanyong2018@gmail.com
 * @LastEditTime: 2023-02-16 13:43:54
 * @FilePath: /react-study/src/App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEgo1
 */

import { useState } from 'react'
import { DownFill } from "antd-mobile-icons";
import {Card } from 'antd-mobile'
import './App.css'


function App() {



   return (
      <div className="App">
         <img src="/4.jpg" alt="" />
         <div className="select">
            <div className="box">
               <span>2023</span>
               <DownFill color="#000" fontSize={'.5em'} />
            </div>
         </div>
         <div className="card">
            <Card>
               <div className="content">
                  <header>
                     <span>2023年1月</span>
                     <p>
                        <span className='light'>共缴纳（元）：</span>
                        <span className="num">637.79</span>
                     </p>
                  </header>
                  <main>
                     <span>险种类型：</span>
                     <span>职工基本医疗保险</span>
                     <div className="line"></div>
                  </main>
                  <div className="more">展开</div>
               </div>
            </Card>
            <p className='nom'>没有更多了</p>
         </div>
         <footer>
            <img src="/5.jpg" alt="" />
         </footer>
      </div>
   )
}

export default App
