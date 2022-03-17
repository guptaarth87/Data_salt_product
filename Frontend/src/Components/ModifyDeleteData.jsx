import React, { Component } from 'react';
import Cardtwo from './Cardtwo';
import "../Styles/ReadData.css"
import Header from './Header'

export class ModifyDeleteData extends Component {
   
    
  render() {
    return <div >
        <Header/>
       <div className="container">
       <Cardtwo/>
        <Cardtwo/>
        <Cardtwo/>
       </div>
        
    </div>;
  }
}

export default ModifyDeleteData;
