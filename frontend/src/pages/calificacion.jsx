import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Carta from '../components/carta'
import '../stylesheets/calificacion.scss'

const contenidoCalificacion=(
    <div className='contcalificacion'> 
        <table border="1">
  <tr>
    <th>Evaluación</th>
    <th class="center-text">Nota</th>
    <th class="center-text">Porcentaje</th>
    <th class="center-text">Nota Final</th>
  </tr>
  <tr class="certamen-row">
    <td>Certamen 1</td>
    <td class="center-text">100</td>
    <td class="center-text" rowspan="2">60%</td>
    <td class="center-text" rowspan="2">100</td>
  </tr>
  <tr class="certamen-row">
    <td>Certamen 2</td>
    <td class="center-text">100</td>
  </tr>
  <tr class="tarea-row">
    <td>Tarea 1</td>
    <td class="center-text">60</td>
    <td class="center-text" rowspan="4">30%</td>
    <td class="center-text" rowspan="4">60</td>
  </tr>
  <tr class="tarea-row">
    <td>Tarea 2</td>
    <td class="center-text">60</td>
  </tr>
  <tr class="tarea-row">
    <td>Tarea 3</td>
    <td class="center-text">60</td>
  </tr>
  <tr class="tarea-row">
    <td>Tarea 4</td>
    <td class="center-text">60</td>
  </tr>
  <tr class="proyecto-row">
    <td>Proyecto 1</td>
    <td class="center-text">70</td>
    <td class="center-text" rowspan="2">10%</td>
    <td class="center-text" rowspan="2">70</td>
  </tr>
  <tr class="proyecto-row">
    <td>Proyecto 2</td>
    <td class="center-text">70</td>
  </tr>
  <tr class="total-row">
    <td colspan="3" class="center-text">Total</td>
    <td class="center-text">85</td>
  </tr>
</table>


    </div>
);

export const Calificacion = () => {
  return (
    <div className='page'>
      <Header/>
        <Carta titulo="(202302)(INF343) SISTEMAS DISTRIBUIDOS|Paralelos:200/201" contenido={contenidoCalificacion}/>
      <Footer/>
    </div>
  )
}

export default Calificacion
