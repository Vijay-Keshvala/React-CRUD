import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Create from './components/Create'
import Update from './components/Update'
import Read from './components/Read'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/create' element={<Create/>}></Route>
    <Route path='/update/:id' element={<Update/>}></Route>
    <Route path='/read/:id' element={<Read />}></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
