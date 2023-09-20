import './App.css';
import Voile from './Components/Voile';
import images from './voiledata';
import {Route,Routes} from 'react-router-dom'
import Nav from './Components/nav';
import Rubia from './Components/rubia';
import imagesrubia from './rubiadata';
import Nav2 from './Components/nav2';
import Signup from './Components/Signup';
import Signin from './Components/Signin';


function App() {
  return(
  <>
    <Nav/>
    <Nav2/>
    <Routes>
     <Route path='fullvoile' element={<Voile images={images}/> }/>
     <Route path='rubia' element={<Rubia images={imagesrubia} /> }/>
     <Route path='signup' element={<Signup/>}/>
     <Route path='signin' element={<Signin/>}/>
    </Routes>  
    </>  
  );
}

export default App;
