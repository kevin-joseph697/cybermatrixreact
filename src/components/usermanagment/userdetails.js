import React, { useEffect, useState } from 'react'
import {IoMdCreate, IoMdCheckmarkCircle,IoMdClose,IoMdTrash} from 'react-icons/io'
import './userdetails.css'
import axios from 'axios'
import Navigation from '../navigation/nav'

function UserDetails(){

    const [userData,setUserData] = useState([])
    const [inEditMode, setInEditMode] = useState({
        status: false,
        rowKey: null
        });
    const [editcname,setCEditName] = useState('')

    const onEdit = (id) =>{
        setInEditMode({
          status: true,
          rowKey: id.id
      })
      setCEditName(id.companyname)
      }


      const onCancel = () =>{

        // reset the inEditMode state value
        setInEditMode({
          status: false,
          rowKey: null
      })
      
      setCEditName(null);
    
      }


      const onSave = async (id)=>{
        try{
          const response =  await fetch(`http://localhost:3001/updateRecords`, {
            method: "POST",
            body: JSON.stringify({
                id:id.id,
                companyname:editcname
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        setInEditMode({
          status: false,
          rowKey: null
        })  
        getUserDetails()
       
       
        }catch(err){
          console.log(err)
        }
      }
    

      const onDelete = (id) =>{
        try{
            // const userData = {
            //     id:pId,
               
            // }

            const proData = JSON.stringify(userData)
            if(window.confirm('Do you want to delete the record')){
               axios.delete(`http://localhost:3001/deleteRecords/${id}`,userData).then(
                   res=>{
                       console.log(res)
                       getUserDetails()   
                       }
               )
            }
           
        }catch(err){
            console.log(err)
        }
    }




    const getUserDetails =async ()=>{
        try{        
           const users = await axios.get('http://localhost:3001/userList')
           setUserData(users.data)
            // console.log(users.data)
        }catch(err){
            console.log(err)
        }
    }




    useEffect(()=>{
        getUserDetails()
    },[])
    return(
        <div>
            <Navigation />
            <br/>
            <div className='container-fluid'>
                <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                
                                <th scope="col">Name</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Password</th>
                                <th scope="col">Mobile</th>
                                <th scope="col">Company Name</th>
                                <th scope="col">Actions</th>
                            
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    userData.map((tdata, i) => (
                                            <tr key={tdata._id}>
                                                <td>{tdata.name}</td>
                                                <td>{tdata.username}</td>
                                                <td>{tdata.password}</td>
                                                <td>{tdata.mobile}</td>
                                                <td>
                                                {
                                                            
                                                            inEditMode.status && inEditMode.rowKey === tdata._id ? (
                                                            <input type="text" value={editcname }
                                                            onChange={(event) => setCEditName(event.target.value)}
                                                                style={{color:'black'}} />
                                                                ) : (
                                                                tdata.companyname
                                                                )
                                                            }

                                                </td>

                                                {
                                            inEditMode.status && inEditMode.rowKey === tdata._id ? (
                                                                    <React.Fragment>
                                                                    <div className='icons'>
                                                                        <IoMdCheckmarkCircle style={{cursor:'pointer',marginRight:'8px'}}  onClick={() => onSave({id: tdata._id})} />
                                                                        <IoMdClose style={{cursor:'pointer'}}  onClick={() => onCancel()} />
                                                                        </div>  
                                                                    </React.Fragment>
                                                                ) : (
                                                                
                                                                    <div  className="icons"> 
                                                                    <IoMdCreate style={{cursor:"pointer",marginRight:'8px'} }  onClick ={() => onEdit({id: tdata._id, companyname: tdata.companyname})}/>
                                                                    <IoMdTrash style={{cursor:"pointer"} }  onClick ={() => 
                                                                        onDelete(tdata._id)}/>
                                                                    </div>
                                                                )
                                                            }
                                            </tr>
                                        
                                    ))
                                    }
                            
                                </tbody>
                            </table>
            </div>
        </div>
    )
}

export default  UserDetails