import React, {useState,useRef,useEffect} from 'react';
import AuthService from '../Services/AuthService';
import Message from '../Components/Message';

const Register = props=>{

    const [user,setUser] = useState({username: "", password : "", email : "", role : "user"});
    const [message,setMessage] = useState(null);
    let timerID = useRef(null);

    useEffect(()=>{

        return ()=>{
            clearTimeout(timerID);
        }
    },[]);

    const onChange = e =>{
        setUser({...user,[e.target.name] : e.target.value});
    }

  
    const resetForm = ()=>{
        setUser({username : "", password : "", email : "",role : "admin"});
    }


const onSubmit = e =>{
        e.preventDefault();
        AuthService.register(user).then(data=>{
            const { message } = data;
            setMessage(message);
            resetForm();
            if(!message.msgError){
                timerID = setTimeout(()=>{
                    props.history.push('/adminlogin');
                },2000)
            }
        });
    }


    return(
        <div className="container">
<br></br>  <br></br> 
<div class="card">
<img class="card-img-top" src={require('./reg.png')} height={570} width={0}  alt="Card image cap"/>
<div class="card-body">
<h2 class="card-title">Admin  Register</h2>
<form onSubmit={onSubmit}>
<label htmlFor="username" className="sr-only">Username: </label>
                <input type="text" 
                       name="username" 
                       value={user.username}
                       onChange={onChange} 
                       className="form-control" 
                       placeholder="Enter Username"/>
                       <br></br>
                <label htmlFor="password" className="sr-only">Password: </label>
                <input type="password" 
                       name="password"
                       value={user.password} 
                       onChange={onChange} 
                       className="form-control" 
                       placeholder="Enter Password"/>
                         <br></br>
                <label htmlFor="email" className="sr-only">email: </label>
                <input type="email" 
                       name="email"
                       value={user.email} 
                       onChange={onChange} 
                       className="form-control" 
                       placeholder="Enter email"/>
  <br></br>
                <label htmlFor="role" className="sr-only">Role: </label>
                <input type="text" 
                       name="role"
                       value={user.role}  
                       onChange={onChange} 
                       className="form-control" 
                       placeholder=""/>
                 <br></br> 
                 
                 <button className="btn btn-lg btn-primary btn-block" 
                        type="submit">Register</button>

               </form>
               {message ? <Message message={message}/> : null}
</div>
</div>
</div>
    )
}


export default Register;