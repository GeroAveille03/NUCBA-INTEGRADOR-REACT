import { Routes as ReactDomRoutes, Route } from 'react-router-dom';
import Checkout from '../pages/Checkout/Checkout';
import Felicitaciones from '../pages/Felicitaciones/Felicitaciones';
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import MisOrdenes from '../pages/MisOrdenes/MisOrdenes';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import Products from '../pages/Products/Products'
import Resumen from '../pages/Resumen/Resumen';
import Register from '../pages/Register/Register'
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute'
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword';

function Routes() {
    return (
      <ReactDomRoutes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/products' element={<Products />} />
        <Route path='/mis-ordenes' element={<MisOrdenes />} />
        <Route path='/felicitaciones' element={<Felicitaciones />} />
        {/* <Route path='/checkout' element={<Checkout/>} /> */}
        <Route path='/resumen/:orderId' element={<Resumen />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='*' element={<PageNotFound />} />

        <Route path='/checkout' 
        element={<ProtectedRoute redirectTo='/register'>
          <Checkout />
        </ProtectedRoute>
          }
        />  

        

      </ReactDomRoutes>
    );
  }
  
  export default Routes;