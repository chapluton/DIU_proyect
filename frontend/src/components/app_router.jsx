import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import Ramo1 from '../pages/ramo1'
import Ramo2 from '../pages/ramo2'
import Calificacion from '../pages/calificacion'
import Calendario from '../pages/calendario'
import Horario from '../pages/horario'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/ramo1' element={<Ramo1 />} />
        <Route path='/ramo2' element={<Ramo2 />} />
        <Route path='/calificacion' element={<Calificacion />} />
        <Route path='/calendario' element={<Calendario />} />
        <Route path='/horario' element={<Horario />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
