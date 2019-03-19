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
                    <p className="para-headings">Colonoscopy Guideline Information</p>
                </div>

                <div className="row">
                    <div className="col-sm-12 App guideline-para-text">
                        <ul><li>Colonoscopy is a diagnostic test that needs to be undertaken in a timely manner. The guidelines offer direction for triaging colonoscopy referrals based on scientific literature and local consensus and should be used in conjunction with clinical judgement. Please see associated <a target="_blank" href="https://www2.health.vic.gov.au/about/publications/policiesandguidelines/colonoscopy-categorisation-explanatory-notes" ><i>Explanatory notes for guidelines </i></a>for further information.
                           </li>

                            <li>A complete assessment must be undertaken prior to a colonoscopy request including history for all symptoms, a thorough examination (including the abdomen and rectum with the exclusion of a <b>mass</b>) and simple <b>investigations (FBC, ferritin, iFOBT).</b> Flexible or rigid sigmoidoscopy should be considered part of specialist assessment (gastroenterology and surgical).
                           </li>

                            <li>Single <b>symptoms</b> alone <b>(rectal bleeding, altered bowel habit, diarrhoea, constipation, unexplained abdominal pain or weight loss)</b> have poor sensitivity for detecting advanced colorectal neoplasia, hence factors are combined along with age for increased sensitivity.
                           </li>
                            <li>The presentation with a symptom in addition to a critical factor <b>(iFOBT (+), anaemia, rectal bleeding, age ≥ 60 years)</b> is considered to hold additional importance.
                           </li>
                            <li>Bright rectal bleeding requires specialist assessment of the anorectum. iFOBT is <b>not</b> appropriate in this group. Consider creating a ‘rectal bleeding’ clinic for this group of patients. A colonoscopy is not always indicated, so guidelines are offered for this significant group as well.
                           </li>
                            <li>The timing of surveillance or family history colonoscopies are recommended as per algorithms based on NHMRC guidelines (2005 and 2011).
                           </li>
                        </ul>
                        <br />
                    </div>
                    <div className="row container">
                        <div className="col-sm-4 "></div>
                        <div className="col-sm-4 ">
                            <button className="App button-guideline text-button">Enter patient data</button>
                        </div>
                        {/* <div className="col-sm-1 "></div> */}
                        <div className="col-sm-4 ">
                            <button className="App button-guideline text-button">End session</button>

                        </div>

                    </div>
                    <br /><br /> <br /><br />
                    <div className="col-sm-12 App guideline-para-text">
                        <h6><b>References</b></h6>
                    </div>
                    <div className="col-sm-12 App guideline-Ref-text">
                        <ol>
                            <li>
                                Barclay K, Cancer Council Australia Surveillance Colonoscopy Guidelines Working Party.  <a target="_blank" href="https://www.cancer.org.au/content/pdf/wiki/Algorithm_for_Colonoscopic_Surveillance_Intervals_-_Adenomas.pdf"> Algorithm for colonoscopic surveillance intervals – adenomas 2013</a>. Accessed 04/02/2016.
                             </li>
                            <li>
                                Barclay K, Cancer Council Australia Surveillance Colonoscopy Guidelines Working Party. <a target="_blank" href="https://www.cancer.org.au/content/pdf/wiki/Algorithm_for_Colonoscopic_Surveillance_Intervals_-_Following_Surgery_for_Colorectal_Cancer.pdf">Algorithm for colonoscopic surveillance intervals – following surgery for colorectal cancer 2013</a>. Accessed 04/02/2016.
                             </li>
                            <li>
                                Barclay K, Cancer Council Australia Surveillance Colonoscopy Guidelines Working Party. <a target="_blank" href="https://www.cancer.org.au/content/pdf/wiki/Algorithm_for_Colonoscopic_Surveillance_Intervals_-_IBD.pdf" >Algorithm for colonoscopic surveillance intervals – inflammatory bowel disease 2015</a>. Accessed 04/02/2016.
                             </li>
                            <li>
                                Cancer Council Australia Colonoscopy Surveillance Working Party. Clinical practice guideline for surveillance colonoscopy – in adenoma follow-up; following curative resection of colorectal cancer; and for cancer surveillance in inflammatory bowel disease. Sydney: Cancer Council Australia, 2011.
                             </li>
                            <li>
                                Geelong. Colonoscopy Clinical Prioritisation Guidelines developed with reference to NHMRC clinical practice guidelines for the prevention, early detection and management of colorectal cancer 2005, The Cancer Council Australia / Australian Cancer Network 2005. 2013.
                             </li>
                            <li>
                                Barclay K ,Cancer Council Australia Surveillance Colonoscopy Guidelines Working Party. <a target="_blank" href="https://www.cancer.org.au/content/pdf/wiki/Algorithm_for_Colorectal_Cancer_Screening_-_Family_History.pdf">Algorithm for colorectal cancer screening – family history 2013</a>. Accessed 04/02/2016.
                             </li>
                        </ol>

                    </div>

                </div>

                {/* <div className="row">
                    <div className="col-sm-12">
                        <div align="centre" className="col-sm-4 "> </div>
                        <div className="col-sm-12 text-center" >
                            <button className="btn button-continue button-center">Continue</button>
                        </div>
                    </div>
                </div> */}
                <br /> <br /> <br />

                {/* </div> */}
            </div>

        )
    }
} 