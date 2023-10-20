import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Carta from '../components/carta'
import '../stylesheets/calendario.scss'

const contenidoCalendario=(
    <div className='contenidoCalendario'>
        <a href='/calendario2'>&lt;</a>
        <img src='https://i.ibb.co/5nR42gp/calendario-octubre-2023.jpg'></img>
        <a href='/calendario3'>&gt;</a>
    </div>
);

export const Calendario = () => {
  return (
    <div className='page'>
      <Header/>
        <Carta titulo="(202302)(INF343) SISTEMAS DISTRIBUIDOS|Paralelos:200/201" contenido={contenidoCalendario}/>
      <Footer/>
    </div>
  )
}

export default Calendario
