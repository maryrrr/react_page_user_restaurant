import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from './components/Header/Header'
import { Home } from './views/Home/Home'
import { Menu } from './views/Menu/Menu'
import { Reserve } from './views/Reserve/Reserve';
import { FormReserve } from './components/user-form/FormReserve';
import { User } from './views/User/User';



function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <BrowserRouter>
    <Header />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/Menu" element={<Menu />} />
      <Route path="/User" element={<Reserve />} />
      </Routes>
       </BrowserRouter>
    
    </>
  )
}

export default App
