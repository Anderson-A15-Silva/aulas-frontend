import React from 'react'
import ReactDOM from 'react-dom/client'
import Componente from './pages/PrimeiroComponente'
import Card from './components/Card'
import Home from '../src/pages/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Componente />
    <Card />
    <Home />
  </React.StrictMode>,
)