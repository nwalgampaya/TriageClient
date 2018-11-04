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
// import Ifobt from '../components/steps/Ifobt.js'
import Anaemia from './steps/Anaemia.js'

export default class Colonoscopy extends React.Component {
    constructor(props) {
        super(props);
        // this.child = React.createRef();
        this.state = {
            errors: {},
            symptom: '',
            positiveIFOBT: '',
            NBCSPOrOther: '',
            categorySelected: '',

            // Anaemia as declared in Serverside
            anaemia: '',
            criticalFactor: '',
            otherSymptoms: '',
            likelyCause: '',
            likelyNonGastroUntreated: '',
            age: '',


            // ifobt
            ifobtState: false,
            nbcsp: ''

            // complaintType: '111',

            // disableValue: false,
        };
        param: ''

        this.handleChange = this.handleChange.bind(this);

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
        console.log("getCategoryFromServer nbcsp: " + this.state.nbcsp)
        let data = {

            positiveIFOBT: 0,
            NBCSPOrOther11: this.state.nbcsp,

        }
        console.log("inside getCategoryFromServer positiveIFOBT :" + this.state.positiveIFOBT)
        console.log("inside getCategoryFromServer NBCSPOrOther :" + this.state.NBCSPOrOther)

        // const ifobturl = 'http://128.250.143.10:8090/api/getIfobtCategory';
        const ifobturl = 'http://localhost:8090/api/getIfobtCategory';

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
                alert("aaaaa")
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
        alert("in")

    }

    handleIfobt = (NBCSPOrOtherValue) => {
        console.log("handleNBCSPOrOther NBCSPOrOther:" + NBCSPOrOtherValue)
        this.setState({ NBCSPOrOther: NBCSPOrOtherValue });

    }
    handleAnaemia = (anaemiaValue, criticalFactorValue) => {
        console.log("handleNBCSPOrOther anaemiaValue:" + anaemiaValue)
        console.log("handleNBCSPOrOther criticalFactor:" + criticalFactorValue)
        this.setState({ anaemia: anaemiaValue });
        this.setState({ criticalFactor: criticalFactorValue });

    }



    setCategorybasedOnServer(category) {

        if (category == 2) {
            console.log("setCategorybasedOnServer" + category);

            this.setState({ categorySelected: <IfobtCategory1 /> })
            // this.state.categorySelected =<IfobtCategory1/>;
        } else if (category == 1) {
            console.log("setCategorybasedOnServer" + category);

            this.setState({ categorySelected: <IfobtCategory2 /> })
            // this.state.categorySelected =<IfobtCategory1/>;
        }

        // switch (category) {
        //     case '1':
        //     return this.state.categorySelected ==<IfobtCategory1/>
        //     default:
        //         return <Ifobt/>
        // }

    }

    selectPreviousColon() {
        console.log("In ifobt selectPreviousColon")
        // this.child.previous();
    }

    handleChange(e) {
        console.log("in check change" + e.target.checked)
        console.log("in check change" + e.target.name)
        console.log("in check change" + e.target.id)
        this.state.symptom = e.target.name
        console.log("this.state.symptom" + this.state.symptom)
        // this.props.onSelectSymptom(e.target.name);
        // this.setState({
        //   complete: !this.state.complete
        // });
    }

    setNbcsp(e) {
        console.log("setnbcsp :" + e.target.value);
        // this.setState
        this.setState({
            nbcsp: e.target.value,
        });
        this.state.nbcsp = e.target.value
        // this.props.onIfobt(e.target.value);
    }

    setIfobtScreen() {

    }

