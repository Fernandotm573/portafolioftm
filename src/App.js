
import './App.css';
import Header from './components/Header'
import Home from './components/Home';
import Contacto from './components/Contacto';
import Navegacion from './components/Navegacion';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";



function App() {
  return (
    <div className="App">

    


    <Header />
    
    <Router>
  <Navegacion />

      <Routes>
          <Route path='/' element= {<Home />}/>
          <Route path='/contacto' element= {<Contacto />}/>
      </Routes>
    </Router>


    
    
  
    </div>
  );
}

export default App;
