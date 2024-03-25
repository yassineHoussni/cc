import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './Cart'
import Home from './Home'

import { useDispatch } from 'react-redux'
import { getProducts } from '../redux/apiSlice'
import Category from './Category'

import CartShop from './CartShop'

import Favorite from './Favorite'
import Layout from './Layout'
import ShowProducts from "./Panel/ShowProducts"
import AddProducts from './Panel/AddProducts'
import EditProducts from './Panel/EditProducts'
export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const [id,setId] = useState(21)
  return (
    <BrowserRouter>
    
    
        <Routes>
            <Route path='/' element={<Layout compenent={<Home/>}/>}/>
            <Route path='/cart/:id' element={<Layout compenent={<Cart/>}/>}/>
            <Route path='/c/:category' element={<Layout compenent={<Category/>}/>}/>
            <Route path='/cartShop' element={<Layout compenent={<CartShop/>}/>}/>
            <Route path='/favorite' element={<Layout compenent={<Favorite/>}/>}/>
            <Route path='/show' element={<ShowProducts/>}/>
            <Route path='/addProducts' element={<AddProducts id={id} setId={setId}/>}/>
            <Route path='/edit/:produitId' element={<EditProducts/>}/>
        </Routes>
    </BrowserRouter>
  )
}
