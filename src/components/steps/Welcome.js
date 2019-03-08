import React from 'react';
// import React, { Component } from 'react';

import uniLogo from '../../../src/img/UniLogo.png';
import proneImg from '../../../src/img/ProneProne.png';
// import DHHSLogo from '../src/img/DHHSLogo.png';

export default class Welcome extends React.Component {

    render() {

        return (
            <div className="container">
                <div className="col-sm-8 App">

                    <p className="predicted-risk">Endoscopy Categorisation Tool</p>
                </div>

                <br /> <br />
                <br />
                <div className="row container">
                    <div className="col-sm-1 "></div>
                    <div className="col-sm-4 ">
                        <button className="App button-start text-button">Categorise colonoscopy</button>
                    </div>
                    <div className="col-sm-1 "></div>
                    <div className="col-sm-4 ">
                        <button className="App button-start text-button">Categorise gastroscopy</button>

                    </div>
                </div>
                <br /> <br /> <br />
                <div>
                    <p className="important-info">Important information:</p>
                    <ul>
                        <li> This tool is designed to be used by health professional..</li>
                        <li> The colonoscopy categorisation rules implemented by this tool are detailed in the document <br />
                            <a target="_blank" href="https://www2.health.vic.gov.au/about/publications/policiesandguidelines/colonoscopy-categorisation-guidelines"><i>Colonoscopy Categorisation Guidelines 2017.</i></a></li>
                    </ul>
                </div>
            </div>
        )
    }
} 