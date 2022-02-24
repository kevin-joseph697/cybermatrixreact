import axios from 'axios'
import React, { useState } from 'react'
import  {Link , useNavigate} from 'react-router-dom'
import './userauth.css'

function Register(){
    const [username,setUserName] = useState('')
    const [password,setPassword] = useState('')
    const [conPassword,setConPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async(e)=>{
        e.preventDefault()
        console.log(password,conPassword)
        try{
            const userData = {
                username:username,
                password:password
            }    
            if(password === conPassword){
             const result =  await  axios.post('http://localhost:3001/register',userData)
             navigate('/userdetails')

            }else{
                alert('Paswwords does not match')
            }
        }catch(err){
            console.log(err)
        }
    }

    return(
        <div className='container'>
            <h3>Registeration Form</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">   
                    <input type="text" className="form-control" id="Username"  placeholder="USERNAME "onChange={e=>setUserName(e.target.value)} required/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id="password" placeholder="PASSWORD" onChange={e=>setPassword(e.target.value)} required />
                </div>

                <div className="form-group">
                    <input type="password" className="form-control" id="conpassword" placeholder="CONFIRM PASSWORD" 
                    onChange={e=>setConPassword(e.target.value)}   required/>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>

            <Link  className='newAccount'  to={{pathname:'/'}}>Already Have An Account Sign In</Link>
        </div>
    )

}

export default  Register
