import React from 'react'
import './styles/home.css'
import facebook from './images/facebook.png'
import github from './images/github.png'
import linkedin from './images/linkedin.svg'
import monitores from './images/monitores.jpg'
import dataBase from './images/data-base.jpg'
import computadora from './images/computadora.jpg'


        

const Home = () => {
  return (
    <div className='contenedor' >
         
        <div className="titulo">
          <h1>Desarrollador Web </h1>
        </div>

       



          
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">

    <div className="carousel-item active" data-bs-interval="10000">
      <img src={monitores} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Diseño de Aplicaciones</h5>
        <p>Responsivo adaptable a dispositivos mobiles</p>
      </div>
    </div>

    <div className="carousel-item" data-bs-interval="2000">
      <img src={dataBase} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Lenguajes y Framework</h5>
        <p>JavaScript, Css, Html, React, Php, Botstrapp</p>
      </div>
    </div>

    <div className="carousel-item">
      <img src={computadora} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Diseño Web</h5>
        <p>Desarrollador de aplicaciones Web.</p>
      </div>
    </div>

  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>

  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>




        <footer className="footer">
          <h2>Redes sociales</h2>
          <a href="https://www.facebook.com/" >
            <img className='redes' src={facebook} alt="" />
          </a>
          <a href="https://github.com/Fernandotm573" >
            <img className='redes' src={github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/fernando-triana-montero-31134b182/" >
            <img className='redes' src={linkedin} alt="" />
          </a>
        
        </footer>
        
    </div>
  )
}

export default Home