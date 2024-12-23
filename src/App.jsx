import React from 'react'
import Home from './Pages/Home'
import ExerciseDetails from './Pages/ExerciseDetails'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Box } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
export default function App() {
  return (
    <>
      <Box width={"1448px"} m={"auto"}>
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/exercise/:id' element={<ExerciseDetails/>}></Route>
</Routes>
      </Box>
      <Footer/>
    </>
  )
}
