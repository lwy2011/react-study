/*
 * @Author: liuwanyong liuwanyong2018@gmail.com
 * @Date: 2022-10-15 22:14:11
 * @LastEditors: liuwanyong liuwanyong2018@gmail.com
 * @LastEditTime: 2022-10-16 02:13:36
 * @FilePath: /react-study/src/App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEgo1
 */

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import useSWR from 'swr'

function App() {
   const [count, setCount] = useState(0)
   const f: (args: RequestInfo | URL) => Promise<Response> = (...args) => {
      return fetch(...args).then(res => res.json())
   }
   const { data, error } = useSWR('https://awwfl9o2d6mcfeqioi6oelhfnrd2.requestly.me/1/?delay=30', f)
   console.log(data, error?.message)

   return (
      <div className="App">
         <div>
            <a href="https://vitejs.dev" target="_blank">
               <img src="/logo1.svg" className="logo" alt="Vite logo" />
            </a>
            <a href="https://reactjs.org" target="_blank">
               <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
         </div>
         <h1>Vite + React</h1>
         <div className="card">
            <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
            <p>
               Edit <code>src/App.tsx</code> and save to test HMR
            </p>
         </div>
         <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      </div>
   )
}

export default App
