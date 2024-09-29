import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Home from './components/Home'
import Allusers from './components/Allusers';

import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>

      <Routes>
      <Route path='' element={<Home/>}/>  
      <Route path='/all-users' element={<Allusers/>}/>

      </Routes>
  
    </BrowserRouter>
  );
}

export default App;
