import React from 'react';
// import React, { Component } from 'react';
import '../../App.css';

import uniLogo from '../../../src/img/UniLogo.png';
import proneImg from '../../../src/img/ProneProne.png';

export default class Guideline extends React.Component {
    render() {

        return (
            <div>
                {/* <div className="row"> */}
                    <div className="col-sm-12 App">
                        <p className="para-heddings">Colonoscopy Guideline Information</p>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 App guideline-para-text">
                            <ul><li>Colonoscopy is a diagnostic test that needs to be undertaken in a timely manner. The guidelines offer direction for triaging colonoscopy referrals based on scientific literature and local consensus and should be used in conjunction with clinical judgement. Please see associated Explanatory notes for guidelines for further information.
                           </li>

                                <li>A complete assessment must be undertaken prior to a colonoscopy request including history for all symptoms, a thorough examination (including the abdomen and rectum with the exclusion of a mass) and simple investigations (FBC, ferritin, iFOBT). Flexible or rigid sigmoidoscopy should be considered part of specialist assessment (gastroenterology and surgical).
                           </li>

                                <li>Single symptoms alone (rectal bleeding, altered bowel habit, diarrhoea, constipation, unexplained abdominal pain or weight loss) have poor sensitivity for detecting advanced colorectal neoplasia, hence factors are combined along with age for increased sensitivity.
                           </li>
                                <li>The presentation with a symptom in addition to a critical factor (iFOBT (+), anaemia, rectal bleeding, age ≥ 60 years) is considered to hold additional importance.
                           </li>
                                <li>Bright rectal bleeding requires specialist assessment of the anorectum. iFOBT is not appropriate in this group. Consider creating a ‘rectal bleeding’ clinic for this group of patients. A colonoscopy is not always indicated, so guidelines are offered for this significant group as well.
                           </li>
                                <li>The timing of surveillance or family history colonoscopies are recommended as per algorithms based on NHMRC guidelines (2005 and 2011).
                           </li>
                            </ul>
                        </div>

                    </div>
                    
                    <div className="row">
                    <div className="col-sm-12">
                    <div align="centre" className="col-sm-4 "> </div>
                    <div className="col-sm-12 text-center" >
                        <button className="btn button-continue button-center">Continue</button>
                    </div>
                    {/* <div align="centre" className="col-sm-4 "></div> */}
                    </div>
                    </div>
                    <br /> <br /> <br />

                {/* </div> */}
            </div>

        )
    }
} 