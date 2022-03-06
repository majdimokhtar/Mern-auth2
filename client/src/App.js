import './App.css';
import Signup from './Components/Signup/Signup';
import Dashboard from "./Components/Dashboard/Dashboard"
import {Routes,Route} from "react-router-dom"
import PrivateRoute from './Components/router/PrivateRoute';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { current } from './JS/Actions/user';




function App() {
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(current());
  }, [])
  

  return (
    <div className="App">
      <h1 style={{color:"white"}}>Auth</h1>
      <Routes>
      
        <Route exact path= '/' element={<Signup/>}/>
        <Route  element={< PrivateRoute/>}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        {/* <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route> */}

        {/* <Route element={<PrivateRoute />}> </Route>{" "} */}
          {/* <Route path="/profil" element={<Profil />} />
        </Route>{" "} */}
        {/* <PrivateRoute path= '/dashboard' element={<Dashboard />}/> */}
        
        
    
      
      </Routes>

    </div>
  );
}

export default App;

