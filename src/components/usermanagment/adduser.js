import axios from 'axios'
import React,{useState} from 'react'
import Navigation from '../navigation/nav'


function AddUser (){
    const [name,setName] = useState('')
    const [userName,setUserName] = useState('')
    const [mobile,setMobile] = useState('')
    const [companyName,setCompanyName] =  useState('')
    const [password,setPassword] = useState('')

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try{
            const userData = {
                name:name,
                username:userName,
                mobile:mobile,
                companyname:companyName,
                password:password
            }
           const result = await axios.post('http://localhost:3001/userList',userData)
           if(result.status == 200){
               alert('user added successfully')
               setName('')
               setUserName('')
               setMobile('')
               setCompanyName('')
               setPassword('')
           }
        //    console.log(result.status)
            // console.log(name,userName,mobile,companyName,password)
        }catch(err){
            console.log(err)
        }
    }
    return(
        <div>
            <Navigation />
        
            <div className="container">
                <h3>Add User</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="NAME" value={name} onChange={e=>setName(e.target.value)} required/>
                        </div>
                        <div className="form-group col-md-6">
                        <label htmlFor="username">UserName</label>
                        <input type="text" className="form-control" id="username" placeholder="USERNAME" value={userName} onChange={e=>setUserName(e.target.value)} required/>
                        </div>


                        <div className="form-group col-md-6">
                            <label htmlFo="Mobile">Mobile</label>
                            <input type="text" className="form-control" id="Mobile" placeholder="MOBILE" value={mobile} onChange={e=>setMobile(e.target.value)} required/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="Company Name">Company Name</label>
                            <input type="text" className="form-control" id="Company Name" placeholder="COMPANY NAME" value={companyName} onChange={e=>setCompanyName(e.target.value)} required/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="PASSWORD"  value={password} onChange={e=>setPassword(e.target.value)} required/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </form>
            </div>

        </div>
    )
}
 export default AddUser