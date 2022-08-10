import { Routes as ReactDomRoutes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Products from '../pages/Products/Products'

function Routes() {
    return (
      <ReactDomRoutes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/products' element={<Products />} />
      </ReactDomRoutes>
    );
  }
  
  export default Routes;