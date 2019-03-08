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
import IfobtCategory1 from "./category/colonoscopy/ifobtCategory1.js";
import IfobtCategory2 from "./category/colonoscopy/IfobtCategory2.js";
export default class Colonoscopy extends React.Component {
    constructor(props) {
        super(props);
        // this.child = React.createRef();
        this.state = {
            errors: {},
            symptom: '',
            positiveIFOBT: '',
            NBCSPOrOther:'',
            categorySelected:'',

            // Anaemia as declared in Serverside
            anaemia:'',
            criticalFactor:'',
            otherSymptoms:'',
            likelyCause:'',
            likelyNonGastroUntreated:'',
            age:'',


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
        
        let data = {
            // id:1,
            positiveIFOBT: 1,
            // this.state.positiveIFOBT,
            NBCSPOrOther: this.state.NBCSPOrOther,
            // this.state.NBCSPOrOther
            // this.state.NBCSPOrOther,
        }
        console.log("inside getCategoryFromServer positiveIFOBT" + this.state.positiveIFOBT)
        console.log("inside getCategoryFromServer NBCSPOrOther " + this.state.NBCSPOrOther)
        
        const ifobturl = 'http://128.250.143.10:8090/api/getIfobtCategory';

        var request = new Request(ifobturl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
            mode: "cors",
            credentials: "same-origin",
            crossDomain: true

        });

        fetch(request)
        .then((response) => {
          return response.json();
        })
        .then((jsonObject) => {
          console.log("CREATED ID :" + jsonObject);
          this.state.jsonId = jsonObject;
          // document.write(`ID ${jsonObject.id} was created!`);
        })
        .then(() => {
          if (this.state.jsonId.length !== 0) {
            this.setCategorybasedOnServer(this.state.jsonId)
          }
        })
        .catch((error) => {
          document.write(error);
        });
        console.log("inside getCategoryFromServer222")

    }

    handleIfobt = (NBCSPOrOtherValue) => {
        console.log("handleNBCSPOrOther NBCSPOrOther:" + NBCSPOrOtherValue)
        this.setState({ NBCSPOrOther: NBCSPOrOtherValue });

    }
    handleAnaemia= (anaemiaValue, criticalFactorValue) => {
        console.log("handleNBCSPOrOther anaemiaValue:" + anaemiaValue)
        console.log("handleNBCSPOrOther criticalFactor:" + criticalFactorValue)
        this.setState({ anaemia: anaemiaValue });
        this.setState({ criticalFactor: criticalFactorValue });

    }

  

    setCategorybasedOnServer(category){
        if(category==   2){
            console.log("setCategorybasedOnServer" + category);

            this.setState({categorySelected: <IfobtCategory1/>})
            // this.state.categorySelected =<IfobtCategory1/>;
        } else if(category==1){
            console.log("setCategorybasedOnServer" + category);

            this.setState({categorySelected: <IfobtCategory2/>})
            // this.state.categorySelected =<IfobtCategory1/>;
        }

        // switch (category) {
        //     case '1':
        //     return this.state.categorySelected ==<IfobtCategory1/>
        //     default:
        //         return <Ifobt/>
        // }

    }

    selectPreviousColon(){
        console.log("In ifobt selectPreviousColon")
        // this.child.previous();
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
                    <SympSwitch symptom={this.state.symptom} onIfobt={this.handleIfobt} onAnaemia={this.handleAnaemia}
                    selectPreviousColon={this.selectPreviousColon.bind(this)} 
                    // ref={instance => { this.child = instance; }}
                    />

                </Wizard.Page>
                <Wizard.Page>
                    {this.state.categorySelected}
                {/* <IfobtCategory1/> */}
                    {/* <ColonCat1 /> */}
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