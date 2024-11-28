import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Result from '../Pages/Result'
import Home from '../Pages/Home'

const AllRoutes = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/result' element={<Result/>}/>
    </Routes>
    </>
  )
}

export default AllRoutes