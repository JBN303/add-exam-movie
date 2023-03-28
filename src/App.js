import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Movies from './components/Movies';
import Read from './components/Read';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/mov' element={<Movies></Movies>}> </Route>
        
        <Route path='/add' 
         element={<Read data={{id:"",dir:"", lang:"",gener:"",
          relyear:""
        }} 
          method="post"></Read> } />
      </Routes>
  </BrowserRouter>
     
      
      
    </div>
  );
}

export default App;