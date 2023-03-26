import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './pages/Products'
import SideNav, { Toggle, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
import MySideNav from "./components/MySideNav"
import { Dashboard } from "./layouts/dashboard";
import { Auth } from "./layouts/auth";


import { Route, Routes, Navigate, BrowserRouter as Router } from "react-router-dom";


function Layout({ children }) {
  return (
    <Router>

      <main>{children}</main>
    </Router>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <TabularBITables /> */}
      {/* <Layout>
        <MySideNav />
        <Routes>
          <Route path='/Products' element={<Products />} />
        </Routes>
      </Layout> */}

      <Routes>
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
      </Routes>


      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  )
}

export default App
