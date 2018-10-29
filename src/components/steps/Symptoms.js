import React from 'react';
import '../../App.css';

export default class Symptoms extends React.Component {
    render() {

        return (
            <div>
                <div className="col-sm-12 App">
                    <p className="">Check all boxes that apply to the patient.</p>
                </div>
                <br/>
                <div className="col-sm-12">
                    Indication A: Symptoms or investigations
                </div>

                <div className="col-sm-12">
                <input type="checkbox"/>Positive immunohistochemical faecal occult blood test (iFOBT (+)) <br/>
                    <input type="checkbox"/>Positive immunohistochemical faecal occult blood test (iFOBT (+))<br/>
                    <input type="checkbox"/>Positive immunohistochemical faecal occult blood test (iFOBT (+))<br/>
                </div>


            </div>

        )
    }
} 