import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home'
import SignUp from './pages/SignUp/SignUp';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
