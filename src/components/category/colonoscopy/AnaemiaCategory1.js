import React from 'react';
// import React, { Component } from 'react';
import '../../../App.css';

export default class AnaemiaCategory1 extends React.Component {


    setNbscp(){

    }
    render(){
        return(
            <div>
                <div className="col-sm-12 App para-heddings">
                    <p className="">Colonoscopy categorisation</p>
                </div>
                <br/><br/>
                <div className="col-sm-12 App para-heddings">
                    <p className="">Anaemia</p>
                </div>
                <br/><br/><br/>
                {/* <div className="col-sm-12 para-text">
                    <p>Does the patient have an NBCSP or other indication?</p>
                </div> */}

                <div className="col-sm-12">
                     <label className="control-margin-lbl  para-text"   > Colonoscopy for this patient is Category 1. </label>
                     
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
            </div>
        )
    }
}
  