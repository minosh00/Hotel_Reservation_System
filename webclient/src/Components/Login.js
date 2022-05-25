import React, {useState,useContext} from 'react';
import AuthService from '../Services/AuthService';
import Message from '../Components/Message';
import {AuthContext} from '../Context/AuthContext';
import Swal from "sweetalert2";


const Login = props=>{

    const [user,setUser] = useState({username: "", password : ""});
    const [message,setMessage] = useState(null);
    const authContext = useContext(AuthContext);


    const onChange = e =>{
        e.preventDefault();
        setUser({...user,[e.target.name] : e.target.value});
        console.log(user);
    }

    const onSubmit = e =>{
        e.preventDefault();

        AuthService.login(user).then(data=>{
            console.log(data);

            const { isAuthenticated,user,message} = data;

            if(isAuthenticated){
                authContext.setUser(user);
                authContext.setIsAuthenticated(isAuthenticated);

                {   Swal.fire('Congrats' , 'successfully Login  ' , 'success')

               
                props.history.push('/AdminNarBar');
                   }
          
                props.history.push('/AdminNarBar');
            }
            else

                setMessage(message);
        });
    }






    return (


        <div className="container">
             <br></br>  <br></br> 
<div class="card">
  <img class="card-img-top" src={require('./log (2).png')} height={450} width={-10}  alt="Card image cap"/>
  <div class="card-body">
  <h2 style={{ color: "black", fontSize: "70px" }} data-aos="zoom-in">
     Admin Login
          </h2>
   
    <form onSubmit={onSubmit}>
    <label htmlFor="username" className="sr-only">Username: </label>
                <input type="text" 
                       name="username" 
                       onChange={onChange} 
                       className="form-control" 
                       placeholder="Enter Username"/>
                       <br></br>                 
                       <label htmlFor="password" className="sr-only">Password: </label>
                       <input type="password" 
                              name="password" 
                              onChange={onChange} 
                              className="form-control" 
                              placeholder="Enter Password"/>

                              <br></br> 
                              <button className="btn btn-lg btn-primary btn-block" 
                              type="submit">Log in </button>

                            </form>
                            {message ? <Message message={message}/> : null}
  </div>
</div>
</div>

    )

}



export default Login;