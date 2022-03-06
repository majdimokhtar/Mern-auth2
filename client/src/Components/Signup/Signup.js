import "./Signup.css";
import {React,  useState}  from 'react';
import {useDispatch} from "react-redux";
import {loginUser, registerUser} from "../../JS/Actions/user";
import { useNavigate} from 'react-router-dom';






  export default function Signup() {
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const location=useLocation();
    



    return (
        <div>
        <title>Slide Navbar</title>
        <link rel="stylesheet" type="text/css" href="slide navbar style.css" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap" rel="stylesheet" />
        <div className="main">  	
          <input type="checkbox" id="chk" aria-hidden="true" />
          <div className="signup">
            <form>
              {/* sig up */}
              <label htmlFor="chk" aria-hidden="true" style={{marginTop:'10px'}}>Sign up</label>
              <input type="text" name="txt" placeholder="User name" onChange={(e)=>setName(e.target.value)} />
              <input type="text" name="txt" placeholder="User last name" onChange={(e)=>setLastName(e.target.value)} />
              <input type="email" name="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
              <input type="password" name="pswd" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
              <button onClick={(e)=>{
                e.preventDefault();
                dispatch(registerUser({name,lastName,email,password},navigate))}
              }>Sign up</button>
              
            </form>
          </div>
          <div className="login" style={{marginTop:"90px"}}>
            <form>
              <label htmlFor="chk" aria-hidden="true">Login</label>
              <input type="email" name="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
              <input type="password" name="pswd" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
              <button onClick={(e)=>{
                e.preventDefault();
              dispatch(loginUser({email,password},navigate))
              // if (location.state?.from) {
              //   navigate(location.state.from)
              // }
              } }>Login</button>
            </form>
          </div>
        </div>
      </div>

      
    )
  }
  