import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import { User } from './views/User/User'
import { Home } from './views/Home/Home'
import { HeaderNav } from './components/Header/headerNav'
import { Contact } from './views/Contact/Contact'
import { Profile } from './views/Profile/Profile'
import { SignUp } from './views/SignUp/SignUp';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <HeaderNav /> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Contact />} />
      <Route path="/" element={<Profile />} />
      <Route path="/User" element={<SignUp />} />
      

      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