    symptomsSwitch(param) {
        console.log("param : " + this.state.symptom);
        switch (param) {
            case 'Ifobt':
                // this.state.ifobtState = true;
                return <div>
                    <div className="col-sm-12 App para-heddings">
                        <p className="">iFOBT</p>
                    </div>
                    <br />
                    <div className="col-sm-12">
                        <label className="control-margin-lbl para-text"   > Does the patient have an NBCSP or other indication? </label>
                    </div>
                    <div className="col-sm-4">
                        <div className="form-check form-check-inline" onChange={this.setNbcsp.bind(this)}>
                            <input className="form-check-input" type="radio" value="1" name="NBCSP" />
                            <label className="form-check-label" >Yes</label>
                            <input className="form-check-input" type="radio" value="2" name="NBCSP" />
                            <label className="form-check-label" >No</label></div>
                        <br></br>
                        <div className="validationMsg">
                            {/* <Error name="NBCSP" /> */}
                        </div>
                    </div>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                </div >

            case 'Anaemia':
                return <Anaemia onAnaemia={this.handleAnaemia} />;
            default:
                this.state.result = '<test />';

                return this.state.result;
        }
    }
    render() {

        const grterThn = "<";


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
                    {/* Commenting */}
                    <Symptoms onSelectSymptom={this.handleSymptom} />
                    {/* Commenting */}
                    {/* <div>
                        <div className="col-sm-12 App para-heddings">
                            <p className="">Check all boxes that apply to the patient.</p>
                        </div>
                        <div className="form-check form-check-inline col-sm-12">
                            Indication A: Symptoms or investigations
                <br />
                        </div>
                        <div className="form-check form-check-inline col-sm-12">
                            <input className="form-check-input form-control" onChange={this.handleChange} type="checkbox" name="Ifobt" id="1" value="1" />
                            <label className="form-check-label">Positive immunohistochemical faecal occult blood test (iFOBT (+)) </label>
                        </div>

                        <div className="form-check form-check-inline col-sm-12">
                            <input className="form-check-input form-control" onChange={this.handleChange} type="checkbox" name="Anaemia" id="2" value="1" />
                            <label className="form-check-label">Anaemia </label>
                        </div>

                        <div className="form-check form-check-inline col-sm-12">
                            <input className="form-check-input form-control" onChange={this.handleChange} type="checkbox" name="Rctlbld" id="3" value="1" />
                            <label className="form-check-label">  Rectal bleeding </label>
                        </div>

                        <div className="form-check form-check-inline col-sm-12">
                            <input className="form-check-input form-control" onChange={this.handleChange} type="checkbox" name="Altbh" id="4" />
                            <label className="form-check-label">  Altered bowel habit (> 6/52 and {grterThn} 12 months) </label>
                        </div>
                        <div className="form-check form-check-inline col-sm-12">
                            <input className="form-check-input form-control" onChange={this.handleChange} type="checkbox" name="Abdpain" id="5" value="1" />
                            <label className="form-check-label">  Abdominal pain (unexplained) </label>
                        </div>
                        <div className="form-check form-check-inline col-sm-12">
                            <input className="form-check-input form-control" onChange={this.handleChange} type="checkbox" name="Weightl" id="6" value="1" />
                            <label className="form-check-label">  Weight loss (unexplained) </label>
                        </div>
                        <div className="form-check form-check-inline col-sm-12">
                            <input className="form-check-input form-control" onChange={this.handleChange} type="checkbox" name="Maspal" id="7" value="1" />
                            <label className="form-check-label">  Mass palpable (abdominal or rectal) or present on rigid/flexible sigmoidoscopy </label>
                        </div>
                        <div className="form-check form-check-inline col-sm-12">
                            <input className="form-check-input form-control" onChange={this.handleChange} type="checkbox" name="IBD" id="8" value="1" />
                            <label className="form-check-label">  Possible inflammatory bowel disease (IBD) </label>
                        </div>
                        <div className="form-check form-check-inline col-sm-12">
                            <input className="form-check-input form-control" onChange={this.handleChange} type="checkbox" name="Lferritin" id="7" value="1" />
                            <label className="form-check-label">  Low MCV/MCH or ferritin </label>
                        </div>
                        <div className="form-check form-check-inline col-sm-12">
                            <input className="form-check-input form-control" onChange={this.handleChange} type="checkbox" name="unknown" id="9" value="1" />
                            <label className="form-check-label">  Primary of unknown origin </label>
                        </div>
                        <div className="form-check form-check-inline col-sm-12">
                            <input className="form-check-input form-control" onChange={this.handleChange} type="checkbox" name="Abimg" id="10" value="1" />
                            <label className="form-check-label">  Abnormal imaging </label>
                        </div> */}

                    {/* <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    </div> */}
                </Wizard.Page>


                <Wizard.Page>

                    {/* {this.symptomsSwitch(this.state.symptom)} */}
                    {/* Commenting */}
                    {/* {console.log("this.props.symptomwwwwwwwwwwwwwwww : " + this.state.symptom)}
                    <SympSwitch symptom={this.state.symptom} onIfobt={this.handleIfobt} onAnaemia={this.handleAnaemia}
                        selectPreviousColon={this.selectPreviousColon.bind(this)} /> */}
                    {/* // ref={instance => { this.child = instance; }} */}
                    {/* /> */}
                    {/* Commenting */}

                    <div>
                        {this.symptomsSwitch(this.state.symptom)}
                        {/* {this.state.result} */}
                        {/* {console.log("this.props.symptom : " + this.props.symptom)} */}
                    </div>

                </Wizard.Page>

                <Wizard.Page>

                    <div hidden={this.state.ifobtState}>
                        Hidden
                     </div>

                    <div hidden="false">
                        Hidden false
                     </div>

                </Wizard.Page>
                {/* <Wizard.Page> */}
                {/* {this.state.categorySelected} */}
                {/* <IfobtCategory1/> */}
                {/* <ColonCat1 /> */}
                {/* </Wizard.Page> */}
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