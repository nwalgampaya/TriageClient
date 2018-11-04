import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
// import "./styles/styles.scss";

import Ifobt from './Ifobt.js'
// import DonutChart from './steps/donutChart.js'

import Anaemia from './Anaemia.js'
export default class SympSwitch extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            errors: {},
            state: {
                symptom: '',
                result: <Ifobt />,
                
                // Ifobt values as in serverside
                positiveNBCSP: '',

                // Anaemia as declared in Serverside
                anaemia:'',
                criticalFactor:'',
                otherSymptoms:'',
                likelyCause:'',
                likelyNonGastroUntreated:'',
                age:'',

            }
        };
        param: ''


    }
    selectPreviousSymSw(){
        console.log("In ifobt selectPreviousSymSw")
        const {selectPreviousColon} = this.props
        return selectPreviousColon();
    }
    componentWillUpdate() {
    }
    symptomsSwitch(param) {
        console.log("param : " + param);
        switch (param) {
            case 'Ifobt':
                return <Ifobt onIfobt={this.handleIfobt} selectPreviousSymSw={this.selectPreviousSymSw.bind(this)}/>;
            case 'Anaemia':
                return <Anaemia onAnaemia ={this.handleAnaemia}/>;
            default:
                this.state.result = '<Ifobt/>';

                return this.state.result;
        }
    }

    // constructSymptomPage(param){
    //     var page = ''
    //     page= '<' +param + '/>'
    //     console.log("page " + page)
    //     return JSON.stringify(page)
        
    // }
    handleIfobt = (iFOBTValue) => {
        console.log("handleIfobt top :" + iFOBTValue)


        this.setState({ positiveNBCSP: iFOBTValue });
        this.props.onIfobt(iFOBTValue);
        console.log("handleIfobt :" + iFOBTValue)
    }

    handleAnaemia = (anaemiaValue, anaemiaCriticalValue) => {
        console.log("handleIfobt top :" + anaemiaValue)


        this.setState({ anaemia: anaemiaValue });
        this.setState({ criticalFactor: anaemiaCriticalValue });
        this.props.onAnaemia(anaemiaValue,anaemiaCriticalValue);
        console.log("handleIfobt :" + anaemiaValue)

        
    }

    render() {


        return (
            <div>
                {this.symptomsSwitch(this.props.symptom)}
                {/* {this.state.result} */}
                {console.log("this.props.symptom : " + this.props.symptom)}
                {/* { (() => {switch (this.props.symptom) {
            case 'ifobt': return <Ifobt />
            case 'anaemia': return <button>Approve</button>
            
            default: return null
          }
        })() } */}
            </div>
        )
    }
}