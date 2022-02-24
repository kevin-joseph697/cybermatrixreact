import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Task</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" style={{cursor:'pointer'}} to={{pathname:'/adduser'}} >Add Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" style={{cursor:'pointer'}} to={{pathname:'/userdetails'}} >UserDetails</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" style={{cursor:'pointer'}} to={{pathname:'/recharts'}} >Reacharts</Link>
                    </li>
              
                </ul>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" style={{cursor:'pointer'}} to={{pathname:'/'}} >Logout</Link>
                    </li>
              
                </ul>
                
                
            </div>
            </nav>
    )
}

export default Navigation