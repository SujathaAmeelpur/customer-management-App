import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import CustomerListPage from './components/CustomerListPage'
import './App.css'

function App() {
  return (
    <Router>
    <Header />
    <CustomerListPage />
    </Router>
  )
    
  
}
export default App