import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Components/Home'
import {  CompleteOrder } from './pages/Components/CompletteOrder' 
import { OrderConfirmed } from './pages/Components/OrderCompleted'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
    <Route path='/' element={<DefaultLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/completeOrder"element={<CompleteOrder/>} />
        <Route path="/orderconfirmed" element={<OrderConfirmed/>} />
    </Route>
    </Routes>
  )
}