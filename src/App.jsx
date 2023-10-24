import './App.css';
import Voile from './Components/Voile';
import images from './voiledata';
import {Route,Routes} from 'react-router-dom'
import Rubia from './Components/rubia';
import imagesrubia from './rubiadata';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Home from './pages/Home';
import Parna from './Components/Parna';
import Footer from './Components/Footer';
import Cart from './pages/Cart';
import ParnaData from './parnadata';
import Kurta from './Components/Kurta';
import kurtadata from './kurtapajama';
import LadiesSuits from './Components/LadiesSuits';
import suits from './ladiessuits';

function App() {
  return(
  <div className='main'>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='fullvoile' element={<Voile images={images}/> }/>
     <Route path='rubia' element={<Rubia images={imagesrubia} /> }/>
     <Route path='signup' element={<Signup/>}/>
     <Route path='signin' element={<Signin/>}/>
     <Route path='parna' element={<Parna ParnaData={ParnaData}/>}/>
     <Route path='cart' element={<Cart/>}/>
     <Route path='kurta' element={<Kurta kurtadata={kurtadata}/>}/>
     <Route path='suit' element={<LadiesSuits suits={suits} />}/>
    </Routes> 
    <div className='underline'></div>
    <Footer/>
    </div>  
  );
}

export default App;
