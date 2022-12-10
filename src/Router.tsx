import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Components/Home'
import {  CompleteOrder } from './pages/Components/CompletteOrder' 
import { Sucess } from './pages/Sucess'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
    <Route path='/' element={<DefaultLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/completeOrder"element={<CompleteOrder/>} />
        <Route path="/sucess" element={<Sucess/>} />
    </Route>
    </Routes>
  )
}