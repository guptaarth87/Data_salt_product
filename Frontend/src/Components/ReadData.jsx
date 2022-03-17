import React, { Component } from 'react';
import "../Styles/ReadData.css";
import Cards from './Cards';
import Header from './Header';
import { API_URL } from '../Contants';
const axios = require('axios');

class ReadData extends Component {
  constructor() {
    super();
    this.state = {
      patients:[],
       start_date:'',
       end_date:'',
       name:'goku',
       mobileNo:'',
       age:0,
       tags:[],
       medication:'',
       city:'',
       AdharNo:'',
       date:''
    }
  }
  
  componentDidMount() {
     this.filterData();
  };
  filterData() {
    // logic to filter the patients
    const {
      mobileNo,
      AdharNo,
      name,
      start_date,
      end_date
    } = this.state;

    const req={

    };
    // make API call to filter the restaurant
    if (name.length>0){
      req.name= name;
    }
    if (start_date.length > 0) {
        req.start_date= start_date;
    }

    if (end_date.length > 0) {
      req.end_date= end_date;
  }
    if (AdharNo.length >0){
      req.AdharNo=AdharNo;
    }
    if (mobileNo.length > 0){
      req.mobileNo= mobileNo;
    }
    
    axios({
      method: 'GET',
      url: `${API_URL}/filter`,
      headers: { 'Content-Type': 'application/json' },
      data: req
  }).then(result => {
    console.log(result.data.patients);
      this.setState({
         patients:result.data.patients
      });
  }).catch(err => {
      console.log(err);
  });
  }

  render(){
    return(
       <>
         <div className="main_div ">
      <Header/>
      <h1>Hello</h1>
      <div className="container">
      <hr className="line"></hr>
       <Cards/>
       <Cards/>
       

      </div>
      
  </div>;
       </>
      )
  }

}


export default ReadData;

