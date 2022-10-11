import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './conponents/Home/Home';
import Login from './conponents/Login/Login';
import Header from './conponents/Header/Header';
import Register from './conponents/Register/Register';
import Products from './conponents/Puroducts/Products';
import Orders from './conponents/Orders/Orders';
import RequireAuth from './conponents/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/products' element={
          <RequireAuth>
            <Products></Products>
          </RequireAuth>
        }></Route>
        <Route path='/orders' element={
          <RequireAuth>
            <Orders></Orders>
          </RequireAuth>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
