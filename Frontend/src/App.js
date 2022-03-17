import logo from './logo.png';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import ReadData from './Components/ReadData';
import Details from './Components/Details';
import ModifyDeleteData from './Components/ModifyDeleteData';

function App() {
  return (
    <div>
      
      <main>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/data/read' element={<ReadData/>} />
          <Route path='data/modifyDelete' element={<ModifyDeleteData/>} />
          <Route path='/details' element={<Details/>} />
          
        </Routes>
      </main>
    </div>
  
  );
}

export default App;
