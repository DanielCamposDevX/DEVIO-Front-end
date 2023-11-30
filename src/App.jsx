import { useState } from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from "./pages/homepage"
import KitchenPage from "./pages/kitchen"
import PaymentPage from "./pages/paymentpage"
import WithdrawPage from "./pages/withdrawal"

export function App() {

  const [ordered, setOrdered] = useState()


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage setOrdered={setOrdered} />} />
        <Route path='/kitchen' element={<KitchenPage />} />
        <Route path='/payment' element={<PaymentPage ordered={ordered} />} />
        <Route path='/withdraw' element={<WithdrawPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


