import './App.css';
import Voile from './Components/Voile';
import images from './voiledata';
import {Route,Routes} from 'react-router-dom'
import Nav from './Components/nav';
import Rubia from './Components/rubia';
import imagesrubia from './rubiadata';
import Nav2 from './Components/nav2';


function App() {
  return(
  <>
    <Nav/>
    <Nav2/>
    <Routes>
     <Route path='fullvoile' element={<Voile images={images}/> }/>
     <Route path='rubia' element={<Rubia images={imagesrubia} /> }/>
    </Routes>  
    </>  
  );
}

export default App;
