import { useState } from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from "./pages/homepage"
import KitchenPage from "./pages/kitchen"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/kitchen' element={<KitchenPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


