import { Routes as ReactDomRoutes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'

function Routes() {
    return (
      <ReactDomRoutes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </ReactDomRoutes>
    );
  }
  
  export default Routes;