import React from 'react';
// import React, { Component } from 'react';
import '../../App.css';
import Wizard from '../../Wizard-old';
import { Field } from 'react-final-form'
import { Form } from 'react-final-form'
import SympSwitch from './SympSwitch.js'

export default class Ifobt extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nbcsp: '',

        }
this.selectPrevious= this.selectPrevious.bind(this)
    }
    setNbcsp(e) {
        console.log("setnbcsp :" + e.target.value);
        // this.setState
        this.setState({
            nbcsp: e.target.value,
        });
        this.state.nbcsp = e.target.value
        this.props.onIfobt(e.target.value);
    }

    componentDidMount() {
        console.log("componentDidMount :" + this.state.nbcsp);

    }

    componentWillUpdate() {
        console.log("componentWillUpdate :" + this.state.nbcsp);
        // this.props.onIfobt(this.state.nbcsp);

    }

    accessWizard(){
        console.log("in access wizard")
    }

    validate = (values) => {

        console.log("in validation %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 22222")
        const { props } = this.activePage;
        return props.validate ? props.validate(values) : {};
    }

    selectPrevious(){
        console.log("In ifobt selectPrevious")
        const {selectPreviousSymSw} = this.props
        return selectPreviousSymSw();
    }
    render() {

        const Error = ({ name }) => (
            <Field
              name={name}
              subscribe={{ touched: true, error: true }}
              render={({ meta: { touched, error } }) =>
                touched && error ? <span>{error}</span> : null
              }
            />
          )
        return (
            // <Wizard>
            // accessWizard={this.accessWizard.bind(this)}
            // <Form
            // // initialValues={values}
            // validate={this.validate}
            // onSubmit={this.handleSubmit}>
                <Wizard.Page validate={values => {
                    const errors = {}
                    console.log("in validation %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 1111")
                    if (!this.state.nbcsp) {
                        errors.NBCSP = 'Please select the appropriate option'
                      }    
                }}>

            <div>
                <div className="col-sm-12 App para-heddings">
                    <p className="">iFOBT</p>
                </div>
                <br />

                {/* <div className="col-sm-12 para-text">
                    <p>Does the patient have an NBCSP or other indication?</p>
                </div> */}

                <div className="col-sm-12">
                    <label className="control-margin-lbl para-text"   > Does the patient have an NBCSP or other indication? </label>
                </div>
                <div className="col-sm-4">
                    <div className="form-check form-check-inline" onChange={this.setNbcsp.bind(this)}>
                        {/* checked={this.state.sex == 1 ? true : false} */}
                        <input className="form-check-input" type="radio" value="1" checked={this.state.sex == 1 ? true : false} name="NBCSP" />
                        <label className="form-check-label" >Yes</label>
                        {/* checked={this.state.sex == 2 ? true : false} */}
                        <input className="form-check-input" type="radio" value="2" checked={this.state.sex == 2 ? true : false} name="NBCSP" />
                        <label className="form-check-label" >No</label></div>
                    <br></br>
                    <div className="validationMsg">
                        <Error name="NBCSP" />
                    </div>
                </div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                {/* {(page ==3  && */}
                {/* <div > */}
                      {/* <button className="btn btn-primary pull-right" type="button" onClick={this.selectCategory}>Categorise colonoscopy</button> */}
                    {/* // )} */}
                {/* </div> */}
                <div > 
                      <button className="btn btn-primary pull-left" type="button" onClick={this.selectPrevious}>Previous</button>
                    {/* // )} */}
                </div>
            </div>
                 </Wizard.Page>
                //  </Form>
                // {/* // </Wizard> */}
        )
    }
}
