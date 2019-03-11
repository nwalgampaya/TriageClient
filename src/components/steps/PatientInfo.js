import React from 'react'

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

    render() {


        return (
            <div>
                <div>
                    <h5>Patient Information</h5>

                    <div className="row col-sm-4 ">
                        <button type="button" className="App button-AddSub text-button" onClick={this.substractAge}>-</button>
                        {/* <div className="col-sm-1 "> */}
                        {/* </div> */}
                        {/* <div className="col-sm-1 "> */}
                        <label style={{ paddingTop: "15px", paddingLeft: "15px", paddingRight: "15px" }}>{this.state.patientAge}</label>
                        {/* </div> */}
                        {/* <div className="col-sm-1 "> */}
                        <button type="button" className="App button-AddSub text-button" onClick={this.addAge}>+</button>
                        {/* </div> */}
                    </div>

                </div>
                <div>
                    <div>
                        <h5>INDICATION A: Symptoms or investigations </h5>
                    </div>
                    <div onChange={this.setIFOBT.bind(this)}>
                        <label>Positive immunohistochemical faecal occult blood test (iFOBT(+))</label><br />
                        <input className="form-check-input" type="radio" checked={this.state.positiveIFOBT == 1 ? true : false} value="1" name="optionIfobt" />
                        <label className="form-check-label" >No</label><br />
                        <input className="form-check-input" type="radio" checked={this.state.positiveIFOBT == 2 ? true : false} value="2" name="optionIfobt" />
                        <label className="form-check-label" >Yes</label>
                    </div>

                    <div className={this.state.hideNBCSP ? "hidden" : ""} onChange={this.setIfobtTNBSP.bind(this)}>
                        <label>NBCSP or other indication</label><br />
                        <input className="form-check-input" type="radio" checked={this.state.positiveNBCSP == 1 ? true : false} value="1" name="optionNbcsp" />
                        <label className="form-check-label" >No</label><br />
                        <input className="form-check-input" type="radio" checked={this.state.positiveNBCSP == 2 ? true : false} value="2" name="optionNbcsp" />
                        <label className="form-check-label" >Yes</label>
                    </div>

                    <div onChange={this.setAnaemia.bind(this)}>
                        <label>Anaemia</label><br />
                        <input className="form-check-input" type="radio" checked={this.state.anaemiaOptions == 1 ? true : false} value="1" name="optionIfobt" />
                        <label className="form-check-label" >No</label><br />
                        <input className="form-check-input" type="radio" checked={this.state.anaemiaOptions == 2 ? true : false} value="2" name="optionIfobt" />
                        <label className="form-check-label" >Yes, no likely cause</label><br />
                        <input className="form-check-input" type="radio" checked={this.state.anaemiaOptions == 3 ? true : false} value="3" name="optionIfobt" />
                        <label className="form-check-label" >Yes, likely non-gastrointestinal tract cause</label><br />
                        <input className="form-check-input" type="radio" checked={this.state.anaemiaOptions == 4 ? true : false} value="4" name="optionIfobt" />
                        <label className="form-check-label" >Yes, untreated likely non-gastrointestinal tract cause such as menorrhagia/diet</label>
                    </div>

                    <div onChange={this.setRectalBleeding.bind(this)}>
                        <label>Rectal bleeding</label><br />
                        <input className="form-check-input" type="radio" checked={this.state.rectalBOptions == 1 ? true : false} value="1" name="optionIfobt" />
                        <label className="form-check-label" >No</label><br />
                        <input className="form-check-input" type="radio" checked={this.state.rectalBOptions == 2 ? true : false} value="2" name="optionIfobt" />
                        <label className="form-check-label" >Yes, ≤ 12 months</label><br />
                        <input className="form-check-input" type="radio" checked={this.state.rectalBOptions == 3 ? true : false} value="3" name="optionIfobt" />
                        <label className="form-check-label" >Yes, > 12 months, occasional</label>
                    </div>
                    <div className={this.state.hideCause ? "hidden" : ""} onChange={this.setRBCause.bind(this)}>
                        <label>Cause</label><br />
                        <input className="form-check-input" type="radio" checked={this.state.positiveCause == 1 ? true : false} value="1" name="optionCause" />
                        <label className="form-check-label" >No likely anorectal cause found (such as normal rigid/flexible sigmoidoscopy) or
                                failed treatment of haemorrhoids</label><br />
                        <input className="form-check-input" type="radio" checked={this.state.positiveCause == 2 ? true : false} value="2" name="optionCause" />
                        <label className="form-check-label" >Likely cause found after specialist assessment including rigid/flexible
                                sigmoidoscopy such as haemorrhoids</label>
                    </div>

                    <div onChange={this.setAltBwlHbt.bind(this)}>
                        <label>Altered bowel habit</label><br />
                        <input className="form-check-input" type="radio" checked={this.state.altBwlHbtOptions == 1 ? true : false} value="1" name="optionAltBwlHbt" />
                        <label className="form-check-label" >No</label><br />
                        <input className="form-check-input" type="radio" checked={this.state.altBwlHbtOptions == 2 ? true : false} value="2" name="optionAltBwlHbt" />
                        <label className="form-check-label" >Yes, &lt; 6 weeks</label><br />
                        <input className="form-check-input" type="radio" checked={this.state.altBwlHbtOptions == 3 ? true : false} value="3" name="optionAltBwlHbt" />
                        <label className="form-check-label" >Yes, ≥ 6/52 and ≤ 12 months</label><br />
                        <input className="form-check-input" type="radio" checked={this.state.altBwlHbtOptions == 4 ? true : false} value="4" name="optionAltBwlHbt" />
                        <label className="form-check-label" >Yes, > 12 months</label>
                    </div>

                    <div onChange={this.setAbdPain.bind(this)}>
                        <label>Abdominal pain (unexplained)</label><br />
                        <input className="form-check-input" type="radio" checked={this.state.abdPainOptions == 1 ? true : false} value="1" name="optionAbdPain" />
                        <label className="form-check-label" >No</label><br />
                        <input className="form-check-input" type="radio" checked={this.state.abdPainOptions == 2 ? true : false} value="2" name="optionAbdPain" />
                        <label className="form-check-label" >Yes, &lt; 6 weeks</label><br />
                        <input className="form-check-input" type="radio" checked={this.state.abdPainOptions == 3 ? true : false} value="3" name="optionAbdPain" />
                        <label className="form-check-label" >Yes, ≥ 6 weeks</label>
                    </div>

                    <div onChange={this.setWeightLoss.bind(this)}>
                        <label>Weight loss (unexplained)</label><br />
                        <input className="form-check-input" type="radio" checked={this.state.positiveWeightLoss == 1 ? true : false} value="1" name="optionWeightLoss" />
                        <label className="form-check-label" >No</label><br />
                        <input className="form-check-input" type="radio" checked={this.state.positiveWeightLoss == 2 ? true : false} value="2" name="optionWeightLoss" />
                        <label className="form-check-label" >Yes</label>
                    </div>

                    <div onChange={this.setMassPalpable.bind(this)}>
                        <label>Mass palpable (abdominal or rectal) or present on rigid/flexible sigmoidoscopy</label><br />
                        <input className="form-check-input" type="radio" checked={this.state.positiveMassPalpable == 1 ? true : false} value="1" name="optionMassPalpable" />
                        <label className="form-check-label" >No</label><br />
                        <input className="form-check-input" type="radio" checked={this.state.positiveMassPalpable == 2 ? true : false} value="2" name="optionMassPalpable" />
                        <label className="form-check-label" >Yes</label>
                    </div>

                    <div onChange={this.setPossibleIBD.bind(this)}>
                        <label>Possible inflammatory bowel disease (IBD)</label><br />
                        <input className="form-check-input" type="radio" checked={this.state.positivePossibleIBD == 1 ? true : false} value="1" name="optionPossibleIBD" />
                        <label className="form-check-label" >No</label><br />
                        <input className="form-check-input" type="radio" checked={this.state.positivePossibleIBD == 2 ? true : false} value="2" name="optionPossibleIBD" />
                        <label className="form-check-label" >Yes</label>
                    </div>

                    <div className={this.state.hideIfPositiveIBD ? "hidden" : ""} >
                        <label>Make a selection for each of the following:</label><br />
                        <div onChange={this.setCalprotectin.bind(this)}>
                            <input className="form-check-input" type="radio" checked={this.state.positiveCalprotectin == 1 ? true : false} value="1" name="optionCalprotectin" />
                            <label className="form-check-label" >calprotectin (+)</label> &nbsp; &nbsp;
                        <input className="form-check-input" type="radio" checked={this.state.positiveCalprotectin == 2 ? true : false} value="2" name="optionCalprotectin" />
                            <label className="form-check-label" >calprotectin (-)</label>
                        </div>

                        <div onChange={this.setCRPESR.bind(this)}>
                            <input className="form-check-input" type="radio" checked={this.state.positiveCRPESR == 1 ? true : false} value="1" name="optionCRPESR" />
                            <label className="form-check-label" >raised CRP or ESR</label> &nbsp; &nbsp;
                        <input className="form-check-input" type="radio" checked={this.state.positiveCRPESR == 2 ? true : false} value="2" name="optionCRPESR" />
                            <label className="form-check-label" >normal CRP and ESR</label>
                        </div>
                    </div>

                </div>
            </div>




        )
    }
}