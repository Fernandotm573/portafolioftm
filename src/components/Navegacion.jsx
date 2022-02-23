
import React from 'react'
import {Link} from 'react-router-dom'
import './styles/navegacion.css'



const Navegacion = () => {
  return (

    <div className="contenedor-nav">
    <nav className='nav'>
       <Link to='/' className='link'>Home </Link>
       <Link to='/contacto'  className='link'>Contacto </Link>
    </nav>
    </div>
  )
}

export default Navegacion