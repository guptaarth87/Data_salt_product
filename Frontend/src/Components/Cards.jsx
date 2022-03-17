import React, { Component } from 'react';
import '../Styles/Card.css'

export class Cards extends Component {
  render() {
    return <div>
        <div className="details_section">
       <span className="patient_name"><strong>Aladin Dholuraam</strong></span>
       <span className="mobile_no"><strong>Mobile No :</strong> 1212121212</span>
       <span className="date"><strong>Date :</strong> 01-12-2012</span>
       <span className="tags"><br/><strong>Tags: </strong>tax, fax ,hello ,welcome, caty perry, yo guys, coool, tax, fax ,hello ,welcome, caty perry, yo guys, coool, tax, fax ,hello ,welcome, caty perry, yo guys, coool</span>
       <span className="medication"><br/><strong>Medication :</strong>Dr. Sanjeev Tripathi launched SAMARTH in the year 2005, introducing Indore to the concept of psychotherapy. Since then, we have been helping people overcome their problems and achieve a sense of calm and confidence. We are a team of well-qualified and experienced Clinical Psychologists, Counsellors, Psychologists, Psychiatrists, and Family Therapists with years of experience honing our skills.</span>
       <span className="discription"><br/><strong>Description :</strong>A computer programmer, sometimes called a software developer, a programmer or more recently a coder (especially in more informal contexts), is a person who creates computer software. The term computer programmer can refer to a specialist in one area of computers or to a generalist who writes computer programs.</span>
       <hr className="line"></hr>
      </div>
    </div>;
  }
}

export default Cards;
