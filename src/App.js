import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './conponents/Home/Home';
import Login from './conponents/Login/Login';
import Header from './conponents/Header/Header';
import Register from './conponents/Register/Register';
import Products from './conponents/Puroducts/Products';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
      </Routes>
    </div>
  );
}

export default App;
