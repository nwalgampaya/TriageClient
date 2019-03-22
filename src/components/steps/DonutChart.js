import React from 'react'
import buttonMinus from '../../img/button-minus.png';
// import { Form, Check, Radio } from 'bootstrap/dist/css/bootstrap.min.css';
// import FormValidator from '../validator/FormValidator';
import Form from 'react-bootstrap/Form'
import Wizard from '../../../src/Wizard.js'
import Welcome from '../steps/Welcome.js'
import Guideline from '../steps/Guideline.js'
import ColCategorisation from './ColCategorisation';
import { Field } from 'react-final-form';

export default class PatientInfo extends React.Component {

    constructor(props) {
        super(props);
        this.child = React.createRef();
        // this.validator = new FormValidator([
        //     {
        //         field: "positiveIFOBT",
        //         method: "isEmpty",
        //         validWhen: false,
        //         message: "IFOBT is a required field"
        //     },
        // ])
        this.state = {
            patientAge: 40,
            positiveIFOBT: '',
            positiveNBCSP: '',
            hideNBCSP: true,
            anaemiaOptions: '',
            rectalBOptions: '',
            hideCause: true,
            positiveCause: '',
            altBwlHbtOptions: '',
            abdPainOptions: '',
            positiveWeightLoss: '',
            positiveMassPalpable: '',
            positivePossibleIBD: '',
            hideIfPositiveIBD: true,
            positiveCalprotectin: '',
            positiveCRPESR: '',
            positiveAlbumin: '',
            positiveSigmoidoscopy: '',
            positiveRecentChangeIBD: '',
            positiveFerritin: '',
            positiveUnknownOrigin: '',
            positiveAbnormalImg: '',
            positiveSurveillanceCol: '',
            positiveTherapeuticPoly: '',
            test: "specialist assessment \n (including normal rigid/flexible sigmoidoscopy)"
            // validation: this.validator.valid()
        }
        // this.submitted = false;
    }


    addAge = () => {
        console.log("in add age")
        this.setState({
            patientAge: this.state.patientAge + 1
        })
    }

    substractAge = () => {
        this.setState({
            patientAge: this.state.patientAge - 1
        })
    }

    setIFOBT(event) {

        this.setState({
            positiveIFOBT: event.target.value
        })
        console.log("in " + event.target.value)
        if (event.target.value == 2) {
            this.setState({ hideNBCSP: false })
        } else {
            this.setState({ hideNBCSP: true })
            // this.setState({ positiveNBCSP: '' })
            this.state.positiveNBCSP = ''
            console.log("insetIFOBT else  " + this.state.positiveNBCSP)

        }
    }

    setIfobtTNBSP(event) {
        console.log("in setIfobtTNBSP " + event.target.value)

        this.setState({
            positiveNBCSP: event.target.value
        })
    }

    setAnaemia(event) {
        console.log("in setAnaemia " + event.target.value)

        this.setState({
            anaemiaOptions: event.target.value
        })
    }

    setRectalBleeding(event) {
        console.log("in setAnaemia " + event.target.value)

        this.setState({
            rectalBOptions: event.target.value
        })
        if (event.target.value != 1) {
            this.setState({ hideCause: false })

        } else {
            this.setState({ hideCause: true })
            this.state.positiveCause = ''
        }
    }

    setRBCause(event) {
        this.setState({
            positiveCause: event.target.value
        })
    }

    setAltBwlHbt(event) {
        this.setState({
            altBwlHbtOptions: event.target.value
        })
    }

    setAbdPain(event) {
        this.setState({
            abdPainOptions: event.target.value
        })
    }

    setWeightLoss(event) {
        this.setState({
            positiveWeightLoss: event.target.value
        })
    }

    setMassPalpable(event) {
        this.setState({
            positiveMassPalpable: event.target.value
        })
    }

