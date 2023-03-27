import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideNav, { Toggle, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
import MySideNav from "./components/MySideNav"
import { Dashboard } from "./layouts/dashboard";



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

      <Routes>
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
      </Routes>
    </div>
  )
}

export default App
