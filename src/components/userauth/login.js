import React, { useState } from 'react'
import  {Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './userauth.css'

function Login(){
    const [username,setUserName] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()
    const  handleSubmit = async (e)=>{
        e.preventDefault()
        console.log(username,password)
        const userData = {
            username:username,
            password:password
        }
       const result = await axios.post('http://localhost:3001/login',userData)
       if(result.data.flag ==1){

            navigate('/userdetails')
       }else if(result.data.flag == 0){
           alert(result.data.msg)
       }

    }

    return(
        <div className='container'>
            <h3>Login Form</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">   
                    <input type="text" className="form-control" id="Username"  placeholder="USERNAME" onChange={e=>setUserName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <Link  className='newAccount'  to={{pathname:'/register'}}>Dont Have Account Sign In</Link>
            {/* <p className='newAccount'>Dont Have Account Sign In</p> */}
        </div>
    )

}

export default  Login
