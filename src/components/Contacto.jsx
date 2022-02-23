import React from 'react'
import './styles/contacto.css'
import curriculum from './images/curriculum.jpg'


const Contacto = () => {
  return (
    <div className='container'>
       <h1>Sobre Mi</h1>
       <div className="curriculum" >
          <img src={curriculum} className="d-block w-100" alt="..."/>
    </div>
    </div>
  )
}

export default Contacto