import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Carta from '../components/carta'
import '../stylesheets/calendario.scss'

const contenidoCalendario=(
    <div className='contenidoCalendario'>
        <a href='/calendario'>&lt;</a>
        <img src='https://i.ibb.co/ZLnF9Np/calendario-noviembre-2023.jpg'></img>
    </div>
);

export const Calendario3 = () => {
  return (
    <div className='page'>
      <Header/>
        <Carta titulo="(202302)(INF343) SISTEMAS DISTRIBUIDOS|Paralelos:200/201" contenido={contenidoCalendario}/>
      <Footer/>
    </div>
  )
}

export default Calendario3