import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
// import "./styles/styles.scss";

import Ifobt from './Ifobt.js'
// import DonutChart from './steps/donutChart.js'


export default class SympSwitch extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            errors: {},
            state: {
                 symptom: '' ,
                  result:'<Ifobt />'
        }
        };
        param: ''


    }

    componentWillUpdate(){
        console.log("param : " + this.props.symptom);
        switch (this.props.symptom) {
            case 'ifobt':
              this.state.result= <Ifobt />;
            case 'anaemia':
            this.state.result= 'anaemia';
            default:
            this.state.result= '<Ifobt/>';
    
            return this.state.result;
        }
    }
    symptomsSwitch(param){
    }

    render(){


        return(
            <div>
 {/* {this.symptomsSwitch(this.props.symptom)} */}
 {this.state.result}
            </div>
        )
    }
}