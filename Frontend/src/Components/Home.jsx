import React, { Component } from 'react'
import Form from './Form';
import logo from '../logo1.png';
import '../Styles/Home.css';
import { withRouter,  } from 'react-router'
import {Navigate,useNavigate , Link} from 'react-router-dom'



export class Home extends Component {
 
  
  render() {
    return (
      <>
      <div className="nav_home ">
       
          <img src={logo} className="btn btn-secondary" className="main_logo "/>
          <Link to="data/read" className="read btn btn-primary">Read data</Link>
          <Link to="data/modifyDelete" className="modify btn btn-primary">Modify/Delete data</Link>
      </div>
       <div>
         <Form/>
      </div>
      </>
    )
    
  }
}

export default Home;


