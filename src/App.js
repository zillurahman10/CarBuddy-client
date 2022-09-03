import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home'
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Header from './shares/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
