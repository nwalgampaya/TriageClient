import React from 'react';
// import React, { Component } from 'react';
import '../../App.css';
import Wizard from '../../Wizard-old';

export default class Ifobt extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nbscp: '',

        }

    }
    setNbscp(e) {
        console.log("setNbscp :" + e.target.value);
        // this.setState
        this.setState({
            nbscp: e.target.value,
        });
        this.state.nbscp = e.target.value
        this.props.onIfobt(e.target.value);
    }

    componentDidMount() {
        console.log("componentDidMount :" + this.state.nbscp);

    }

    componentWillUpdate() {
        console.log("componentWillUpdate :" + this.state.nbscp);
        // this.props.onIfobt(this.state.nbscp);

    }

    accessWizard(){
        console.log("in access wizard")
    }
    render() {
        return (
            // <Wizard>
                // <Wizard.Page accessWizard={this.accessWizard.bind(this)}>

            <div>
                <div className="col-sm-12 App para-heddings">
                    <p className="">Positive immunohistochemical faecal occult blood test ( iFOBT (+) )</p>
                </div>
                <br />

                {/* <div className="col-sm-12 para-text">
                    <p>Does the patient have an NBCSP or other indication?</p>
                </div> */}

                <div className="col-sm-12">
                    <label className="control-margin-lbl para-text"   > Does the patient have an NBCSP or other indication? </label>
                </div>
                <div className="col-sm-4">
                    <div className="form-check form-check-inline" onChange={this.setNbscp.bind(this)}>
                        {/* checked={this.state.sex == 1 ? true : false} */}
                        <input className="form-check-input" type="radio" value="1" name="sex" />
                        <label className="form-check-label" >Yes</label>
                        {/* checked={this.state.sex == 2 ? true : false} */}
                        <input className="form-check-input" type="radio" value="2" name="sex" />
                        <label className="form-check-label" >No</label></div>
                    <br></br>
                    <div className="validationMsg">
                        {/* <Error name="sex" /> */}
                    </div>
                </div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                {/* {(page ==3  && */}
                {/* <div > */}
                      {/* <button className="btn btn-primary pull-right" type="button" onClick={this.selectCategory}>Categorise colonoscopy</button> */}
                    {/* // )} */}
                {/* </div> */}
            </div>
                // </Wizard.Page>
                // </Wizard>
        )
    }
}
