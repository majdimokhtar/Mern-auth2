import { LOAD_USER,
    LOGIN_USER,
    LOGOUT_USER,
    FAIL_USER,
    REGISTER_USER, 
    CURRENT_USER} from "../Const/user";
    import axios from "axios";




export const registerUser=(user,navigate )=> async (dispatch) =>{
    dispatch ({type: LOAD_USER});
        try {
            const result =await axios.post("user/register",user)   
            //{user,msg,token}
            // localStorage.setItem("token" , result.data.token)
            dispatch({type: REGISTER_USER,
            payload: result.data
            });
            navigate("/dashboard")
        } catch (error) {
            const {errors,msg}=error.response.data
            if (Array.isArray(errors)) {errors.forEach(err=>alert(err.msg))};
            // console.dir(error);
            dispatch({type: FAIL_USER,
            payload: error.response.data
            });
        }
};




export const loginUser=(user ,navigate)=> async (dispatch) =>{
    dispatch ({type: LOAD_USER});
        try {
            const result = await axios.post("user/login",user)   
            //{user,msg,token}
            dispatch({type:LOGIN_USER, payload:result.data });
            navigate("/dashboard")
            
        } catch (error) {
            const {errors,msg}=error.response.data
            if (Array.isArray(errors)) {errors.forEach(err=>alert(err.msg))};
            if (msg) {
                alert(msg)
            }
            dispatch({type:FAIL_USER, payload:error.response.data})
        }
};



export const current=()=>async (dispatch)=>{
    dispatch ({type: LOAD_USER});
    const options ={
        headers:{
            authorization:localStorage.setItem("token")
        }
    }
    
    try {
        let result =await axios.get("user/current",options )
        //user
        dispatch ({type:CURRENT_USER,payload: result.data.user})

    } 
    
        catch (error) {
            dispatch({type:FAIL_USER, payload:error.response.data})
    }
}



export const logout=()=>{
    return{
        type:LOGOUT_USER
    }
}