    setPossibleIBD(event) {
        this.setState({
            positivePossibleIBD: event.target.value
        })
        if (event.target.value != 1) {
            this.setState({ hideIfPositiveIBD: false })

        } else {
            this.setState({ hideIfPositiveIBD: true })
            this.state.positiveCalprotectin = ''
            this.state.positiveCRPESR = ''
            this.state.positiveAlbumin = ''
            this.state.positiveSigmoidoscopy = ''
        }

    }

    setCalprotectin(event) {
        this.setState({
            positiveCalprotectin: event.target.value
        })
    }

    setCRPESR(event) {
        this.setState({
            positiveCRPESR: event.target.value
        })


    }

    setAlbumin(event) {
        this.setState({
            positiveAlbumin: event.target.value
        })
    }

    setSigmoidoscopy(event) {
        this.setState({
            positiveSigmoidoscopy: event.target.value
        })
    }

    setRecentChangeIBD(event) {
        this.setState({
            positiveRecentChangeIBD: event.target.value
        })
    }

    setFerritin(event) {
        this.setState({
            positiveFerritin: event.target.value
        })
    }
    setUnknownOrigin(event) {
        this.setState({
            positiveUnknownOrigin: event.target.value
        })
    }

    setAbnormalImg(event) {
        this.setState({
            positiveAbnormalImg: event.target.value
        })
    }

    setSurveillanceCol(event) {
        this.setState({
            positiveSurveillanceCol: event.target.value
        })
    }

    setTherapeuticPoly(event) {
        this.setState({
            positiveTherapeuticPoly: event.target.value
        })
    }
    clickEndSession = () => {
        this.child.current.endSession()
    }

    onSubmit(e) {
        console.log("in onSUbmit patient")
    }
    // onSubmit() {
    //     console.log("in on submit colon")

