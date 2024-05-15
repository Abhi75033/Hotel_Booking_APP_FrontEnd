import { useState } from 'react';
import '../../../src/index.css'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';
function Login() {
    const [user,setUser]=useState({Username:'',password:''})
   const [ValidateError,setValidateError]=useState({})
   const ValidateForm=()=>{
  const errors={}
    if (!user.Username) {
        errors.Username="UserName can not be empty"
    }
    if (!user.password) {
        errors.password="password can not be empty"
    }else if(user.password.length<8){
        errors.password="Passwor can not less than 8 digits"
    
    }
    return errors
   }

   const handler = async(e)=>{
    e.preventDefault()
    const errors= ValidateForm();
    if (Object.keys(errors).length===0) {
        setValidateError({})
    

        try {
            const resp = await axios.post('http://localhost:3000/api/v1/users/login',user)
            console.log(resp);
            if (resp.status==200) {
              toast.success(resp.data.message)  
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }else{
        setValidateError(errors)
    }
    
   }
    return ( 
    <div className="container-fluid">
    <h1 className="text-center mt-2 fon1">Login/Ragistartion</h1>
    <hr/>
    <form onSubmit={handler}>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label fw-bolder">UserName</label>
    <input type="text" placeholder='@example:JhonDoe123....'
    className={`form-control ${ValidateError.Username? 'is-invalid':''} `} 
    onChange={(e)=>setUser({...user, Username:e.target.value})}/>
   {
    ValidateError.Username &&
    <div className='invalid-feedback'>{ValidateError.Username}</div>
        }
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label fw-bolder">Password</label>
    <input type="password" placeholder='@example:jhondoe@123...' 
     className={`form-control ${ValidateError.password ? 'is-invalid':''} `} 
   onChange={(e)=>setUser({...user, password:e.target.value})}/>
   {
    ValidateError.password &&
    <div className='invalid-feedback'>{ValidateError.password}</div>
 }
  </div>
  <button type="submit" className="btn mt-2 btn-primary w-100 p-2 fs-5 link-opacity-100-hover">Submit</button>
</form>
<p className='text-center mt-4 '>Doesn't have a Account 
    <NavLink to='/Ragistartion' className='ms-2'>
        Create Account
    </NavLink>
</p>
<ToastContainer/>
    </div> 
    );
}

export default Login;