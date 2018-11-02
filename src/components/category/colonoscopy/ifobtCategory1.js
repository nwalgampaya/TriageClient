import React from 'react';
// import React, { Component } from 'react';
import '../../../App.css';

export default class IfobtCategory1 extends React.Component {



    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-sm-12 App para-heddings">
                        <p className="">Colonoscopy categorisation</p>
                    </div>

                    <div className="col-sm-12 App para-text">
                        <p>Colonoscopy for this patient is Category 1. This means that the colonoscopy should be undertaken in less than 30 days.</p>
                    </div>
                </div>
                <br/>
            </div>
            )
    }
}