    //     const validation = this.validator.validate(this.state);
    //     this.setState({ validation });
    //     this.submitted = true;
    //     if (validation.isValid) {
    //         console.log("in on submit colon")
    //     }
    // }
    render() {
        const Error = ({ name }) => (
            <Field
                name={name}
                subscribe={{ touched: true, error: true }}
                render={({ meta: { touched, error } }) =>
                    touched && error ? <span>{error}</span> : null
                }
            />
        );
        // let validation = this.submitted // if the form has been submitted at least once
        //     ? this.validator.validate(this.state) // then check validity every time we render
        //     : this.state.validation; // otherwise just use what's in state

        return (
            <Wizard
                ref={this.child}
                onSubmit={this.onSubmit.bind(this)}
                initialValues={{ employed: true }}>
                <Wizard.Page>
                    <Welcome />

                </Wizard.Page>

                <Wizard.Page>

                    <Guideline trigerInParent={this.clickEndSession} />

                </Wizard.Page>
                <Wizard.Page validate={values => {
                    const errors = {}
                    console.log("in validation %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 1111")
                    if (this.state.patientAge == 40) {

                        errors.age = "Age is a mandetory feild "
                    }
                    if (this.state.positiveIFOBT == '') {

                        errors.optionIfobt = "This question requires an answer "
                    }
                    console.log(" positiveNBCSP" + this.state.positiveIFOBT)
                    console.log(" positiveNBCSP" + this.state.positiveNBCSP)


                    if (this.state.positiveNBCSP == '' && this.state.positiveIFOBT != 1) {
                        console.log(" positiveNBCSP")

                        errors.optionNbcsp = "This question requires an answer "
                    }
                    if (this.state.anaemiaOptions == '') {

                        errors.optionAnaemia = "This question requires an answer "
                    }
                    if (this.state.rectalBOptions == '') {

                        errors.optionRectalB = "This question requires an answer "
                    }
                    if (this.state.positiveCause == '' && this.state.rectalBOptions != 1) {
                        console.log(" positivecause")
                        errors.optionCause = "This question requires an answer "
                    }
                    if (this.state.altBwlHbtOptions == '') {

                        errors.optionAltBwlHbt = "This question requires an answer "
                    }
                    if (this.state.abdPainOptions == '') {

                        errors.optionAbdPain = "This question requires an answer "
                    }
                    if (this.state.positiveWeightLoss == '') {

                        errors.optionWeightLoss = "This question requires an answer "
                    }
                    if (this.state.positiveMassPalpable == '') {

                        errors.optionMassPalpable = "This question requires an answer "
                    }
                    if (this.state.positivePossibleIBD == '') {

                        errors.optionPossibleIBD = "This question requires an answer "
                    }
                    if (this.state.positiveCalprotectin == '' && this.state.positivePossibleIBD != 1) {

                        errors.optionCalprotectin = "This question requires an answer "
                    }
                    if (this.state.positiveCRPESR == '' && this.state.positivePossibleIBD != 1) {

                        errors.optionCRPESR = "This question requires an answer "
                    }
                    if (this.state.positiveAlbumin == '' && this.state.positivePossibleIBD != 1) {

                        errors.optionAlbumin = "This question requires an answer "
                    }
                    if (this.state.positiveSigmoidoscopy == '' && this.state.positivePossibleIBD != 1) {

                        errors.optionSigmoidoscopy = "This question requires an answer "
                    }

                    if (this.state.positiveRecentChangeIBD == '') {

                        errors.optionRecentChangeIBD = "This question requires an answer "
                    }
                    if (this.state.positiveFerritin == '') {

                        errors.optionFerritin = "This question requires an answer "
                    }
                    if (this.state.positiveUnknownOrigin == '') {

                        errors.optionUnknownOrigin = "This question requires an answer "
                    }
                    if (this.state.positiveAbnormalImg == '') {

                        errors.optionAbnormalImg = "This question requires an answer "
                    }
                    if (this.state.positiveSurveillanceCol == '') {

                        errors.optionSurveillanceCol = "This question requires an answer "
                    }
                    if (this.state.positiveTherapeuticPoly == '') {

                        errors.optionTherapeuticPoly = "This question requires an answer "
                    }

                    return errors;
                }}>
                    <div >
                        <div>
                            <div className="para-headings col-sm-12">
                                <p>Patient Information</p>
                            </div>
                            <div className=" col-sm-12">
                                <div className="padding-Radio row col-sm-11">
                                    <div className="row col-sm-12 ">
                                        <p style={{ paddingTop: "10px", paddingLeft: "5px", paddingRight: "15px" }}> Age </p>
                                        <button type="button" className="App button-AddSub text-button" onClick={this.substractAge}>-</button>
                                        <label name="age" style={{ paddingTop: "10px", paddingLeft: "5px", paddingRight: "5px" }}>{this.state.patientAge}</label>
                                        <button type="button" className="App button-AddSub text-button" onClick={this.addAge}>+</button>
                                    </div>
                                    <div className="validationMsg">
                                        <Error name="age" />
                                    </div>
                                </div>
                                <div >
                                    <h5>Indication A: Symptoms or investigations </h5>
                                </div>
                                <div className=" col-sm-12" onChange={this.setIFOBT.bind(this)}>
                                    <label >Positive immunohistochemical faecal occult blood test (iFOBT(+))</label><br />
                                    <div className="padding-Radio  row col-sm-11">
                                        <div className=" col-sm-10">
                                            <Form.Check custom label="No" type={"radio"} id={`positiveIFOBT-${"1"}`} checked={this.state.positiveIFOBT == 1 ? true : false} name="optionIfobt" value="1" />
                                            <Form.Check custom label="Yes" type={"radio"} id={`positiveIFOBT-${"2"}`} name="optionIfobt" value="2" checked={this.state.positiveIFOBT == 2 ? true : false} />
                                        </div>
                                        <div className="validationMsg">
                                            <Error name="optionIfobt" />
                                        </div>
                                    </div>
                                </div>

                                <div className={this.state.hideNBCSP ? "hidden  col-sm-12 div-top " : "div-top col-sm-12"} onChange={this.setIfobtTNBSP.bind(this)}>
                                    <label>NBCSP or other indication</label><br />
                                    <div className=" padding-Radio row col-sm-11">
                                        <div className=" col-sm-10">
                                            <Form.Check custom label="No" type={"radio"} id={`positiveNBCSP-${"1"}`} checked={this.state.positiveNBCSP == 1 ? true : false} name="optionNbcsp" value="1" />
                                            <Form.Check custom label="Yes" type={"radio"} id={`positiveNBCSP-${"2"}`} checked={this.state.positiveNBCSP == 2 ? true : false} name="optionNbcsp" value="2" />

                                        </div>
                                        <div className="validationMsg">
                                            <Error name="optionNbcsp" />
                                        </div>
                                    </div>
                                </div>
                                <hr className="hr1" />




                                <div className="col-sm-12" onChange={this.setAnaemia.bind(this)}>
                                    <label>Anaemia</label><br />
                                    <div className=" padding-Radio row col-sm-11">
                                        <div className=" col-sm-10">
                                            <Form.Check custom label="No" type={"radio"} id={`anaemiaOptions-${"1"}`} checked={this.state.anaemiaOptions == 1 ? true : false} name="optionAnaemia" value="1" />
                                            <Form.Check custom label="Yes, no likely cause" type={"radio"} id={`anaemiaOptions-${"2"}`} checked={this.state.anaemiaOptions == 2 ? true : false} name="optionAnaemia" value="2" />
                                            <Form.Check custom label="Yes, likely non-gastrointestinal tract cause" type={"radio"} id={`anaemiaOptions-${"3"}`} checked={this.state.anaemiaOptions == 3 ? true : false} name="optionAnaemia" value="3" />
                                            <Form.Check custom label="Yes, untreated likely non-gastrointestinal tract cause such as menorrhagia/diet" type={"radio"} id={`anaemiaOptions-${"4"}`} checked={this.state.anaemiaOptions == 4 ? true : false} name="optionAnaemia" value="4" />
                                        </div>

                                        <div className="validationMsg">
                                            <Error name="optionAnaemia" />
                                        </div>
                                    </div>
                                </div>

                                <hr className="hr1" />

                                <div className="div-top col-sm-12" onChange={this.setRectalBleeding.bind(this)}>
                                    <label>Rectal bleeding</label><br />
                                    <div className=" padding-Radio row col-sm-11">
                                        <div className=" col-sm-10">
                                            <Form.Check custom label="No" type={"radio"} id={`rectalBOptions-${"1"}`} checked={this.state.rectalBOptions == 1 ? true : false} name="optionRectalB" value="1" />
                                            <Form.Check custom label="Yes, ≤ 12 months" type={"radio"} id={`rectalBOptions-${"2"}`} checked={this.state.rectalBOptions == 2 ? true : false} name="optionRectalB" value="2" />
                                            <Form.Check custom label="Yes, > 12 months, occasional" type={"radio"} id={`rectalBOptions-${"3"}`} checked={this.state.rectalBOptions == 3 ? true : false} name="optionRectalB" value="3" />
                                        </div>
                                        <div className="validationMsg">
                                            <Error name="optionRectalB" />
                                        </div>
                                    </div>
                                </div>


                                <div className={this.state.hideCause ? "hidden col-sm-12 div-top" : "div-top col-sm-12"} onChange={this.setRBCause.bind(this)}>
                                    <label>Cause</label><br />
                                    <div className=" padding-Radio row col-sm-11">
                                        <div className=" col-sm-10">
                                            <Form.Check custom label="No likely anorectal cause found <br /> (such as normal  rigid/flexible sigmoidoscopy) or <br />failed treatment of haemorrhoids" type={"radio"} id={`positiveCause-${"1"}`} checked={this.state.positiveCause == 1 ? true : false} name="optionCause" value="1" />
                                            <Form.Check custom label="Likely cause found after <b>specialist assessment </b><br /> including rigid/flexible sigmoidoscopy such as haemorrhoids" type={"radio"} id={`positiveCause-${"2"}`} checked={this.state.positiveCause == 2 ? true : false} name="optionCause" value="2" />
                                        </div>
                                        <div className="validationMsg">
                                            <Error name="optionCause" />
                                        </div>
                                    </div>
                                </div>
                                <hr className="hr1" />


                                <div className="div-top col-sm-12" onChange={this.setAltBwlHbt.bind(this)}>
                                    <label>Altered bowel habit</label><br />
                                    <div className=" padding-Radio row col-sm-11">
                                        <div className=" col-sm-10">
                                            <Form.Check custom label="No" type={"radio"} id={`altBwlHbtOptions-${"1"}`} checked={this.state.altBwlHbtOptions == 1 ? true : false} name="optionAltBwlHbt" value="1" />
                                            <Form.Check custom label="Yes, &lt; 6 weeks" type={"radio"} id={`altBwlHbtOptions-${"2"}`} checked={this.state.altBwlHbtOptions == 2 ? true : false} name="optionAltBwlHbt" value="2" />
                                            <Form.Check custom label="Yes, ≥ 6/52 and ≤ 12 months" type={"radio"} id={`altBwlHbtOptions-${"3"}`} checked={this.state.altBwlHbtOptions == 3 ? true : false} name="optionAltBwlHbt" value="3" />
                                            <Form.Check custom label="Yes, > 12 months" type={"radio"} id={`altBwlHbtOptions-${"4"}`} checked={this.state.altBwlHbtOptions == 4 ? true : false} name="optionAltBwlHbt" value="4" />
                                        </div>
                                        <div className="validationMsg">
                                            <Error name="optionAltBwlHbt" />
                                        </div>

                                    </div>
                                </div>
                                <hr className="hr1" />


                                <div className="div-top col-sm-12" onChange={this.setAbdPain.bind(this)}>
                                    <label>Abdominal pain (unexplained)</label><br />
                                    <div className=" padding-Radio row col-sm-11">
                                        <div className=" col-sm-10">
                                            <Form.Check custom label="No" type={"radio"} id={`abdPainOptions-${"1"}`} checked={this.state.abdPainOptions == 1 ? true : false} name="optionAbdPain" value="1" />
                                            <Form.Check custom label="Yes, &lt; 6 weeks" type={"radio"} id={`abdPainOptions-${"2"}`} checked={this.state.abdPainOptions == 2 ? true : false} name="optionAbdPain" value="2" />
                                            <Form.Check custom label="Yes, ≥ 6 weeks" type={"radio"} id={`abdPainOptions-${"3"}`} checked={this.state.abdPainOptions == 3 ? true : false} name="optionAbdPain" value="3" />
                                        </div>
                                        <div className="validationMsg">
                                            <Error name="optionAbdPain" />
                                        </div>
                                    </div>
                                </div>
                                <hr className="hr1" />


                                <div className="div-top col-sm-12" onChange={this.setWeightLoss.bind(this)}>
                                    <label>Weight loss (unexplained)</label><br />
                                    <div className=" padding-Radio row col-sm-11">
                                        <div className=" col-sm-10">
                                            <Form.Check custom label="No" type={"radio"} id={`positiveWeightLoss-${"1"}`} checked={this.state.positiveWeightLoss == 1 ? true : false} name="optionWeightLoss" value="1" />
                                            <Form.Check custom label="Yes" type={"radio"} id={`positiveWeightLoss-${"2"}`} checked={this.state.positiveWeightLoss == 2 ? true : false} name="optionWeightLoss" value="2" />
                                        </div>
                                        <div className="validationMsg">
                                            <Error name="optionWeightLoss" />
                                        </div>
                                    </div>
                                </div>
                                <hr className="hr1" />

                                <div className="div-top col-sm-12" onChange={this.setMassPalpable.bind(this)}>
                                    <label>Mass palpable (abdominal or rectal) or present on rigid/flexible sigmoidoscopy</label><br />
                                    <div className=" padding-Radio row col-sm-11">
                                        <div className=" col-sm-10">
                                            <Form.Check custom label="No" type={"radio"} id={`positiveMassPalpable-${"1"}`} checked={this.state.positiveMassPalpable == 1 ? true : false} name="optionMassPalpable" value="1" />
                                            <Form.Check custom label="Yes" type={"radio"} id={`positiveMassPalpable-${"2"}`} checked={this.state.positiveMassPalpable == 2 ? true : false} name="optionMassPalpable" value="2" />
                                        </div>
                                        <div className="validationMsg">
                                            <Error name="optionMassPalpable" />
                                        </div>
                                    </div>
                                </div>
                                <hr className="hr1" />


                                <div className="div-top col-sm-12" onChange={this.setPossibleIBD.bind(this)}>
                                    <label>Possible inflammatory bowel disease (IBD)</label><br />
                                    <div className=" padding-Radio row col-sm-11">
                                        <div className=" col-sm-10">
                                            <Form.Check custom label="No" type={"radio"} id={`positivePossibleIBD-${"1"}`} checked={this.state.positivePossibleIBD == 1 ? true : false} name="optionPossibleIBD" value="1" />
                                            <Form.Check custom label="Yes" type={"radio"} id={`positivePossibleIBD-${"2"}`} checked={this.state.positivePossibleIBD == 2 ? true : false} name="optionPossibleIBD" value="2" />
                                        </div>
                                        <div className="validationMsg">
                                            <Error name="optionPossibleIBD" />
                                        </div>
                                    </div>
                                </div>





                                <div className={this.state.hideIfPositiveIBD ? "hidden col-sm-12 div-top " : "div-top col-sm-12"} >
                                    <label>Make a selection for each of the following:</label><br />

                                    <div className="padding-Radio row col-sm-12" onChange={this.setCalprotectin.bind(this)}>
                                        <div className="col-sm-5 ">
                                            <Form.Check custom label="calprotectin (+)" type={"radio"} id={`positiveCalprotectin-${"1"}`} checked={this.state.positiveCalprotectin == 1 ? true : false} name="optionCalprotectin" value="1" />
                                        </div>
                                        <div className="col-sm-7 ">
                                            <Form.Check custom label="calprotectin (-)" type={"radio"} id={`positiveCalprotectin-${"2"}`} checked={this.state.positiveCalprotectin == 2 ? true : false} name="optionCalprotectin" value="2" />
                                        </div>
                                        <div className="validationMsg">
                                            <Error name="optionCalprotectin" />
                                        </div>
                                    </div>


                                    <div className="padding-Radio row col-sm-12" onChange={this.setCRPESR.bind(this)}>
                                        <div className="col-sm-5 ">
                                            <Form.Check custom label="raised CRP or ESR" type={"radio"} id={`positiveCRPESR-${"1"}`} checked={this.state.positiveCRPESR == 1 ? true : false} name="optionCRPESR" value="1" />
                                        </div>
                                        <div className="col-sm-7 ">
                                            <Form.Check custom label="normal CRP and ESR" type={"radio"} id={`positiveCRPESR-${"2"}`} checked={this.state.positiveCRPESR == 2 ? true : false} name="optionCRPESR" value="2" />
                                        </div>
                                        <div className="validationMsg">
                                            <Error name="optionCRPESR" />
                                        </div>
                                    </div>

                                    <div className="padding-Radio row col-sm-12" onChange={this.setAlbumin.bind(this)}>
                                        <div className="col-sm-5 ">
                                            <Form.Check custom label="low albumin" type={"radio"} id={`positiveAlbumin-${"1"}`} checked={this.state.positiveAlbumin == 1 ? true : false} name="optionAlbumin" value="1" />

                                        </div>
                                        <div className="col-sm-7 ">
                                            <Form.Check custom label="low albumin" type={"radio"} id={`positiveAlbumin-${"2"}`} checked={this.state.positiveAlbumin == 2 ? true : false} name="optionAlbumin" value="2" />

                                        </div>
                                        <div className="validationMsg">
                                            <Error name="optionAlbumin" />
                                        </div>
                                    </div>

                                    <div className="padding-Radio row col-sm-12" onChange={this.setSigmoidoscopy.bind(this)}>
                                        <div className="col-sm-5 ">
                                            <Form.Check custom label="abnormal rigid/flexible sigmoidoscopy" type={"radio"} id={`positiveSigmoidoscopy-${"1"}`} checked={this.state.positiveSigmoidoscopy == 1 ? true : false} name="optionSigmoidoscopy" value="1" />
                                        </div>
                                        <div className="col-sm-7">
                                            {/* {test = "specialist assessment (including normal rigid/flexible sigmoidoscopy)"} */}
                                            <Form.Check custom label={this.state.test} type={"radio"} id={`positiveSigmoidoscopy-${"2"}`} checked={this.state.positiveSigmoidoscopy == 2 ? true : false} name="optionSigmoidoscopy" value="2" />
                                        </div>
                                        <div className="validationMsg">
                                            <Error name="optionSigmoidoscopy" />
                                        </div>
                                    </div>
                                </div>
                                <hr className="hr1" />



                                <div className="div-top col-sm-12" onChange={this.setRecentChangeIBD.bind(this)}>
                                    <label>Recent change in treatment for established IBD</label><br />
                                    <div className=" padding-Radio row col-sm-11">
                                        <div className=" col-sm-10">
                                            <Form.Check custom label="No" type={"radio"} id={`positiveRecentChangeIBD-${"1"}`} checked={this.state.positiveRecentChangeIBD == 1 ? true : false} name="optionRecentChangeIBD" value="1" />
                                            <Form.Check custom label="Yes" type={"radio"} id={`positiveRecentChangeIBD-${"2"}`} checked={this.state.positiveRecentChangeIBD == 2 ? true : false} name="optionRecentChangeIBD" value="2" />
                                        </div>

                                        <div className="validationMsg">
                                            <Error name="optionRecentChangeIBD" />
                                        </div>

                                    </div>
                                </div>
                                <hr className="hr1" />


                                <div className="div-top col-sm-12" onChange={this.setFerritin.bind(this)}>
                                    <label>Low MCV/MCH or ferritin</label><br />
                                    <div className=" padding-Radio row col-sm-11">
                                        <div className=" col-sm-10">
                                            <Form.Check custom label="No" type={"radio"} id={`positiveFerritin-${"1"}`} checked={this.state.positiveFerritin == 1 ? true : false} name="optionFerritin" value="1" />
                                            <Form.Check custom label="Yes" type={"radio"} id={`positiveFerritin-${"2"}`} checked={this.state.positiveFerritin == 2 ? true : false} name="optionFerritin" value="2" />
                                        </div>
                                        <div className="validationMsg">
                                            <Error name="optionFerritin" />
                                        </div>

                                    </div>
                                </div>
                                <hr className="hr1" />


                                <div className="div-top col-sm-12" onChange={this.setUnknownOrigin.bind(this)}>
                                    <label>Primary of unknown origin</label><br />
                                    <div className=" padding-Radio row col-sm-11">
                                        <div className=" col-sm-10">
                                            <Form.Check custom label="No" type={"radio"} id={`positiveUnknownOrigin-${"1"}`} checked={this.state.positiveUnknownOrigin == 1 ? true : false} name="optionUnknownOrigin" value="1" />
                                            <Form.Check custom label="Yes" type={"radio"} id={`positiveUnknownOrigin-${"2"}`} checked={this.state.positiveUnknownOrigin == 2 ? true : false} name="optionUnknownOrigin" value="2" />
                                        </div>
                                        <div className="validationMsg">
                                            <Error name="optionUnknownOrigin" />
                                        </div>

                                    </div>
                                </div>
                                <hr className="hr1" />


                                <div className="div-top col-sm-12" onChange={this.setAbnormalImg.bind(this)}>
                                    <label>Abnormal imaging</label><br />
                                    <div className=" padding-Radio row col-sm-11">
                                        <div className=" col-sm-10">
                                            <Form.Check custom label="No" type={"radio"} id={`positiveAbnormalImg-${"1"}`} checked={this.state.positiveAbnormalImg == 1 ? true : false} name="optionAbnormalImg" value="1" />
                                            <Form.Check custom label="Yes, likely colorectal cancer" type={"radio"} id={`positiveAbnormalImg-${"2"}`} checked={this.state.positiveAbnormalImg == 2 ? true : false} name="optionAbnormalImg" value="2" />
                                            <Form.Check custom label="Yes, unlikely colorectal cancer" type={"radio"} id={`positiveAbnormalImg-${"3"}`} checked={this.state.positiveAbnormalImg == 3 ? true : false} name="optionAbnormalImg" value="3" />
                                        </div>
                                        <div className="validationMsg">
                                            <Error name="optionAbnormalImg" />
                                        </div>
                                    </div>
                                </div>
                                <hr className="hr1" />

                                <div className="div-top col-sm-12">
                                    <h5>Indication B: Surveillance or on the basis of family history </h5>
                                </div>

                                <div className="div-top col-sm-12" onChange={this.setSurveillanceCol.bind(this)}>
                                    <label>Surveillance colonoscopy as per NHMRC guidelines</label><br />
                                    <div className="padding-Radio row col-sm-11">
                                        <div className=" col-sm-10">

                                            <Form.Check custom label="No" type={"radio"} id={`positiveSurveillanceCol-${"1"}`} checked={this.state.positiveSurveillanceCol == 1 ? true : false} name="optionSurveillanceCol" value="1" />
                                            <Form.Check custom label="Yes, overdue by > 60 days" type={"radio"} id={`positiveSurveillanceCol-${"2"}`} checked={this.state.positiveSurveillanceCol == 2 ? true : false} name="optionSurveillanceCol" value="2" />
                                            <Form.Check custom label="Yes, not overdue by > 60 days " type={"radio"} id={`positiveSurveillanceCol-${"3"}`} checked={this.state.positiveSurveillanceCol == 3 ? true : false} name="optionSurveillanceCol" value="3" />

                                        </div>
                                        <div className="validationMsg">
                                            <Error name="optionSurveillanceCol" />
                                        </div>
                                    </div>
                                </div>
                                <hr className="hr1" />

                                <div className="div-top col-sm-12">
                                    <h5>Indication C: Therapeutic</h5>
                                </div>


                                <div className="div-top col-sm-12" onChange={this.setTherapeuticPoly.bind(this)}>
                                    <label>Therapeutic polypectomy</label><br />
                                    <div className="padding-Radio row col-sm-11">
                                        <div className=" col-sm-10">

                                            <Form.Check custom label="No" type={"radio"} id={`positiveTherapeuticPoly-${"1"}`} checked={this.state.positiveTherapeuticPoly == 1 ? true : false} name="optionTherapeuticPoly" value="1" />
                                            <Form.Check custom label="Yes, ≥ 2 cm" type={"radio"} id={`positiveTherapeuticPoly-${"2"}`} checked={this.state.positiveTherapeuticPoly == 2 ? true : false} name="optionTherapeuticPoly" value="2" />
                                            <Form.Check custom label="Yes, &gt; 2 cm" type={"radio"} id={`positiveTherapeuticPoly-${"3"}`} checked={this.state.positiveTherapeuticPoly == 3 ? true : false} name="optionTherapeuticPoly" value="3" />
                                        </div>
                                        <div className="validationMsg">
                                            <Error name="optionTherapeuticPoly" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Wizard.Page>
                <Wizard.Page>
                    <ColCategorisation />
                </Wizard.Page>
            </Wizard >



        )
    }
}