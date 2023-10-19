import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Carta from '../components/carta'
import '../stylesheets/horario.scss'

const contenidoHorario=(
    <div className='conthorario'>
        <img src='https://i.ibb.co/Jmtx8Ry/image.png'></img>
    </div>
);


export const Horario = () => {
  return (
    <div className='page'>
      <Header/>
        <Carta titulo="(202302)(INF343) SISTEMAS DISTRIBUIDOS|Paralelos:200/201" contenido={contenidoHorario}/>
      <Footer/>
    </div>
  )
}

export default Horario
