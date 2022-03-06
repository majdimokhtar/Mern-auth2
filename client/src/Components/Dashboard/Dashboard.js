import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../JS/Actions/user'
import { useNavigate } from 'react-router-dom';


function Dashboard() {
  const dispatch =useDispatch();
  const navigate = useNavigate();
  return (
    <div>
    <h1 style={{color:"white"}}>  Dashboard  </h1>   
        <button onClick={()=>{dispatch(logout)
        navigate("/")
        }}>logout</button>
    </div>
  )
}

export default Dashboard