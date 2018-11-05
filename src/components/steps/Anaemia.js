import React from 'react';
// import React, { Component } from 'react';
import '../../App.css';

export default class Anaemia extends React.Component {

       constructor(props) {
        super(props);
        this.state = {
            anaemia: '',
            anaemiaCritical: '',

        }

    }
    setAnaemia(e){
        console.log("setAnaemia :" + e.target.value);
        // this.setState
        this.setState({
            anaemia: e.target.value,
        });

        this.setAllSelectedValues(e);
    }
    setAnaemiaCritical(e){
        console.log("setAnaemiaCritical :" + e.target.value);
        
        this.setState({
            anaemiaCritical: e.target.value,
        });

        this.setAllSelectedValues(e);
    }
    
    setAllSelectedValues(e){
        this.state.anaemia = e.target.value
        this.state.anaemiaCritical = e.target.value
        
        // this.props.onIfobt(e.target.value);

    }
    updatedcomponent(){
console.log("in updatedcomponent")
        this.props.onAnaemia(this.state.anaemia,this.state.anaemiaCritical);
    }

    componentWillUpdate(){
        console.log("Updating each time the check box is clicked")
        this.updatedcomponent
    }
    render(){
        return(
            <div>
                <div className="col-sm-12 App para-heddings">
                    <p className="">Anaemia</p>
                </div>
                <br />

                <div className="col-sm-12">
                    <label className="control-margin-lbl para-text"   > Does the patient have Anaemia ? </label>
                </div>
                <div className="col-sm-4">
                    <div className="form-check form-check-inline" onChange={this.setAnaemia.bind(this)}>
                        <input className="form-check-input" type="radio" value="1" name="Anaemia" />
                        <label className="form-check-label" >Yes</label>
                        <input className="form-check-input" type="radio" value="2" name="Anaemia" />
                        <label className="form-check-label" >No</label></div>
                    <br></br>
                    <div className="validationMsg">
                    </div>
                </div>

                <br/>

                                <div className="col-sm-12">
                    <label className="control-margin-lbl para-text"   > Does the patient have any other critical factor ? </label>
                </div>
                <div className="col-sm-4">
                    <div className="form-check form-check-inline" onChange={this.setAnaemiaCritical.bind(this)}>
                        <input className="form-check-input" type="radio" value="1" name="AnaemiaCritical" />
                        <label className="form-check-label" >Yes</label>
                        <input className="form-check-input" type="radio" value="2" name="AnaemiaCritical" />
                        <label className="form-check-label" >No</label></div>
                    <br></br>
                    <div className="validationMsg">
                    </div>
                </div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        )
    }
}
  