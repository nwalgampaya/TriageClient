import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
// import "./styles/styles.scss";
import Wizard from '../../src/Wizard.js'
import Welcome from './steps/Welcome.js'
import Guideline from './steps/Guideline.js'
import Symptoms from './steps/Symptoms.js'
import Ifobt from './steps/Ifobt.js'
import SympSwitch from './steps/SympSwitch.js'

export default class Colonoscopy extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            errors: {},
            state: { symptom: '' }
            // complaintType: '111',

            // disableValue: false,
        };
        param: ''


        // this.onAddBtnClick = this.onAddBtnClick.bind(this);

    }

    // symptomsSwitch(param) {
    //     console.log("param : " + param);
    //     switch (param) {
    //         case 'ifobt':
    //             return <Ifobt />;
    //         case 'anaemia':
    //             return 'anaemia';
    //         default:
    //             return '<Ifobt/>';
    //     }
    // }

    handleSymptom = (symptomValue) => {
        console.log("symptomValue :" + symptomValue)
        // this.setState({symptom: symptomValue});
        this.state.symptom =symptomValue;
        console.log("symptomValue symptom:" + this.state.symptom);
    }

    componentWillMount(){
        // this.state
    }
    render() {



        return (
            <Wizard>
                <Wizard.Page>
                    <Welcome />

                </Wizard.Page>

                <Wizard.Page>

                    <Guideline />

                </Wizard.Page>

                <Wizard.Page>

                    <Symptoms onSelectSymptom={this.handleSymptom}/>

                </Wizard.Page>


                 <Wizard.Page>
                     {/* {this.symptomsSwitch(this.state.symptom)} */}
                     <SympSwitch symptom ={this.state.symptom}/>
                     
                </Wizard.Page>
                    {/* <Ifobt/> */}
                    {/* <DonutChart/> */}

            </Wizard>


        )
        // temp

    //     <Wizard.Page>
    //     {
    //         {
    //             'ifobt': <Ifobt />,
    //             'bar': 'bar',
    //             default: " return default"
    //         }['ifobt']
    //     }
    //     {/* this.state.symptom */}
    // </Wizard.Page>
    }
}

// ReactDOM.render(template, document.getElementById("app"));