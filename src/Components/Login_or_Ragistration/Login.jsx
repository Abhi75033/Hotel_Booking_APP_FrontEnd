import { useState } from 'react';
import '../../../src/index.css'
function Login() {
    const [user,setUser]=useState({name:'',email:'',UserName:'',password:''})
   
    return ( 
    <div className="container-fluid">
    <h1 className="text-center mt-2">Ragister</h1>
    <hr/>
    <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label fw-bolder">Name</label>
    <input type="text" class="form-control" onChange={(e)=>setUser({name:e.target.value})}
 placeholder='@example:Jhone Doe'/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label fw-bolder" >E-mail</label>
    <input type="email" placeholder='@example:jhondoe@gmail.com' class="form-control"
     onChange={(e)=>setUser({email:e.target.value})}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label fw-bolder">UserName</label>
    <input type="text" placeholder='@example:JhonDoe123....'
     class="form-control" onChange={(e)=>setUser({UserName:e.target.value})}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label fw-bolder">Password</label>
    <input type="password" placeholder='@example:jhondoe@123...' class="form-control"
   onChange={(e)=>setUser({password:e.target.value})}/>
  </div>
  <button type="submit" class="btn mt-2 btn-primary w-100 p-2 fs-5 link-opacity-100-hover">Submit</button>
</form>
    </div> 
    );
}

export default Login;