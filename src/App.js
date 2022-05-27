import { Route, Routes } from 'react-router-dom';
import './App.css';
import ParentsPage from './Component/LandingPage/ParentsPage/ParentsPage';
import Mint from './Component/Mint/Mint';

function App() {
  return (
    <div className="App">
       <Routes>
         <Route path="/" element={ <ParentsPage/>} />
         <Route path="/mint" element={ <Mint/>} />
     </Routes>
    </div>
  );
}

export default App;
