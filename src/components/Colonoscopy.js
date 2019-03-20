import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
// import "./styles/styles.scss";
import Wizard from '../../src/Wizard.js'
import Welcome from './steps/Welcome.js'
import Guideline from './steps/Guideline.js'
import Symptoms from './steps/Symptoms.js'
// import Ifobt from './steps/Ifobt.js'
// import SympSwitch from './steps/SympSwitch.js'
// import ColonCat1 from '../components/category/colonoscopy/ColonCat1.js'
import IfobtCategory1 from "./category/colonoscopy/ifobtCategory1.js";
import IfobtCategory2 from "./category/colonoscopy/IfobtCategory2.js";
import AnaemiaCategory1 from "./category/colonoscopy/AnaemiaCategory1.js";
import { Field } from 'react-final-form'
import PatientInfo from "./steps/PatientInfo.js";
import ColCategorisation from "./steps/ColCategorisation.js";
// import ColCategorisation from "./steps/ColCategorisation.js";

// import Ifobt from '../components/steps/Ifobt.js'
// import Anaemia from './steps/Anaemia.js'

export default class Colonoscopy extends React.Component {
    constructor(props) {
        super(props);
        // this.child = React.createRef();
        this.child = React.createRef();
        this.childPatient = React.createRef();
        this.state = {
            errors: {},
            symptom: '',
            positiveIFOBT: false,
            haveNBCSPOrOther: true,
            categorySelected: '',
            dataToServer: {},
            serverurl: '',
            age: 111,

            // Anaemia as declared in Serverside
            anaemia: '',
            criticalFactor: '',
            otherSymptoms: '',
            likelyCause: '',
            likelyNonGastroUntreated: '',
            age: '',


            // ifobt
            ifobtState: false,
            // nbcsp: ''

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
    setAge(event) {
        console.log("Age :" + event.target.value);
        if (this.state.clearvalues == 1) {
            this.setState({
                age: '',
            });
        } else {

            this.setState({
                age: event.target.value,
            });
        }
        // this.setClearValue()
    }
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

    setIfobtDataForServer() {
        console.log("inside setIfobtDataForServer positiveIFOBT :" + this.state.positiveIFOBT)
        console.log("inside setIfobtDataForServer haveNBCSPOrOther :" + this.state.haveNBCSPOrOther)

        this.state.serverurl = 'http://128.250.143.10:8090/api/getIfobtCategory';
        return this.state.dataToServer = {
            positiveIFOBT: 1,
            haveNBCSPOrOther: this.state.haveNBCSPOrOther,
        }
    }

    setAnaemiaDataForServer() {
        console.log("inside setAnaemiaDataForServer criticalFactor :" + this.state.criticalFactor)
        console.log("inside setAnaemiaDataForServer otherSymptoms :" + this.state.otherSymptoms)
        console.log("inside setAnaemiaDataForServer otherSymptoms :" + this.state.likelyCause)
        this.state.serverurl = 'http://128.250.143.10:8090/api/getAnaemiaCategory';
        return this.state.dataToServer = {
            anaemia: 1,
            criticalFactor: this.state.criticalFactor,
            otherSymptoms: this.state.otherSymptoms,
            likelyCause: this.state.likelyCause,

        }
    }
    getCategoryFromServer() {

        if (this.state.symptom == 'Anaemia') {
            console.log("in if for Anaemia")
            this.setAnaemiaDataForServer()
        } else if (this.state.symptom == 'Ifobt') {
            console.log("in if for Ifobt")
            this.setIfobtDataForServer()
        }
        // console.log("getCategoryFromServer nbcsp: " + this.state.nbcsp)


        // const ifobturl = 'http://128.250.143.10:8090/api/getIfobtCategory';
        const url = this.state.serverurl
        // const ifobturl = 'http://localhost:8090/api/getIfobtCategory';

        var request = new Request(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.dataToServer),
            mode: "cors",
            credentials: "same-origin",
            crossDomain: true

        });
        <pre>{JSON.stringify(this.state.dataToServer, 0, 2)}</pre>
        fetch(request)
            .then((response) => {
                return response.json();
            })
            .then((jsonObject) => {
                console.log("CREATED ID :" + jsonObject);
                // alert("aaaaa")
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
        // alert("in")

    }

    handleIfobt = (NBCSPOrOtherValue) => {
        console.log("handleNBCSPOrOther NBCSPOrOther:" + NBCSPOrOtherValue)
        this.setState({ haveNBCSPOrOther: NBCSPOrOtherValue });

    }
    handleAnaemia = (anaemiaValue, criticalFactorValue) => {
        console.log("handleNBCSPOrOther anaemiaValue:" + anaemiaValue)
        console.log("handleNBCSPOrOther criticalFactor:" + criticalFactorValue)
        this.setState({ anaemia: anaemiaValue });
        this.setState({ criticalFactor: criticalFactorValue });

    }



    setCategorybasedOnServer(category) {

        console.log("setCategorybasedOnServer **********: " + category)
        if (this.state.symptom == "Ifobt" && category == 1) {
            console.log("setCategorybasedOnServer" + category);

            this.setState({ categorySelected: <IfobtCategory1 /> })
            // this.state.categorySelected =<IfobtCategory1/>;
        } else if (this.state.symptom == "Ifobt" && category == 2) {
            this.setState({ categorySelected: <IfobtCategory2 /> })
        } else if (this.state.symptom == "Anaemia" && (category == 1 || category == 2 || category == 3)) {
            console.log("setCategorybasedOnServer" + category);

            this.setState({ categorySelected: <AnaemiaCategory1 /> })
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
            haveNBCSPOrOther: e.target.value,
        });
        // this.state.nbcsp = e.target.value
        // this.props.onIfobt(e.target.value);
    }

    setIfobtScreen() {

    }

    symptomsSwitch(param) {
        //         param.map((row, i) =>{
        // console.log("param element"+ row)
        //         })
        console.log("param : " + this.state.symptom);
        switch (param) {
            case 'Ifobt':
                // this.state.ifobtState = true;
                return this.askIfobtQuestions()
            case 'Anaemia':
                // <Anaemia onAnaemia={this.handleAnaemia} />;
                return this.askAnaemiaQuestions()
            default:
                this.state.result = '<test />';

                return this.state.result;
        }
    }
    setLikelyCauseAnaemia(e) {
        console.log("setLikelyCauseAnaemia :" + e.target.value);
        // this.setState
        this.setState({
            likelyCause: e.target.value,
        });


    }

    setOtherAnaemiaSympt(e) {
        console.log("setOtherAnaemiaSympt :" + e.target.value);
        // this.setState
        this.setState({
            otherSymptoms: e.target.value,
        });

        // this.setAllSelectedValues(e);
    }

    setAnaemiaCritical(e) {
        console.log("setAnaemiaCritical :" + e.target.value);

        this.setState({
            criticalFactor: e.target.value,
        });

        // this.setAllSelectedValues(e);
    }

    askAnaemiaQuestions() {
        return <div>
            <div className="col-sm-12 App para-heddings">
                <p className="">Anaemia</p>
            </div>
            <br />


            <br />

            <div className="col-sm-12">
                <label className="control-margin-lbl para-text"   > Does the patient have any other critical factor ? </label>
            </div>
            <div className="col-sm-4">
                <div className="form-check form-check-inline" onChange={this.setAnaemiaCritical.bind(this)}>
                    <input className="form-check-input" type="radio" value="true" name="AnaemiaCritical" />
                    <label className="form-check-label" >Yes</label>
                    <input className="form-check-input" type="radio" value="false" name="AnaemiaCritical" />
                    <label className="form-check-label" >No</label></div>
                <br></br>
                <div className="validationMsg">
                </div>
            </div>
            <div className="col-sm-12">
                <label className="control-margin-lbl para-text"   > Does the patient have one or more other symptoms? </label>
            </div>
            <div className="col-sm-4">
                <div className="form-check form-check-inline" onChange={this.setOtherAnaemiaSympt.bind(this)}>
                    <input className="form-check-input" type="radio" value="true" name="OtherAnaemia" />
                    <label className="form-check-label" >Yes</label>
                    <input className="form-check-input" type="radio" value="false" name="OtherAnaemia" />
                    <label className="form-check-label" >No</label></div>
                <br></br>
                <div className="validationMsg">
                </div>
            </div>

            <div className="col-sm-12">
                <label className="control-margin-lbl para-text"   > Does the anaemia have any likely cause? </label>
            </div>
            <div className="col-sm-4">
                <div className="form-check form-check-inline" onChange={this.setLikelyCauseAnaemia.bind(this)}>
                    <input className="form-check-input" type="radio" value="true" name="LikelyCause" />
                    <label className="form-check-label" >Yes</label>
                    <input className="form-check-input" type="radio" value="false" name="LikelyCause" />
                    <label className="form-check-label" >No</label></div>
                <br></br>
                <div className="validationMsg">
                </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    }
    askIfobtQuestions() {

        return <div>
            <div className="col-sm-12 App para-heddings">
                <p className="">iFOBT</p>
            </div>
            <br />
            {/* <div className="col-sm-12">
                        <label className="control-margin-lbl para-text"   > Does the patient have an NBCSP or other indication? </label>
                    </div>
                    <div className="col-sm-4">
                        <div className="form-check form-check-inline" onChange={this.setNbcsp.bind(this)}>
                            <input className="form-check-input" type="radio" value="true" name="NBCSP" />
                            <label className="form-check-label" >Yes</label>
                            <input className="form-check-input" type="radio" value="false" name="NBCSP" />
                            <label className="form-check-label" >No</label></div>
                        <br></br>
                        <div className="validationMsg">
                        </div>
                    </div> */}
            {/* <Error name="NBCSP" /> */}

            <div className="col-sm-12">
                <label className="control-margin-lbl para-text"   > Does the patient have an NBCSP or other indication? </label>
            </div>
            <div className="col-sm-4">
                <div className="form-check form-check-inline" onChange={this.setNbcsp.bind(this)}>
                    <input className="form-check-input" type="radio" value="true" name="NbcspOther" />
                    <label className="form-check-label" >Yes</label>
                    <input className="form-check-input" type="radio" value="false" name="NbcspOther" />
                    <label className="form-check-label" >No</label></div>
                <br></br>
                <div className="validationMsg">
                </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div >
    }

    clickEndSession = () => {
        this.child.current.endSession()
    }

    // onSubmit(e) {
    //     console.log("on Submit colon 11")
    //     this.child.current.onSubmit()
    // }
    // validate(e) {
    //     console.log("on validate colon")
    //     var error = ''

    //     // return error;
    // }
    render() {

        // const grterThn = "<";
        const Error = ({ name }) => (
            <Field
                name={name}
                subscribe={{ touched: true, error: true }}
                render={({ meta: { touched, error } }) =>
                    touched && error ? <div className="inline-error">
                        <ul>
                            <li className="validationMsg">
                                <span>{error}</span>
                            </li>
                        </ul>
                    </div> : null
                }
            />)

        return (
            <Wizard
                ref={this.child}
                initialValues={{ employed: true }}
                // endSession={this.clickEndSession.bind(this)}
                onSubmit={this.onSubmit.bind(this)}
                // validate={this.validate.bind(this)}
                getCategoryFromServer={this.getCategoryFromServer.bind(this)}
            >
                <Wizard.Page>
                    <Welcome />

                </Wizard.Page>

                <Wizard.Page>

                    <Guideline trigerInParent={this.clickEndSession} />

                </Wizard.Page>
                <Wizard.Page validate={values => {
                    const errors = {}
                    console.log("in validation %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 1111")
                    if (this.state.returnArrayFromChild == "") {
                        // alert("In error")
                        console.log("in validation %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% if" + this.state.returnArrayFromChild)
                        errors.specificComplaintcolumn = 'Please enter an appropriate value'
                    } else {
                        console.log("in validation %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% else")
                        // errors.specificComplaintcolumn =''
                    }

                    return errors
                }}>
                    < PatientInfo
                    // ref={this.child}
                    // onSubmit={this.onSubmit.bind(this)}

                    />




                </Wizard.Page>

                <Wizard.Page>
                    <ColCategorisation />
                </Wizard.Page>
                {/* validate={this.validate}> */}
                {/* <Wizard.Page >
                    <Symptoms validate={values => {
                        const errors = {}
                        console.log("in validation Symptoms %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 1111 :" + this.state.age)
                        if (this.state.age == '') {
                            alert("In error age")
                            errors.ageColumn = 'Please enter an appropriate value'
                        }
                        return errors
                    }}
                        onSelectSymptom={this.handleSymptom} />

                </Wizard.Page>


                <Wizard.Page>

                    <div>
                        {this.symptomsSwitch(this.state.symptom)}
                    </div>

                </Wizard.Page>

                <Wizard.Page>

                    {this.state.categorySelected}

                </Wizard.Page> */}
                {/* <Wizard.Page> */}
                {/* {this.state.categorySelected} */}
                {/* <IfobtCategory1/> */}
                {/* <ColonCat1 /> */}
                {/* </Wizard.Page> */}
                {/* <Ifobt/> */}
                {/* <DonutChart/> */}

            </Wizard>


        );

    }
}

// ReactDOM.render(template, document.getElementById("app"));