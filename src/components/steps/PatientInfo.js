import React from 'react'
import buttonMinus from '../../img/button-minus.png';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class PatientInfo extends React.Component {

    constructor(props) {
        super(props);
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
            optionSurveillanceCol: '',
            optionTherapeuticPoly: '',
        }
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
            optionSurveillanceCol: event.target.value
        })
    }

    setTherapeuticPoly(event) {
        this.setState({
            optionTherapeuticPoly: event.target.value
        })
    }
    render() {


        return (
            <div >
                <div>
                    <div className="para-headings col-sm-12">
                        <p>Patient Information</p>
                    </div>
                    {/* import buttonPlus from '../../img/button-plus.png';
import buttonMinus from '../../img/button-minus.png';

style={{ backgroundImage: `url(${buttonMinus})` }}
style={{ backgroundImage: `url(${buttonPlus})` }} */}
                    <div className="col-sm-4 ">
                        <button type="button" className="App button-AddSub text-button" onClick={this.substractAge}>-</button>
                        {/* <div className="col-sm-1 "> */}
                        {/* </div> */}
                        {/* <div className="col-sm-1 "> */}
                        <label style={{ paddingTop: "10px", paddingLeft: "5px", paddingRight: "5px" }}>{this.state.patientAge}</label>
                        {/* </div> */}
                        {/* <div className="col-sm-1 "> */}
                        <button type="button" className="App button-AddSub text-button" onClick={this.addAge}>+</button>
                        {/* </div> */}
                    </div>


                    <div className=" col-sm-12">
                        <div >
                            <h5>Indication A: Symptoms or investigations </h5>
                        </div>
                        <div className="row col-sm-12">
                            <div className=" col-sm-12" onChange={this.setIFOBT.bind(this)}>
                                <label >Positive immunohistochemical faecal occult blood test (iFOBT(+))</label><br />
                                <div className="padding-Radio row col-sm-11">
                                    <div className=" col-sm-10">
                                        <input className="form-check-input" type="radio" checked={this.state.positiveIFOBT == 1 ? true : false} value="1" name="optionIfobt" />
                                        <label className="form-check-label" >No</label><br />
                                        <input className="form-check-input" type="radio" checked={this.state.positiveIFOBT == 2 ? true : false} value="2" name="optionIfobt" />
                                        <label className="form-check-label" >Yes</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row col-sm-12">
                            <div className={this.state.hideNBCSP ? "hidden  col-sm-12 div-top " : "div-top col-sm-12"} onChange={this.setIfobtTNBSP.bind(this)}>
                                <label>NBCSP or other indication</label><br />
                                <div className=" padding-Radio row col-sm-11">
                                    <div className=" col-sm-10">
                                        <input className="form-check-input" type="radio" checked={this.state.positiveNBCSP == 1 ? true : false} value="1" name="optionNbcsp" />
                                        <label className="form-check-label" >No</label><br />
                                        <input className="form-check-input" type="radio" checked={this.state.positiveNBCSP == 2 ? true : false} value="2" name="optionNbcsp" />
                                        <label className="form-check-label" >Yes</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr></hr>



                        <div className="row col-sm-12">
                            <div className="col-sm-12" onChange={this.setAnaemia.bind(this)}>
                                <label>Anaemia</label><br />
                                <div className=" padding-Radio row col-sm-11">
                                    <div className=" col-sm-10">
                                        <input className="form-check-input" type="radio" checked={this.state.anaemiaOptions == 1 ? true : false} value="1" name="optionAnaemia" />
                                        <label className="form-check-label" >No</label><br />
                                        <input className="form-check-input" type="radio" checked={this.state.anaemiaOptions == 2 ? true : false} value="2" name="optionAnaemia" />
                                        <label className="form-check-label" >Yes, no likely cause</label><br />
                                        <input className="form-check-input" type="radio" checked={this.state.anaemiaOptions == 3 ? true : false} value="3" name="optionAnaemia" />
                                        <label className="form-check-label" >Yes, likely non-gastrointestinal tract cause</label><br />
                                        <input className="form-check-input" type="radio" checked={this.state.anaemiaOptions == 4 ? true : false} value="4" name="optionAnaemia" />
                                        <label className="form-check-label" >Yes, untreated likely non-gastrointestinal tract cause such as menorrhagia/diet</label>
                                    </div>


                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                        {/* </div> */}
                        {/* </div> */}
                        <div className="row col-sm-12">
                            <div className="div-top col-sm-12" onChange={this.setRectalBleeding.bind(this)}>
                                <label>Rectal bleeding</label><br />
                                <div className=" padding-Radio row col-sm-11">
                                    <div className=" col-sm-10">
                                        <input className="form-check-input" type="radio" checked={this.state.rectalBOptions == 1 ? true : false} value="1" name="optionRectalB" />
                                        <label className="form-check-label" >No</label><br />
                                        <input className="form-check-input" type="radio" checked={this.state.rectalBOptions == 2 ? true : false} value="2" name="optionRectalB" />
                                        <label className="form-check-label" >Yes, ≤ 12 months</label><br />
                                        <input className="form-check-input" type="radio" checked={this.state.rectalBOptions == 3 ? true : false} value="3" name="optionRectalB" />
                                        <label className="form-check-label" >Yes, > 12 months, occasional</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={this.state.hideCause ? "hidden" : "div-top"} onChange={this.setRBCause.bind(this)}>
                            <label>Cause</label><br />
                            <input className="form-check-input" type="radio" checked={this.state.positiveCause == 1 ? true : false} value="1" name="optionCause" />
                            <label className="form-check-label" >No likely anorectal cause found (such as normal rigid/flexible sigmoidoscopy) or
                                failed treatment of haemorrhoids</label><br />
                            <input className="form-check-input" type="radio" checked={this.state.positiveCause == 2 ? true : false} value="2" name="optionCause" />
                            <label className="form-check-label" >Likely cause found after specialist assessment including rigid/flexible
                                sigmoidoscopy such as haemorrhoids</label>
                        </div>

                        <div className="row col-sm-12">
                            <div className="div-top col-sm-12" onChange={this.setAltBwlHbt.bind(this)}>
                                <label>Altered bowel habit</label><br />
                                <div className=" padding-Radio row col-sm-11">
                                    <div className=" col-sm-10">
                                        <input className="form-check-input" type="radio" checked={this.state.altBwlHbtOptions == 1 ? true : false} value="1" name="optionAltBwlHbt" />
                                        <label className="form-check-label" >No</label><br />
                                        <input className="form-check-input" type="radio" checked={this.state.altBwlHbtOptions == 2 ? true : false} value="2" name="optionAltBwlHbt" />
                                        <label className="form-check-label" >Yes, &lt; 6 weeks</label><br />
                                        <input className="form-check-input" type="radio" checked={this.state.altBwlHbtOptions == 3 ? true : false} value="3" name="optionAltBwlHbt" />
                                        <label className="form-check-label" >Yes, ≥ 6/52 and ≤ 12 months</label><br />
                                        <input className="form-check-input" type="radio" checked={this.state.altBwlHbtOptions == 4 ? true : false} value="4" name="optionAltBwlHbt" />
                                        <label className="form-check-label" >Yes, > 12 months</label>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="row col-sm-12">
                            <div className="div-top col-sm-12" onChange={this.setAbdPain.bind(this)}>
                                <label>Abdominal pain (unexplained)</label><br />
                                <div className=" padding-Radio row col-sm-11">
                                    <div className=" col-sm-10">
                                        <input className="form-check-input" type="radio" checked={this.state.abdPainOptions == 1 ? true : false} value="1" name="optionAbdPain" />
                                        <label className="form-check-label" >No</label><br />
                                        <input className="form-check-input" type="radio" checked={this.state.abdPainOptions == 2 ? true : false} value="2" name="optionAbdPain" />
                                        <label className="form-check-label" >Yes, &lt; 6 weeks</label><br />
                                        <input className="form-check-input" type="radio" checked={this.state.abdPainOptions == 3 ? true : false} value="3" name="optionAbdPain" />
                                        <label className="form-check-label" >Yes, ≥ 6 weeks</label>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="row col-sm-12">
                            <div className="div-top col-sm-12" onChange={this.setWeightLoss.bind(this)}>
                                <label>Weight loss (unexplained)</label><br />
                                <div className=" padding-Radio row col-sm-11">
                                    <div className=" col-sm-10">
                                        <input className="form-check-input" type="radio" checked={this.state.positiveWeightLoss == 1 ? true : false} value="1" name="optionWeightLoss" />
                                        <label className="form-check-label" >No</label><br />
                                        <input className="form-check-input" type="radio" checked={this.state.positiveWeightLoss == 2 ? true : false} value="2" name="optionWeightLoss" />
                                        <label className="form-check-label" >Yes</label>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="row col-sm-12">
                            <div className="div-top col-sm-12" onChange={this.setMassPalpable.bind(this)}>
                                <label>Mass palpable (abdominal or rectal) or present on rigid/flexible sigmoidoscopy</label><br />
                                <div className=" padding-Radio row col-sm-11">
                                    <div className=" col-sm-10">
                                        <input className="form-check-input" type="radio" checked={this.state.positiveMassPalpable == 1 ? true : false} value="1" name="optionMassPalpable" />
                                        <label className="form-check-label" >No</label><br />
                                        <input className="form-check-input" type="radio" checked={this.state.positiveMassPalpable == 2 ? true : false} value="2" name="optionMassPalpable" />
                                        <label className="form-check-label" >Yes</label>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="row col-sm-12">
                            <div className="div-top col-sm-12" onChange={this.setPossibleIBD.bind(this)}>
                                <label>Possible inflammatory bowel disease (IBD)</label><br />
                                <div className=" padding-Radio row col-sm-11">
                                    <div className=" col-sm-10">
                                        <input className="form-check-input" type="radio" checked={this.state.positivePossibleIBD == 1 ? true : false} value="1" name="optionPossibleIBD" />
                                        <label className="form-check-label" >No</label><br />
                                        <input className="form-check-input" type="radio" checked={this.state.positivePossibleIBD == 2 ? true : false} value="2" name="optionPossibleIBD" />
                                        <label className="form-check-label" >Yes</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={this.state.hideIfPositiveIBD ? "hidden" : "div-top"} >
                            <label>Make a selection for each of the following:</label><br />
                            <div className="row" onChange={this.setCalprotectin.bind(this)}>
                                <div className="col-sm-4 ">
                                    <input className="form-check-input" type="radio" checked={this.state.positiveCalprotectin == 1 ? true : false} value="1" name="optionCalprotectin" />
                                    <label className="form-check-label" >calprotectin (+)</label>
                                </div>
                                <div className="col-sm-6 ">
                                    <input className="form-check-input" type="radio" checked={this.state.positiveCalprotectin == 2 ? true : false} value="2" name="optionCalprotectin" />
                                    <label className="form-check-label" >calprotectin (-)</label>
                                </div>
                            </div>

                            <div className="row" onChange={this.setCRPESR.bind(this)}>
                                <div className="col-sm-4 ">
                                    <input className="form-check-input" type="radio" checked={this.state.positiveCRPESR == 1 ? true : false} value="1" name="optionCRPESR" />
                                    <label className="form-check-label" >raised CRP or ESR</label>
                                </div>
                                <div className="col-sm-6 ">
                                    <input className="form-check-input" type="radio" checked={this.state.positiveCRPESR == 2 ? true : false} value="2" name="optionCRPESR" />
                                    <label className="form-check-label" >normal CRP and ESR</label>
                                </div>
                            </div>

                            <div className="row" onChange={this.setAlbumin.bind(this)}>
                                <div className="col-sm-4 ">
                                    <input className="form-check-input" type="radio" checked={this.state.positiveAlbumin == 1 ? true : false} value="1" name="optionAlbumin" />
                                    <label className="form-check-label" >low albumin</label>
                                </div>
                                <div className="col-sm-6 ">
                                    <input className="form-check-input" type="radio" checked={this.state.positiveAlbumin == 2 ? true : false} value="2" name="optionAlbumin" />
                                    <label className="form-check-label" >low albumin</label>
                                </div>
                            </div>

                            <div className="row" onChange={this.setSigmoidoscopy.bind(this)}>
                                <div className="col-sm-4  ">
                                    <input className="form-check-input" type="radio" checked={this.state.positiveSigmoidoscopy == 1 ? true : false} value="1" name="optionSigmoidoscopy" />
                                    <label className="form-check-label" >abnormal rigid    /flexible sigmoidoscopy</label>
                                </div>
                                <div className="col-sm-6 ">
                                    <input className="form-check-input" type="radio" checked={this.state.positiveSigmoidoscopy == 2 ? true : false} value="2" name="optionSigmoidoscopy" />
                                    <label className="form-check-label" id="sigmoidoscopy" >specialist assessment (including normal rigid/flexible sigmoidoscopy)</label>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="row col-sm-12">
                    <div className="div-top col-sm-12" onChange={this.setRecentChangeIBD.bind(this)}>
                        <label>Recent change in treatment for established IBD</label><br />
                        <div className=" padding-Radio row col-sm-11">
                            <div className=" col-sm-10">
                                <input className="form-check-input" type="radio" checked={this.state.positiveRecentChangeIBD == 1 ? true : false} value="1" name="optionRecentChangeIBD" />
                                <label className="form-check-label" >No</label><br />
                                <input className="form-check-input" type="radio" checked={this.state.positiveRecentChangeIBD == 2 ? true : false} value="2" name="optionRecentChangeIBD" />
                                <label className="form-check-label" >Yes</label>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row col-sm-12">
                    <div className="div-top col-sm-12" onChange={this.setFerritin.bind(this)}>
                        <label>Low MCV/MCH or ferritin</label><br />
                        <div className=" padding-Radio row col-sm-11">
                            <div className=" col-sm-10">
                                <input className="form-check-input" type="radio" checked={this.state.positiveFerritin == 1 ? true : false} value="1" name="optionFerritin" />
                                <label className="form-check-label" >No</label><br />
                                <input className="form-check-input" type="radio" checked={this.state.positiveFerritin == 2 ? true : false} value="2" name="optionFerritin" />
                                <label className="form-check-label" >Yes</label>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row col-sm-12">
                    <div className="div-top col-sm-12" onChange={this.setUnknownOrigin.bind(this)}>
                        <label>Primary of unknown origin</label><br />
                        <div className=" padding-Radio row col-sm-11">
                            <div className=" col-sm-10">
                                <input className="form-check-input" type="radio" checked={this.state.positiveUnknownOrigin == 1 ? true : false} value="1" name="optionUnknownOrigin" />
                                <label className="form-check-label" >No</label><br />
                                <input className="form-check-input" type="radio" checked={this.state.positiveUnknownOrigin == 2 ? true : false} value="2" name="optionUnknownOrigin" />
                                <label className="form-check-label" >Yes</label>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row col-sm-12">
                    <div className="div-top col-sm-12" onChange={this.setAbnormalImg.bind(this)}>
                        <label>Abnormal imaging</label><br />
                        <div className=" padding-Radio row col-sm-11">
                            <div className=" col-sm-10">
                                <input className="form-check-input" type="radio" checked={this.state.positiveAbnormalImg == 1 ? true : false} value="1" name="optionAbnormalImg" />
                                <label className="form-check-label" >No</label><br />
                                <input className="form-check-input" type="radio" checked={this.state.positiveAbnormalImg == 2 ? true : false} value="2" name="optionAbnormalImg" />
                                <label className="form-check-label" >Yes, likely colorectal cancer</label><br />
                                <input className="form-check-input" type="radio" checked={this.state.positiveAbnormalImg == 3 ? true : false} value="3" name="optionAbnormalImg" />
                                <label className="form-check-label" >Yes, unlikely colorectal cancer </label>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row col-sm-12">
                    <div className="div-top col-sm-12">
                        <h5>INDICATION B: Surveillance or on the basis of family history </h5>
                    </div>INDICATION C: Therapeutic
                    </div>
                <div className="row col-sm-12">
                    <div className="div-top col-sm-12" onChange={this.setSurveillanceCol.bind(this)}>
                        <label>Surveillance colonoscopy as per NHMRC guidelines</label><br />
                        <input className="form-check-input" type="radio" checked={this.state.optionSurveillanceCol == 1 ? true : false} value="1" name="optionSurveillanceCol" />
                        <label className="form-check-label" >No</label><br />
                        <input className="form-check-input" type="radio" checked={this.state.optionSurveillanceCol == 2 ? true : false} value="2" name="optionSurveillanceCol" />
                        <label className="form-check-label" >Yes, overdue by > 60 days</label><br />
                        <input className="form-check-input" type="radio" checked={this.state.optionSurveillanceCol == 3 ? true : false} value="3" name="optionSurveillanceCol" />
                        <label className="form-check-label" >Yes, not overdue by > 60 days </label>
                    </div>
                </div>
                <div className="row col-sm-12">
                    <div className="div-top col-sm-12">
                        <h5>INDICATION C: Therapeutic</h5>
                    </div>

                </div>
                <div className="row col-sm-12">
                    <div className="div-top col-sm-12" onChange={this.setTherapeuticPoly.bind(this)}>
                        <label>Therapeutic polypectomy</label><br />
                        <input className="form-check-input" type="radio" checked={this.state.optionTherapeuticPoly == 1 ? true : false} value="1" name="optionTherapeuticPoly" />
                        <label className="form-check-label" >No</label><br />
                        <input className="form-check-input" type="radio" checked={this.state.optionTherapeuticPoly == 2 ? true : false} value="2" name="optionTherapeuticPoly" />
                        <label className="form-check-label" >Yes, ≥ 2 cm</label><br />
                        <input className="form-check-input" type="radio" checked={this.state.optionTherapeuticPoly == 3 ? true : false} value="3" name="optionTherapeuticPoly" />
                        <label className="form-check-label" >Yes, &gt; 2 cm </label>
                    </div>
                </div>
            </div>





        )
    }
}