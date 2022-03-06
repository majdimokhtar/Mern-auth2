
// import React from 'react'
// import { Navigate ,Route } from 'react-router-dom'

// const PrivateRoute = ({element:Element , ...rest}) => {
//     const isAuth = localStorage.getItem("token")
//     if (token) {
//         return <Route  element={<Element/>} {...rest} />;
//      }
//      return   <Navigate  to="/" />
  
  
// }

// export default PrivateRoute;

import React from "react";
import { Outlet, Navigate } from "react-router-dom";
const PrivateRoute = () => {
// const location=useLocation();
  const isAuth = localStorage.getItem("token");
  return isAuth ? <Outlet /> : <Navigate  to="/"  />;
};

export default PrivateRoute;