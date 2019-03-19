import React from 'react';
// import React, { Component } from 'react';
// import '../../../App.css';

export default class ColCategorisation extends React.Component {



    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12 App para-headings">
                        <p className="">Colonoscopy categorisation</p>

                    </div>

                    <div className="col-sm-12 App guideline-para-text">
                        <p>Colonoscopy for this patient is in Category 1.</p>
                    </div>
                    <div className="col-sm-12 App guideline-para-text">
                        <p>This means that the colonoscopy should be undertaken in less than <b>30 days.</b></p>
                    </div>
                    <div className="col-sm-12 App guideline-para-text">

                        <p><b>iFOBT (+)</b> in the context of a recent, high-quality complete colonoscopy should be considered on an individual basis after full specialist assessment.</p>
                    </div>
                </div>
                <br />
            </div>
        )
    }
}