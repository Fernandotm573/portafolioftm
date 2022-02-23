import React from 'react';
import  logoReact from './images/logoReact.svg';
import  logoJavascript from './images/logoJavascript.svg';
import  logoPhp from './images/logoPhp.svg'
import './styles/header.css'



const Header = () => {
  return (



    <div className='container'>
      
      <nav className="navbar navbar-dark bg-primary">
      
  <div className="container-fluid">

    <h1>Portafolio</h1>

         
    <a className="navbar-brand" href="https://github.com/Fernandotm573/ProyectMERN.git">
      <img src={logoPhp} className="header-logo" alt="logo"/>
      <p>Proyecto1</p>
    </a>
      
    <a className='navbar-brand' href="https://github.com/Fernandotm573/desarrollador-m3.git">
      <img src={logoReact} className="header-logo" alt="logo"/>
      <p>Proyecto2</p>
    </a>

    <a className='navbar-brand' href="https://github.com/Fernandotm573/CalculadorFigurasGeometricas.git">
    <img src={logoJavascript} className="header-logo" alt="logo"/>
    <p>Proyecto3</p>
    </a>
 

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>


    <div className="collapse navbar-collapse" id="navbarSupportedContent">


      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>

  </div>
</nav>

    </div>



  )
}

export default Header