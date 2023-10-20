import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Carta from '../components/carta'
import '../stylesheets/calendario.scss'

const contenidoCalendario=(
    <div className='contenidoCalendario'> 
        <img src='https://i.ibb.co/5nR42gp/calendario-octubre-2023.jpg'></img>
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
