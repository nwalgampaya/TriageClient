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
import ColonCat1 from '../components/category/colonoscopy/ColonCat1.js'

export default class Colonoscopy extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            errors: {},
            symptom: '',
            positiveIFOBT: ''


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
        this.state.symptom = symptomValue;

        this.setState({
            symptom: symptomValue,

        });
        console.log("symptomValue symptom:" + this.state.symptom);
    }

    componentWillMount() {
        // this.state
    }

    getCategoryFromServer() {
        console.log("inside getCategoryFromServer")

        let data = {
            // id:1,
            positiveIFOBT: this.state.positiveIFOBT,
            NBCSPOrOther: this.state.NBCSPOrOther,
        }

        const ifobturl = 'http://128.250.143.10:8080/ProneSpringBoot/api/getIfobtCategory/';

        var request = new Request(ifobturl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
            mode: "cors",
            credentials: "same-origin",
            crossDomain: true

        });
        console.log("inside getCategoryFromServer222")

    }

    handleIfobt = (iFOBTValue) => {
        console.log("handleIfobt Colonoscopy:" + iFOBTValue)
        this.setState({ positiveIFOBT: iFOBTValue });

    }
    render() {



        return (
            <Wizard
                getCategoryFromServer={this.getCategoryFromServer.bind(this)}
            >
                <Wizard.Page>
                    <Welcome />

                </Wizard.Page>

                <Wizard.Page>

                    <Guideline />

                </Wizard.Page>

                <Wizard.Page>

                    <Symptoms onSelectSymptom={this.handleSymptom} />

                </Wizard.Page>


                <Wizard.Page>
                    {/* {this.symptomsSwitch(this.state.symptom)} */}
                    {console.log("this.props.symptomwwwwwwwwwwwwwwww : " + this.state.symptom)}
                    <SympSwitch symptom={this.state.symptom} onIfobt={this.handleIfobt} />

                </Wizard.Page>
                <Wizard.Page>
                    <ColonCat1 />
                </Wizard.Page>
                {/* <Ifobt/> */}
                {/* <DonutChart/> */}

            </Wizard>


        );
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