import React, { Component } from 'react';
import "../Styles/Header.css"

export class Header extends Component {
  render() {
    return <div className="head_body col-lg-12">
    <br/>
    <div className="row">

      <div className="col-lg-2">
        <label for="startdate" className="form-label">Start date</label>
        <input type="date" className="form-control"  id="startdate" />
      </div>
      <div className="col-lg-2">
      <label for="enddate" className="form-label">End date</label>
        <input type="date" className="form-control" id="startdate" />
      </div>
      <div className="col-lg-2">
        <label for="name_inp" className="form-label">Name</label>
        <input type="text" className="form-control" placeholder="Enter name" id="name_inp"/>
      </div>
      <div className="col-lg-3">
        <label for="number_inp" className="form-label">Number</label>
        <input type="text" className="form-control" placeholder="Enter number" id="number_inp"/>
      </div>
      <div className="col-lg-2">
        <label for="adhar_inp" className="form-label">Adhar No.</label>
        <input type="text" className="form-control" placeholder="Enter Adhar" id="adhar_inp"/>
      </div>
      
      <button className="col-lg-2 btn btn-success apply">Apply Filters</button>
    </div>
    </div>;
  }
}

export default Header;
