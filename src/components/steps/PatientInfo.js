import React from 'react'
import ReactDom from 'react-dom'
import Form from 'react-bootstrap/Form'
import Wizard from '../../Wizard.js'
import Welcome from './Welcome.js'
import Guideline from './Guideline.js'
import ColCategorisation from './ColCategorisation.js';
import { Field } from 'react-final-form';
import GuidelineGastroscopy from './GuidelineGastroscopy';
import { properties } from '../../properties.js';
import HTMLReactParser from 'html-react-parser';
import '../../App.css';
// import AgeModel from '../Model/AgeModel.js';
import { Button, Modal } from "react-bootstrap";
import ReactModal from 'react-modal';
import NumericInput from '@zippytech/react-toolkit/NumericInput'
import ComboBox from '@zippytech/react-toolkit/ComboBox'
import '@zippytech/react-toolkit/NumericInput/index.css'

export default class PatientInfo extends React.Component {
    constructor(props) {
        super(props);
        this.child = React.createRef();
        // this.ageInput = React.createRef();
        this.state = {
            patientAge:'',
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
            test: "specialist assessment(including normal rigid/flexible sigmoidoscopy)",
            isColonoscopy: false,
            patientDataObject: {},
            finalCategory: '',
            symptomType: '',
            comment: '',
            anaemiaText: HTMLReactParser(` Yes, <b>untreated</b> likely non-gastrointestinal tract cause such as menorrhagia/diet `),
            rctlBleedText: HTMLReactParser(` Likely cause found after <b>specialist assessment</b> including rigid/flexible 
            sigmoidoscopy such as haemorrhoids`),
            showDialog: false,
            changeAge: true,
            // focusOnAge:false,


//Gastroscopy Variables START
            abnormalBloodTst:'',
            dysphagia:'',
            haematemesis:'',
            gastroAnaemia:'',
            gastroAbnormalImaging:'',
            hideOnAbnImgNO:true,
            positiveOesophageal:'',
            earlySatiety:'',
            gastroWeightLoss:'',
            dyspepsia:'',
            hideOnDyspepsiaNO: true,
            positiveAtrophicGastritis:'',
            positiveUpperGICancer :'',
            positiveNonResponsiveToPPI :'',
            positiveIntestinalMetaplasia :'',
            gord:'',
            hideOesophagus:true,
            positiveBarretOesophagus:'',            
            abdominalPain :'',
            nausea :'',
            newIbd :'',
            perniciousAnaemiaKnown :'',
            perniciousAnaemiaSuspect :'',
            coeliacdisease :'',
            hideOnCoeliacDiseaseNO:true,
            positiveHighSerologicalTitres:'',
            positivePersistentDiarrhoea:'',
            newCirrhosis :'',
            patientGastroDataObject: {},

//Gastroscopy Variables END

        }
        this.textInput = React.createRef(),
            // this.focusTextInput = this.focusTextInput.bind(this);
            this.trigerInParent = this.trigerInParent.bind(this);
        // this.ageInput = this.ageInput.bind(this);

        this.timer = null;
        this.addOne = this.addOne.bind(this);
        this.subtractOne = this.subtractOne.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.baseState= this.state ;
    }


    stopTimer() {
        clearTimeout(this.timer);
    }
    addOne() {
     
        if (this.state.patientAge < 120) {
            this.setState({ patientAge: this.state.patientAge + 1 });
            this.timer = setTimeout(this.addOne, 100);
        }
        if (this.state.patientAge===""){
            this.setState({ patientAge: 40 });
        }
    }
    subtractOne() {
        if (this.state.patientAge > 1) {
            this.setState({ patientAge: this.state.patientAge - 1 });
            this.timer = setTimeout(this.subtractOne, 100);
        }
        if (this.state.patientAge===""){
            this.setState({ patientAge: 40 });
            this.timer = setTimeout(this.subtractOne, 100);
        }
    }
    subtractOneOnKeyPress = (e) => {
        if (e.keyCode == 32) {
            if (this.state.patientAge > 1) {
                this.setState({ patientAge: this.state.patientAge - 1 });
                this.timer = setTimeout(this.subtractOneOnKeyPress, 100);
            }
            if (this.state.patientAge === "") {
                this.setState({ patientAge: 40 });
                this.timer = setTimeout(this.subtractOneOnKeyPress, 100);
            }
        }
    }
    handleOpenModal = () => {
        this.setState({ showDialog: true });
    }
    handleCloseModal = () => {
        this.setState({ showDialog: false });
    }
    trigerInParent(e) {
        // this.setState(this.baseState);
        this.child.endSession();
        // this.props.trigerInParent(e.target.value);
    }

    // componentDidUpdate = () => { 
    //     if(this.state.focusOnAge){

    //         this.textInput.current.scrollTo(0, 0);
    //     }
    // }
    componentDidMount = () => {
        console.log("haematemesis_NO".toUpperCase())
        // if(this.state.showDialog){

        // this.ageInput.scrollTo(0, 0);
        // }
    }
    focusTextInput() {
        // Explicitly focus the text input using the raw DOM API
        // Note: we're accessing "current" to get the DOM node
        // this.textInput.current.focus();
        this.textInput.current.scrollTo(0, 0);
    }


    handleAge = (event) => {
        if (event.target.value == '-') {
            this.setState({
                patientAge: this.state.patientAge - 1
            })
        } else if (event.target.value == '+') {
            this.setState({
                patientAge: ++this.state.patientAge
            })

        } else {
            this.setState({
                patientAge: event.target.value
            })
        }
    }
    setIFOBT(event) {
        this.setState({
            positiveIFOBT: event.target.value
        })
        console.log("in " + event.target.value)
        if (event.target.value === '2') {
            this.setState({ hideNBCSP: false })
        } else {
            this.setState({ hideNBCSP: true })
            this.setState({ positiveNBCSP: '' })
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
        if (event.target.value !== '1') {
            this.setState({ hideCause: false })

        } else {
            this.setState({ hideCause: true })
            this.setState({ positiveCause: '' })
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
        if (event.target.value !== '1') {
            this.setState({ hideIfPositiveIBD: false })

        } else {
            this.setState({ hideIfPositiveIBD: true })
            this.setState({ positiveCalprotectin: '' })
            this.setState({ positiveCRPESR: '' })
            this.setState({ positiveAlbumin: '' })
            this.setState({ positiveSigmoidoscopy: '' })

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
    setAppPathToColonoscopy = (value) => {
        this.setState({
            isColonoscopy: value
        })

        
    }

    patientObjectToServer() {
        this.state.patientDataObject = {
            patientAge: this.state.patientAge,
            positiveIFOBT: this.state.positiveIFOBT,
            positiveNBCSP: this.state.positiveNBCSP,
            anaemiaOptions: this.state.anaemiaOptions,
            rectalBOptions: this.state.rectalBOptions,
            positiveCause: this.state.positiveCause,
            altBwlHbtOptions: this.state.altBwlHbtOptions,
            abdPainOptions: this.state.abdPainOptions,
            positiveWeightLoss: this.state.positiveWeightLoss,
            positiveMassPalpable: this.state.positiveMassPalpable,
            positivePossibleIBD: this.state.positivePossibleIBD,
            positiveCalprotectin: this.state.positiveCalprotectin,
            positiveCRPESR: this.state.positiveCRPESR,
            positiveAlbumin: this.state.positiveAlbumin,
            positiveSigmoidoscopy: this.state.positiveSigmoidoscopy,
            positiveRecentChangeIBD: this.state.positiveRecentChangeIBD,
            positiveMCVMCH: this.state.positiveFerritin,
            positiveUnknownOrigin: this.state.positiveUnknownOrigin,
            positiveAbnormalImg: this.state.positiveAbnormalImg,
            positiveSurveillanceCol: this.state.positiveSurveillanceCol,
            positiveTherapeuticPoly: this.state.positiveTherapeuticPoly
        }
    }

    showAgeDialog() {
        console.log("show dialog: " + this.state.showDialog)
        if (this.state.patientAge == 40 && this.state.changeAge) {
            this.state.showDialog = true,
                this.setState({
                    showDialog: true,
                })
        }

    }
    getCategoryFromServer() {
        // this.showAgeDialog();
        // Object finalcat = = new Object();
        console.log("in getCategoryFromServer ; ")
        this.patientObjectToServer()
        const urlProcessCategory =
            properties.baseUrl + "processCategory/";

        var request = new Request(urlProcessCategory, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.state.patientDataObject),
            mode: "cors",
            credentials: "same-origin",
            crossDomain: true
        });
        fetch(request)
            .then((response) => {
                return response.json();
            })
            .then((jsonObject) => {

                this.setState({
                    finalCategory: jsonObject.finalCategory,
                    symptomType: jsonObject.symptomType,
                    comment: jsonObject.comment
                })
                // this.state.finalCategory = jsonObject.finalCategory;
                // this.state.symptomType = jsonObject.symptomType;

                console.log("CATEGORY :" + this.state.finalCategory);
                console.log("symptomType :" + jsonObject.symptomType);
                console.log("comment" + jsonObject.comment)
                // jsonObject.map((e, i) => {
                //     console.log("finalCategory :" + e.finalCategory)
                //     console.log("notIndicatedComments :" + e.symptomType);
                // });
                // console.log("SYMPTOM TYPE :" + jsonObject.finalCategory);



                // Object.keys(jsonObject.finalCategory).map((e, i) => {
                //     console.log("finalCategory :" + e);

                // });
                // console.log("finalCategory :" + finalcat);

                // Object.values(jsonObject.notIndicatedComments).map((e, i) => {
                //     console.log("notIndicatedComments value:" + e);
                // });
                // jsonObject.notIndicatedComments.map((comment)=>{
                //     console.log("notIndicatedComments :" + comment.key);
                //     console.log("notIndicatedComments :" + comment.value);

                // })
                this.state.jsonId = jsonObject.id;
                // document.write(`ID ${jsonObject.id} was created!`);
            })
            .catch((error) => {
                document.write(error);
            });

        // if(!this.state.showDialog){
        //     const element = document.getElementById("category")
        // element.focus()
        // }
    }

    patientGastroObjectToServer() {
        this.state.patientGastroDataObject = {
            patientAge : this.state.patientAge,
            abnormalBloodTst : this.state.abnormalBloodTst ,
            dysphagia : this.state.dysphagia ,
            haematemesis : this.state.haematemesis ,
            gastroAnaemia : this.state.gastroAnaemia ,
            gastroAbnormalImaging : this.state.gastroAbnormalImaging ,
            positiveOesophageal : this.state.positiveOesophageal,
            earlySatiety : this.state.earlySatiety ,
            gastroWeightLoss : this.state.gastroWeightLoss ,
            dyspepsia : this.state.dyspepsia ,
            positiveAtrophicGastritis : this.state.positiveAtrophicGastritis ,
            positiveUpperGICancer  : this.state.positiveUpperGICancer ,
            positiveNonResponsiveToPPI  : this.state.positiveNonResponsiveToPPI ,
            positiveIntestinalMetaplasia  : this.state.positiveIntestinalMetaplasia ,
            gord : this.state.gord ,
            positiveBarretOesophagus : this.state.positiveBarretOesophagus ,
            abdominalPain  : this.state.abdominalPain ,
            nausea  : this.state.nausea ,
            newIbd  : this.state.newIbd ,
            perniciousAnaemiaKnown  : this.state.perniciousAnaemiaKnown ,
            perniciousAnaemiaSuspect  : this.state.perniciousAnaemiaSuspect ,
            coeliacdisease  : this.state.coeliacdisease ,
            positiveHighSerologicalTitres : this.state.positiveHighSerologicalTitres ,
            positivePersistentDiarrhoea : this.state.positivePersistentDiarrhoea ,
            newCirrhosis  : this.state.newCirrhosis ,
        }
    }
    getGastroCategoryFromServer() {
        this.showAgeDialog();
        // Object finalcat = = new Object();
        console.log("in getCategoryFromServer ; ")
        this.patientGastroObjectToServer()
        const urlProcessGastroCategory =
            properties.baseUrl + "processGastroscopy/";

        var request = new Request(urlProcessGastroCategory, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.state.patientGastroDataObject),
            mode: "cors",
            credentials: "same-origin",
            crossDomain: true
        });
        fetch(request)
            .then((response) => {
                return response.json();
            })
            .then((jsonObject) => {

                this.setState({
                    finalCategory: jsonObject.finalCategory,
                    symptomType: jsonObject.symptomType,
                    comment: jsonObject.comment
                })
                console.log("Gastro CATEGORY :" + this.state.finalCategory);
                console.log("Gastro symptomType :" + jsonObject.symptomType);
                console.log("Gastro comment" + jsonObject.comment)

                this.state.jsonId = jsonObject.id;

            })
            .catch((error) => {
                document.write(error);
            });


    }

    
    setAge = (e) => {
        this.setState({
            patientAge: e.target.value
        });
    }

    handleActionNo = () => {

        this.setState({ showDialog: false });
        // this.state.focusOnAge=true;
        console.log("NOOOO" + this.state.showDialog)


        // sessionStorage.setItem("reloading", "true");
        // window.scrollTo(0, 0)
        // this.focusTextInput()
        // ReactDom.findDOMNode(this).scrollIntoView();

    }
    // focusOnAgeFunc=(component)=>{
    //     if(this.state.focusOnAge){

    //         React.findDOMNode(component).focus();
    //     }
    // }
    handleActionYes = () => {
        const element = document.getElementById("category")
        element.focus()
        this.state.changeAge = false;
        this.state.patientAge = 40;
        this.setState({ showDialog: false });
        // this.state.focusOnAge=false;

    }


//Gastroscopy Methods START
    
    setAbnormalBloodTst(event){
        console.log("abnormal " + event.target.value)
            this.setState({
                abnormalBloodTst: event.target.value
            })
    }

    setDysphagia(event){
        this.setState({
            dysphagia: event.target.value
        })
    }
    setHaematemesis(event){
         this.setState({
            haematemesis: event.target.value
        })
    }            
    setGastroAnaemia(event){
         this.setState({
            gastroAnaemia: event.target.value
        })
    }        
    setGastroAbnormalImaging(event){
         this.setState({
            gastroAbnormalImaging: event.target.value
        })
        if (event.target.value === '2') {
            this.setState({
                hideOnAbnImgNO: false,
            })
        } else {
            this.setState({
                hideOnAbnImgNO: true,

            })
            this.setState({
                positiveOesophageal: '',
            })
        }
    }   
    
    setOesophagealCancer(event) {
        this.setState({
            positiveOesophageal: event.target.value
        })
    } 
    
     
    setEarlySatiety(event){
         this.setState({
            earlySatiety: event.target.value
        })
    }        
    setGastroWeightLoss(event){
         this.setState({
            gastroWeightLoss: event.target.value
        })
    }    

    setDyspepsia(event) {
        this.setState({
            dyspepsia: event.target.value
        })
        console.log("in " + event.target.value)
        if (event.target.value === '2') {
            this.setState({ 
                hideOnDyspepsiaNO: false ,
            })
        } else {
            this.setState({ 
                hideOnDyspepsiaNO: true , 
                
            })
            this.setState({ 
                positiveAtrophicGastritis: '' ,
                positiveUpperGICancer : '' ,
                positiveNonResponsiveToPPI : '' ,
                positiveIntestinalMetaplasia : '' ,
        })
            console.log("insetDyspepsia else  " + this.state.positivAtrophicGastritis)
        }
    }
    
    setUpperGICancer(event){
            this.setState({
                positiveUpperGICancer : event.target.value
            })
    }

    setNonResponsiveToPPI(event){
            this.setState({
                positiveNonResponsiveToPPI : event.target.value
            })
    }    

    setIntestinalMetaplasia(event){
            this.setState({
                positiveIntestinalMetaplasia : event.target.value
            })
    }

    setAtrophicGastritis(event){
         this.setState({
            positiveAtrophicGastritis : event.target.value
        })
    }
    setGord(event){
         this.setState({
            gord: event.target.value
        })
    }  
    
    setGord(event) {
        this.setState({
            gord: event.target.value
        })
        console.log("in " + event.target.value)
        if (event.target.value === '3') {
            this.setState({ hideOesophagus: false })
        } else {
            this.setState({ hideOesophagus: true })
            this.setState({ positiveBarretOesophagus: '' })
            console.log("insetDyspepsia else  " + this.state.positivAtrophicGastritis)
        }
    }

        
    setOesophagus(event){
         this.setState({
            positiveBarretOesophagus: event.target.value
        })
    }
    setAbdominalPain(event){
         this.setState({
            abdominalPain: event.target.value
        })
    }
    setNausea(event){
         this.setState({
            nausea: event.target.value
        })
    }
    setNewIbd(event){
         this.setState({
            newIbd: event.target.value
        })
    }
    setPerniciousAnaemiaKnown(event){
         this.setState({
            perniciousAnaemiaKnown: event.target.value
        })
    }
    setPerniciousAnaemiaSuspect(event){
         this.setState({
            perniciousAnaemiaSuspect: event.target.value
        })
    }
    setCoeliacdisease(event){
         this.setState({
            coeliacdisease: event.target.value
        })
        console.log("in " + event.target.value)
        if (event.target.value === '3') {
            this.setState({ 
                hideOnCoeliacDiseaseNO : false ,
            })
        } else {
            this.setState({ 
                hideOnCoeliacDiseaseNO : true,
            })
            this.setState({  
                positiveHighSerologicalTitres : '',
                positivePersistentDiarrhoea : '',
        })
            console.log("insetDyspepsia else  " + this.state.positivAtrophicGastritis)
        }
        
    }
    
    setHighSerologicalTitres(event){
        this.setState({
            positiveHighSerologicalTitres: event.target.value
       })
   }

   setPersistentDiarrhoea(event){
        this.setState({
            positivePersistentDiarrhoea : event.target.value
        })
    }
    
    setNewCirrhosis(event){
         this.setState({
            newCirrhosis: event.target.value
        })
    }

//Gastroscopy Methods FINISH

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
        return (
            <Wizard
                ref={this.child}
                isColonoscopy ={this.state.isColonoscopy}
                onRef={ref => (this.child = ref)}
                onSubmit={this.onSubmit.bind(this)}
                initialValues={{ employed: true }}
                getCategoryFromServer={this.getCategoryFromServer.bind(this)}>
                {/* <Guideline trigerInParent={this.clickEndSession} /> */}
                <Wizard.Page>
                    <Welcome setAppPathToColonoscopy={this.setAppPathToColonoscopy} />
                </Wizard.Page>
                <Wizard.Page>
                    <Guideline trigerInParent={this.clickEndSession} />
                    {/* {!this.state.isColonoscopy && <GuidelineGastroscopy trigerInParent={this.clickEndSession} />} */}

                </Wizard.Page>

                <Wizard.Page validate={values => {
                    const errors = {}
                    if (this.state.patientAge == "") {
                        errors.age = "Age is a mandetory feild "
                    }
                    if (this.state.positiveIFOBT === '') {
                        errors.optionIfobt = "This question requires an answer "
                    }
                    if (this.state.positiveNBCSP === '' && this.state.positiveIFOBT !== '1') {
                        errors.optionNbcsp = "This question requires an answer "
                    }
                    if (this.state.anaemiaOptions === '') {
                        errors.optionAnaemia = "This question requires an answer "
                    }
                    // if (this.state.rectalBOptions === '') {
                    //     errors.optionRectalB = "This question requires an answer "
                    // }
                    // if (this.state.positiveCause === '' && this.state.rectalBOptions !== '1') {
                    //     errors.optionCause = "This question requires an answer "
                    // }
                    // if (this.state.altBwlHbtOptions === '') {
                    //     errors.optionAltBwlHbt = "This question requires an answer "
                    // }
                    // if (this.state.abdPainOptions === '') {
                    //     errors.optionAbdPain = "This question requires an answer "
                    // }
                    // if (this.state.positiveWeightLoss === '') {
                    //     errors.optionWeightLoss = "This question requires an answer "
                    // }
                    // if (this.state.positiveMassPalpable === '') {
                    //     errors.optionMassPalpable = "This question requires an answer "
                    // }
                    // if (this.state.positivePossibleIBD === '') {
                    //     errors.optionPossibleIBD = "This question requires an answer "
                    // }
                    // if (this.state.positiveCalprotectin === '' && this.state.positivePossibleIBD !== '1') {
                    //     errors.optionCalprotectin = "This question requires an answer "
                    // }
                    // if (this.state.positiveCRPESR === '' && this.state.positivePossibleIBD !== '1') {
                    //     errors.optionCRPESR = "This question requires an answer "
                    // }
                    // if (this.state.positiveAlbumin === '' && this.state.positivePossibleIBD !== '1') {
                    //     errors.optionAlbumin = "This question requires an answer "
                    // }
                    // if (this.state.positiveSigmoidoscopy === '' && this.state.positivePossibleIBD !== '1') {
                    //     errors.optionSigmoidoscopy = "This question requires an answer "
                    // }
                    // if (this.state.positiveRecentChangeIBD === '') {
                    //     errors.optionRecentChangeIBD = "This question requires an answer "
                    // }
                    // if (this.state.positiveFerritin === '') {
                    //     errors.optionFerritin = "This question requires an answer "
                    // }
                    // if (this.state.positiveUnknownOrigin === '') {
                    //     errors.optionUnknownOrigin = "This question requires an answer "
                    // }
                    // if (this.state.positiveAbnormalImg === '') {
                    //     errors.optionAbnormalImg = "This question requires an answer "
                    // }
                    // if (this.state.positiveSurveillanceCol === '') {
                    //     errors.optionSurveillanceCol = "This question requires an answer "
                    // }
                    // if (this.state.positiveTherapeuticPoly === '') {
                    //     errors.optionTherapeuticPoly = "This question requires an answer "
                    // }
                    return errors;
                }}>
                    <div >
                        <div >
                            <div className="col-sm-12">
                                <h1 aria-label="Fill in the questionnair"><b>Patient Information</b></h1>
                                {/* <h4><b>Patient Information</b></h4> */}
                            </div>
                            <div name="mandatoryInfo" className="col-sm-12">
                                <p>All displayed fields are mandatory. The validation message to indicate an incomplete question will be shown in <br /> <span className="color-red">red text</span> underneath the question.</p>
                            </div>

                            <div ref={this.textInput} className=" col-sm-12">
                                <div className="padding-Radio row col-sm-11">
                                    <div className="row col-sm-12 " >
                                        <p className="position-age-field"> Age </p>
                                        {/* <NumericInput mobile /> */}
                                        {/* onKeyDown={this.subtractOneOnKeyPress} onKeyUpCapture={this.stopTimer} onKeyDownCapture={this.stopTimer} */}
                                        <button value='-' aria-label="Reduce Age" type="button" className="App button-AddSub text-button" onMouseDown={this.subtractOne} onMouseUp={this.stopTimer}  
                                        onMouseMove={this.stopTimer} onTouchStart={this.subtractOne} onTouchEnd={this.stopTimer}>-</button>
                                        {/* paddingTop: "10px", paddingLeft: "5px", paddingRight: "5px", */}
                                        {/* ref={this.textInput} */}
                                        {/* ref={(input) => { this.ageInput = input; }} */}
                                        {/* ref={(this.state.focusOnAge==true && this.state.changeAge==false)?input => input && input.focus():''} */}
                                        {/* autoFocus={false?this.state.focusOnAge:false} */}
                                        <input disabled  className="position-age-box" type="text" name="ageTextBox" id="age" value={this.state.patientAge} onChange={this.handleAge.bind(this)} title="Input patient age text box" />
                                        {/* <label name="age" id="age" style={{ paddingTop: "10px", paddingLeft: "5px", paddingRight: "5px",width:"36px" }}>{this.state.patientAge}</label> */}
                                        <label hidden={true} htmlFor="age" >" "</label>
                                        {/* onKeyDown={this.addOne} onKeyUpCapture={this.stopTimer} onKeyDownCapture={this.stopTimer} */}
                                        <button id="add" value='+' aria-label="Add Age" type="button" className="App button-AddSub text-button" onMouseDown={this.addOne} onMouseUp={this.stopTimer} 
                                        onMouseMove={this.stopTimer} onTouchStart={this.addOne} onTouchEnd={this.stopTimer}
                                        >+</button>
                                    </div>
                                    <div>
                                        <p style={{fontSize: 11, color: '#000'}}>Click or press and hold buttons to set the age value; values will begin at 40.</p>
                                    </div>
                                    <div className="validationMsg">
                                        <Error name="age" />
                                    </div>
                                </div>
                                <div >
                                    <h2><b>Indication A: Symptoms or investigations </b></h2>
                                </div>
                                <div className="div-top col-sm-12" onChange={this.setIFOBT.bind(this)}>
                                    <fieldset className="form-group">
                                        <legend >Positive immunohistochemical faecal occult blood test (iFOBT(+))</legend>
                                        <div className="padding-Radio  row col-sm-11">
                                            <div className=" col-sm-10">
                                                <Form.Check custom label="No" type={"radio"} id={`positiveIFOBT-${"1"}`} checked={this.state.positiveIFOBT === '1' ? true : false} name="optionIfobt" value="1" />
                                                <Form.Check custom label="Yes" type={"radio"} id={`positiveIFOBT-${"2"}`} name="optionIfobt" value="2" checked={this.state.positiveIFOBT === '2' ? true : false} />
                                            </div>
                                            <div className="validationMsg">
                                                <Error name="optionIfobt" />
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>

                                <div className={this.state.hideNBCSP ? "hidden  col-sm-12 div-top " : "div-top col-sm-12"} onChange={this.setIfobtTNBSP.bind(this)}>
                                    <fieldset className="form-group">
                                        <legend>NBCSP or other indication</legend>
                                        <div className=" padding-Radio row col-sm-11">
                                            <div className=" col-sm-10">
                                                <Form.Check custom label="No" type={"radio"} id={`positiveNBCSP-${"1"}`} checked={this.state.positiveNBCSP === '1' ? true : false} name="optionNbcsp" value="1" />
                                                <Form.Check custom label="Yes" type={"radio"} id={`positiveNBCSP-${"2"}`} checked={this.state.positiveNBCSP === '2' ? true : false} name="optionNbcsp" value="2" />

                                            </div>
                                            <div className="validationMsg">
                                                <Error name="optionNbcsp" />
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                <hr className="hr1" />




                                <div className="col-sm-12" onChange={this.setAnaemia.bind(this)}>
                                    <fieldset className="form-group">
                                        <legend>Anaemia</legend>
                                        <div className=" padding-Radio row col-sm-11">
                                            <div className=" col-sm-10">
                                                <Form.Check custom label="No" type={"radio"} id={`anaemiaOptions-${"1"}`} checked={this.state.anaemiaOptions === '1' ? true : false} name="optionAnaemia" value="1" />
                                                <Form.Check custom label="Yes, no likely cause" type={"radio"} id={`anaemiaOptions-${"2"}`} checked={this.state.anaemiaOptions === '2' ? true : false} name="optionAnaemia" value="2" />
                                                <Form.Check custom label="Yes, likely non-gastrointestinal tract cause" type={"radio"} id={`anaemiaOptions-${"3"}`} checked={this.state.anaemiaOptions === '3' ? true : false} name="optionAnaemia" value="3" />
                                                <Form.Check custom label={this.state.anaemiaText} type={"radio"} id={`anaemiaOptions-${"4"}`} checked={this.state.anaemiaOptions === '4' ? true : false} name="optionAnaemia" value="4" />
                                            </div>

                                            <div className="validationMsg">
                                                <Error name="optionAnaemia" />
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>

                                <hr className="hr1" />

                                <div className="div-top col-sm-12" onChange={this.setRectalBleeding.bind(this)}>
                                    <fieldset className="form-group">
                                        <legend>Rectal bleeding</legend>
                                        <div className=" padding-Radio row col-sm-11">
                                            <div className=" col-sm-10">
                                                <Form.Check custom label="No" type={"radio"} id={`rectalBOptions-${"1"}`} checked={this.state.rectalBOptions === '1' ? true : false} name="optionRectalB" value="1" />
                                                <Form.Check custom label="Yes, ≤ 12 months" type={"radio"} id={`rectalBOptions-${"2"}`} checked={this.state.rectalBOptions === '2' ? true : false} name="optionRectalB" value="2" />
                                                <Form.Check custom label="Yes, > 12 months, occasional" type={"radio"} id={`rectalBOptions-${"3"}`} checked={this.state.rectalBOptions === '3' ? true : false} name="optionRectalB" value="3" />
                                            </div>
                                            <div className="validationMsg">
                                                <Error name="optionRectalB" />
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>


                                <div className={this.state.hideCause ? "hidden col-sm-12 div-top" : "div-top col-sm-12"} onChange={this.setRBCause.bind(this)}>
                                    <fieldset className="form-group">
                                        <legend>Cause</legend>
                                        <div className=" padding-Radio row col-sm-11" >
                                            <div className=" col-sm-10" >
                                                {/* <Form.Check style={{ width: "800px", paddingLeft: "55px" }} custom label="No likely anorectal cause found (such as normal  rigid/flexible sigmoidoscopy) or failed treatment of haemorrhoids" type={"radio"} id={`positiveCause-${"1"}`} checked={this.state.positiveCause === '1' ? true : false} name="optionCause" value="1" /> */}


                                                <div className="custom-control custom-radio position-cause-text" >
                                                    <input name="optionCause" type="radio" id="positiveCause-1" className="custom-control-input" value="1" style={{ position: "fixed" }} />
                                                    <label type="checkbox" htmlFor="positiveCause-1" className="custom-control-label">No likely anorectal cause found (such as normal  rigid/flexible sigmoidoscopy) or failed treatment of haemorrhoids</label></div>

                                                {/* <Form.Check style={{ width: "800px", paddingLeft: "55px" }} custom label="Likely cause found after specialist assessment including rigid/flexible sigmoidoscopy such as haemorrhoids" type={"radio"} id={`positiveCause-${"2"}`} checked={this.state.positiveCause === '2' ? true : false} name="optionCause" value="2" /> */}

                                                <div className="custom-control custom-radio position-cause-text" >
                                                    <input name="optionCause" type="radio" id="positiveCause-2" className="custom-control-input" value="2" style={{ position: "fixed" }} />
                                                    <label title="" type="checkbox" htmlFor="positiveCause-2" className="custom-control-label">{this.state.rctlBleedText}</label>
                                                </div>

                                            </div>
                                            <div className="validationMsg">
                                                <Error name="optionCause" />
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                <hr className="hr1" />


                                <div className="div-top col-sm-12" onChange={this.setAltBwlHbt.bind(this)}>
                                    <fieldset className="form-group">
                                        <legend>Altered bowel habit</legend><br />
                                        <div className=" padding-Radio row col-sm-11">
                                            <div className=" col-sm-10">
                                                <Form.Check custom label="No" type={"radio"} id={`altBwlHbtOptions-${"1"}`} checked={this.state.altBwlHbtOptions === '1' ? true : false} name="optionAltBwlHbt" value="1" />
                                                <Form.Check custom label="Yes, &lt; 6 weeks" type={"radio"} id={`altBwlHbtOptions-${"2"}`} checked={this.state.altBwlHbtOptions === '2' ? true : false} name="optionAltBwlHbt" value="2" />
                                                <Form.Check custom label="Yes, ≥ 6/52 and ≤ 12 months" type={"radio"} id={`altBwlHbtOptions-${"3"}`} checked={this.state.altBwlHbtOptions === '3' ? true : false} name="optionAltBwlHbt" value="3" />
                                                <Form.Check custom label="Yes, > 12 months" type={"radio"} id={`altBwlHbtOptions-${"4"}`} checked={this.state.altBwlHbtOptions === '4' ? true : false} name="optionAltBwlHbt" value="4" />
                                            </div>
                                            <div className="validationMsg">
                                                <Error name="optionAltBwlHbt" />
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                {/* </div> */}
                                <hr className="hr1" />


                                <div className="div-top col-sm-12" onChange={this.setAbdPain.bind(this)}>
                                    <fieldset className="form-group">
                                        <legend>Abdominal pain (unexplained)</legend>
                                        <div className=" padding-Radio row col-sm-11">
                                            <div className=" col-sm-10">
                                                <Form.Check custom label="No" type={"radio"} id={`abdPainOptions-${"1"}`} checked={this.state.abdPainOptions === '1' ? true : false} name="optionAbdPain" value="1" />
                                                <Form.Check custom label="Yes, &lt; 6 weeks" type={"radio"} id={`abdPainOptions-${"2"}`} checked={this.state.abdPainOptions === '2' ? true : false} name="optionAbdPain" value="2" />
                                                <Form.Check custom label="Yes, ≥ 6 weeks" type={"radio"} id={`abdPainOptions-${"3"}`} checked={this.state.abdPainOptions === '3' ? true : false} name="optionAbdPain" value="3" />
                                            </div>
                                            <div className="validationMsg">
                                                <Error name="optionAbdPain" />
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                <hr className="hr1" />


                                <div className="div-top col-sm-12" onChange={this.setWeightLoss.bind(this)}>
                                    <fieldset className="form-group">
                                        <legend>Weight loss (unexplained)</legend>
                                        <div className=" padding-Radio row col-sm-11">
                                            <div className=" col-sm-10">
                                                <Form.Check custom label="No" type={"radio"} id={`positiveWeightLoss-${"1"}`} checked={this.state.positiveWeightLoss === '1' ? true : false} name="optionWeightLoss" value="1" />
                                                <Form.Check custom label="Yes" type={"radio"} id={`positiveWeightLoss-${"2"}`} checked={this.state.positiveWeightLoss === '2' ? true : false} name="optionWeightLoss" value="2" />
                                            </div>
                                            <div className="validationMsg">
                                                <Error name="optionWeightLoss" />
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                <hr className="hr1" />

                                <div className="div-top col-sm-12" onChange={this.setMassPalpable.bind(this)}>
                                    <fieldset className="form-group">
                                        <legend>Mass palpable (abdominal or rectal) or present on rigid/flexible sigmoidoscopy</legend>
                                        <div className=" padding-Radio row col-sm-11">
                                            <div className=" col-sm-10">
                                                <Form.Check custom label="No" type={"radio"} id={`positiveMassPalpable-${"1"}`} checked={this.state.positiveMassPalpable === '1' ? true : false} name="optionMassPalpable" value="1" />
                                                <Form.Check custom label="Yes" type={"radio"} id={`positiveMassPalpable-${"2"}`} checked={this.state.positiveMassPalpable === '2' ? true : false} name="optionMassPalpable" value="2" />
                                            </div>
                                            <div className="validationMsg">
                                                <Error name="optionMassPalpable" />
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                <hr className="hr1" />


                                <div className="div-top col-sm-12" onChange={this.setPossibleIBD.bind(this)}>
                                    <fieldset className="form-group">
                                        <legend>Possible inflammatory bowel disease (IBD)</legend>
                                        <div className=" padding-Radio row col-sm-11">
                                            <div className=" col-sm-10">
                                                <Form.Check custom label="No" type={"radio"} id={`positivePossibleIBD-${"1"}`} checked={this.state.positivePossibleIBD === '1' ? true : false} name="optionPossibleIBD" value="1" />
                                                <Form.Check custom label="Yes" type={"radio"} id={`positivePossibleIBD-${"2"}`} checked={this.state.positivePossibleIBD === '2' ? true : false} name="optionPossibleIBD" value="2" />
                                            </div>
                                            <div className="validationMsg">
                                                <Error name="optionPossibleIBD" />
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>





                                <div className={this.state.hideIfPositiveIBD ? "hidden col-sm-12 div-top " : "div-top col-sm-12"} >
                                    <fieldset className="form-group">
                                        <legend>Make a selection for each of the following:</legend>
                                    </fieldset>
                                    <div className="padding-Radio row col-sm-12" onChange={this.setCalprotectin.bind(this)}>
                                        <div className="col-sm-5 ">
                                            <Form.Check custom label="calprotectin (+)" type={"radio"} id={`positiveCalprotectin-${"1"}`} checked={this.state.positiveCalprotectin === '1' ? true : false} name="optionCalprotectin" value="1" />
                                        </div>
                                        <div className="col-sm-7 ">
                                            <Form.Check custom label="calprotectin (-)" type={"radio"} id={`positiveCalprotectin-${"2"}`} checked={this.state.positiveCalprotectin === '2' ? true : false} name="optionCalprotectin" value="2" />
                                        </div>
                                        <div className="validationMsg">
                                            <Error name="optionCalprotectin" />
                                        </div>
                                    </div>



                                    <div className="padding-Radio row col-sm-12" onChange={this.setCRPESR.bind(this)}>
                                        <div className="col-sm-5 ">
                                            <Form.Check custom label="raised CRP or ESR" type={"radio"} id={`positiveCRPESR-${"1"}`} checked={this.state.positiveCRPESR === '1' ? true : false} name="optionCRPESR" value="1" />
                                        </div>
                                        <div className="col-sm-7 ">
                                            <Form.Check custom label="normal CRP and ESR" type={"radio"} id={`positiveCRPESR-${"2"}`} checked={this.state.positiveCRPESR === '2' ? true : false} name="optionCRPESR" value="2" />
                                        </div>
                                        <div className="validationMsg">
                                            <Error name="optionCRPESR" />
                                        </div>
                                    </div>

                                    <div className="padding-Radio row col-sm-12" onChange={this.setAlbumin.bind(this)}>
                                        <div className="col-sm-5 ">
                                            <Form.Check custom label="low albumin" type={"radio"} id={`positiveAlbumin-${"1"}`} checked={this.state.positiveAlbumin === '1' ? true : false} name="optionAlbumin" value="1" />

                                        </div>
                                        <div className="col-sm-7 ">
                                            <Form.Check custom label="normal albumin" type={"radio"} id={`positiveAlbumin-${"2"}`} checked={this.state.positiveAlbumin === '2' ? true : false} name="optionAlbumin" value="2" />

                                        </div>
                                        <div className="validationMsg">
                                            <Error name="optionAlbumin" />
                                        </div>
                                    </div>

                                    <div className="padding-Radio row col-sm-12" onChange={this.setSigmoidoscopy.bind(this)}>
                                        <div className="col-sm-5 ">
                                            <Form.Check custom label="abnormal rigid/flexible sigmoidoscopy" type={"radio"} id={`positiveSigmoidoscopy-${"1"}`} checked={this.state.positiveSigmoidoscopy === '1' ? true : false} name="optionSigmoidoscopy" value="1" />
                                        </div>
                                        <div className="col-sm-7" >
                                            {/* {test = "specialist assessment (including normal rigid/flexible sigmoidoscopy)"} */}
                                            <Form.Check className="special-font-ibd" custom label={this.state.test} type={"radio"} id={`positiveSigmoidoscopy-${"2"}`} checked={this.state.positiveSigmoidoscopy === '2' ? true : false} name="optionSigmoidoscopy" value="2" />
                                        </div>
                                        <div className="validationMsg">
                                            <Error name="optionSigmoidoscopy" />
                                        </div>
                                    </div>
                                </div>
                                <hr className="hr1" />



                                <div className="div-top col-sm-12" onChange={this.setRecentChangeIBD.bind(this)}>
                                    <fieldset className="form-group">
                                        <legend>Recent change in treatment for established IBD</legend>
                                        <div className=" padding-Radio row col-sm-11">
                                            <div className=" col-sm-10">
                                                <Form.Check custom label="No" type={"radio"} id={`positiveRecentChangeIBD-${"1"}`} checked={this.state.positiveRecentChangeIBD === '1' ? true : false} name="optionRecentChangeIBD" value="1" />
                                                <Form.Check custom label="Yes" type={"radio"} id={`positiveRecentChangeIBD-${"2"}`} checked={this.state.positiveRecentChangeIBD === '2' ? true : false} name="optionRecentChangeIBD" value="2" />
                                            </div>

                                            <div className="validationMsg">
                                                <Error name="optionRecentChangeIBD" />
                                            </div>

                                        </div>
                                    </fieldset>
                                </div>
                                <hr className="hr1" />


                                <div className="div-top col-sm-12" onChange={this.setFerritin.bind(this)}>
                                    <fieldset className="form-group">
                                        <legend>Low MCV/MCH or ferritin</legend>
                                        <div className=" padding-Radio row col-sm-11">
                                            <div className=" col-sm-10">
                                                <Form.Check custom label="No" type={"radio"} id={`positiveFerritin-${"1"}`} checked={this.state.positiveFerritin === '1' ? true : false} name="optionFerritin" value="1" />
                                                <Form.Check custom label="Yes" type={"radio"} id={`positiveFerritin-${"2"}`} checked={this.state.positiveFerritin === '2' ? true : false} name="optionFerritin" value="2" />
                                            </div>
                                            <div className="validationMsg">
                                                <Error name="optvalidateionFerritin" />
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                <hr className="hr1" />


                                <div className="div-top col-sm-12" onChange={this.setUnknownOrigin.bind(this)}>
                                    <fieldset className="form-group">
                                        <legend>Primary of unknown origin</legend>
                                        <div className=" padding-Radio row col-sm-11">
                                            <div className=" col-sm-10">
                                                <Form.Check custom label="No" type={"radio"} id={`positiveUnknownOrigin-${"1"}`} checked={this.state.positiveUnknownOrigin === '1' ? true : false} name="optionUnknownOrigin" value="1" />
                                                <Form.Check custom label="Yes" type={"radio"} id={`positiveUnknownOrigin-${"2"}`} checked={this.state.positiveUnknownOrigin === '2' ? true : false} name="optionUnknownOrigin" value="2" />
                                            </div>
                                            <div className="validationMsg">
                                                <Error name="optionUnknownOrigin" />
                                            </div>

                                        </div>
                                    </fieldset>
                                </div>
                                <hr className="hr1" />


                                <div className="div-top col-sm-12" onChange={this.setAbnormalImg.bind(this)}>
                                    <fieldset className="form-group">
                                        <legend>Abnormal imaging</legend>
                                        <div className=" padding-Radio row col-sm-11">
                                            <div className=" col-sm-10">
                                                <Form.Check custom label="No" type={"radio"} id={`positiveAbnormalImg-${"1"}`} checked={this.state.positiveAbnormalImg === '1' ? true : false} name="optionAbnormalImg" value="1" />
                                                <Form.Check custom label="Yes, likely colorectal cancer" type={"radio"} id={`positiveAbnormalImg-${"2"}`} checked={this.state.positiveAbnormalImg === '2' ? true : false} name="optionAbnormalImg" value="2" />
                                                <Form.Check custom label="Yes, unlikely colorectal cancer" type={"radio"} id={`positiveAbnormalImg-${"3"}`} checked={this.state.positiveAbnormalImg === '3' ? true : false} name="optionAbnormalImg" value="3" />
                                            </div>
                                            <div className="validationMsg">
                                                <Error name="optionAbnormalImg" />
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                <hr className="hr1" />

                                <div>
                                    <h2><b>Indication B: Surveillance or on the basis of family history </b></h2>
                                </div>

                                <div className="div-top col-sm-12" onChange={this.setSurveillanceCol.bind(this)}>
                                    <fieldset className="form-group">
                                        <legend>Surveillance colonoscopy as per NHMRC guidelines</legend>
                                        <div className="padding-Radio row col-sm-11">
                                            <div className=" col-sm-10">

                                                <Form.Check custom label="No" type={"radio"} id={`positiveSurveillanceCol-${"1"}`} checked={this.state.positiveSurveillanceCol === '1' ? true : false} name="optionSurveillanceCol" value="1" />
                                                <Form.Check custom label="Yes, overdue by > 60 days" type={"radio"} id={`positiveSurveillanceCol-${"2"}`} checked={this.state.positiveSurveillanceCol === '2' ? true : false} name="optionSurveillanceCol" value="2" />
                                                <Form.Check custom label="Yes, not overdue by > 60 days " type={"radio"} id={`positiveSurveillanceCol-${"3"}`} checked={this.state.positiveSurveillanceCol === '3' ? true : false} name="optionSurveillanceCol" value="3" />

                                            </div>
                                            <div className="validationMsg">
                                                <Error name="optionSurveillanceCol" />
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                <hr className="hr1" />

                                <div>
                                    <h2><b>Indication C: Therapeutic</b></h2>
                                </div>


                                <div className="div-top col-sm-12" onChange={this.setTherapeuticPoly.bind(this)}>
                                    <fieldset className="form-group">
                                        <legend>Therapeutic polypectomy</legend>
                                        <div className="padding-Radio row col-sm-11">
                                            <div className=" col-sm-10">

                                                <Form.Check custom label="No" type={"radio"} id={`positiveTherapeuticPoly-${"1"}`} checked={this.state.positiveTherapeuticPoly === '1' ? true : false} name="optionTherapeuticPoly" value="1" />
                                                <Form.Check custom label="Yes, ≥ 2 cm" type={"radio"} id={`positiveTherapeuticPoly-${"2"}`} checked={this.state.positiveTherapeuticPoly === '2' ? true : false} name="optionTherapeuticPoly" value="2" />
                                                <Form.Check custom label="Yes, &lt; 2 cm" type={"radio"} id={`positiveTherapeuticPoly-${"3"}`} checked={this.state.positiveTherapeuticPoly === '3' ? true : false} name="optionTherapeuticPoly" value="3" />
                                            </div>
                                            <div className="validationMsg">
                                                <Error name="optionTherapeuticPoly" />
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>

                            {/* <AgeModel showAgeDialog={this.state.showAgeDialog} /> */}

                            {/* <button type="submit" onClick={this.getCategoryFromServer.bind(this)} >Categorise</button> */}
                            <div className="button-strip">
                                <div className="button-start" />
                                <button id="category" type="submit" className="btn btn-primary button-width" type="submit" onClick={this.getCategoryFromServer.bind(this)}>Categorise colonoscopy</button>
                                <div className="button-gap" />
                                <button className="btn btn-primary button-width" type="button" onClick={this.trigerInParent}>End session</button>
                            </div>
                        </div>
                    </div>
                    <div>

                        <ReactModal
                            isOpen={this.state.showDialog}
                            contentLabel="Age Validation Dialog"
                            onRequestClose={this.handleCloseModal}
                            className="Modal"
                            overlayClassName="Overlay"
                            display="block"
                        // appElement="el"
                        >
                            <p>You have not adjusted the age field from its default value of 40.
                                       Is this intentional?</p>
                            {/* <button onClick={this.handleCloseModal}>Close Modal</button> */}
                            <button className="btn btn-primary dialog-button-size" onClick={this.handleActionYes.bind(this)}>Yes</button>
                            <button className="btn btn-primary dialog-button-size" onClick={this.handleActionNo.bind(this)}>No</button>
                        </ReactModal>
                        {/* <Modal focus={true} role="dialog" aria-labelledby='dialog_title' show={this.state.showDialog}> */}
                        {/* <Modal.Header closeButton={false}>
                                    <Modal.Title>
                                        Error
                                        <div id="dialog_title" className="modalHeader">Error!</div>
                                    </Modal.Title>
                                    </Modal.Header> */}
                        {/* <Modal.Body>
                                    <p>You have not adjusted the age field from its default value of 40.
                                       Is this intentional?</p>
                                </Modal.Body> */}
                        {/* disabled={!this.state.enableSaveButton} */}
                        {/* <Modal.Footer>
                                    <Button className="btn btn-primary" onClick={this.handleActionYes.bind(this)}>
                                        Yes
                                    </Button>
                                    <Button className="btn btn-primary" onClick={this.handleActionNo.bind(this)}>
                                        No
                                    </Button>
                                </Modal.Footer> */}
                        {/* </Modal> */}
                    </div>
                </Wizard.Page>
                <Wizard.Page>
                    <ColCategorisation finalCategory={this.state.finalCategory} symptomType={this.state.symptomType} comment={this.state.comment} />
                </Wizard.Page>

                <Wizard.Page>
                    <GuidelineGastroscopy trigerInParent={this.clickEndSession} />
                </Wizard.Page>
                <Wizard.Page validate={values => {
                    const errors = {}
                    if (this.state.abnormalBloodTst == "") {
                        errors.optionAbnormalBldTest = "This question requires an answer"
                    }

                    if (this.state.dysphagia == "") {
                        errors.optionDysphagia = "This question requires an answer"
                    }                    
                    if (this.state.haematemesis == "") {
                        errors.optionHaematemesis = "This question requires an answer"
                    }
                    if (this.state.gastroAnaemia == "") {
                        errors.optionGastroAnaemia = "This question requires an answer"
                    }
                    if (this.state.gastroAbnormalImaging == "") {
                        errors.optionGastroAbnormalImaging = "This question requires an answer"
                    }
                    if (this.state.optionOesophageal == "") {
                        errors.optionOesophageal = "This question requires an answer"
                    }
                    
                    // if (this.state.earlySatiety == "") {
                    //     errors.optionEarlySatiety = "This question requires an answer"
                    // }
                    // if (this.state.gastroWeightLoss == "") {
                    //     errors.optionGastroWeightLoss = "This question requires an answer"
                    // }
                    // if (this.state.dyspepsia == "") {
                    //     errors.optionDyspepsia = "This question requires an answer"
                    // }
                    // if (this.state.positiveAtrophicGastritis == ""  && this.state.dyspepsia !== '1') {
                    //     errors.optionAtrophicGastritis = "This question requires an answer"
                    // }
                    // if (this.state.positiveUpperGICancer == ""  && this.state.dyspepsia !== '1') {
                    //     errors.optionUpperGICancer = "This question requires an answer"
                    // }
                    // if (this.state.positiveNonResponsiveToPPI == ""  && this.state.dyspepsia !== '1') {
                    //     errors.optionNonResponsiveToPPI = "This question requires an answer"
                    // }
                    // if (this.state.positiveIntestinalMetaplasia == ""  && this.state.dyspepsia !== '1') {
                    //     errors.optionIntestinalMetaplasia = "This question requires an answer"
                    // }
                    // if (this.state.gord == "") {
                    //     errors.optiongord = "This question requires an answer"
                    // }                            
                    // if (this.state.positiveBarretOesophagus == ""  && this.state.gord == '3') {
                    //     errors.optionOesophagus = "This question requires an answer"
                    // }                        
                    // if (this.state.abdominalPain == "") {
                    //     errors.optionAbdominalPain = "This question requires an answer"
                    // }                        
                    // if (this.state.nausea == "") {
                    //     errors.optionNausea = "This question requires an answer"
                    // }                        
                    // if (this.state.newIbd == "") {
                    //     errors.optionNewIbd = "This question requires an answer"
                    // }                        
                    // if (this.state.perniciousAnaemiaKnown == "") {
                    //     errors.optionPerniciousAnaemiaKnown = "This question requires an answer"
                    // }                        
                    // if (this.state.perniciousAnaemiaSuspect == "") {
                    //     errors.optionPerniciousAnaemiaSuspet = "This question requires an answer"
                    // }                        
                    // if (this.state.coeliacdisease == "") {
                    //     errors.optionCoeliacdisease = "This question requires an answer"
                    // }                        
                    // if (this.state.positiveHighSerologicalTitres == "" && this.state.coeliacdisease !== '1') {
                    //     errors.optionHighSerologicalTitres = "This question requires an answer"
                    // }         
                    // if (this.state.positivePersistentDiarrhoea == "" && this.state.coeliacdisease !== '1') {
                    //     errors.optionPersistentDiarrhoea = "This question requires an answer"
                    // }                        
                    // if (this.state.newCirrhosis == "") {
                    //     errors.optionNewCirrhosis = "This question requires an answer"
                    // }

                                                                                                                                                                    return errors;  
                }}>
                    <div>
                        <div>
                            <div className="col-sm-12">
                                <h1 aria-label="Fill in the questionnair"><b>Patient Information</b></h1>
                                {/* <h4><b>Patient Information</b></h4> */}
                            </div>
                            <div name="mandatoryInfo" className="col-sm-12">
                                <p>All displayed fields are mandatory. The validation message to indicate an incomplete question will be shown in <br /> <span className="color-red">red text</span> underneath the question.</p>
                            </div>

                            <div ref={this.textInput} className=" col-sm-12">
                                <div className="padding-Radio row col-sm-11">
                                    <div className="row col-sm-12 ">
                                        <p className="position-age-field"> Age </p>
                                        {/* <NumericInput mobile /> */}
                                        <button value='-' aria-label="Reduce Age" type="button" className="App button-AddSub text-button" onMouseDown={this.subtractOne} onMouseUp={this.stopTimer}>-</button>
                                        {/* paddingTop: "10px", paddingLeft: "5px", paddingRight: "5px", */}
                                        {/* ref={this.textInput} */}
                                        {/* ref={(input) => { this.ageInput = input; }} */}
                                        {/* ref={(this.state.focusOnAge==true && this.state.changeAge==false)?input => input && input.focus():''} */}
                                        {/* autoFocus={false?this.state.focusOnAge:false} */}
                                        {/* <input className="position-age-box" type="number" name="ageTextBox" id="age" value={this.state.patientAge} onChange={this.handleAge.bind(this)} title="Input patient age text box" /> */}
                                        <label name="age" id="age" style={{ paddingTop: "10px", paddingLeft: "5px", paddingRight: "5px",width:"36px" }}>{this.state.patientAge}</label>
                                        <label hidden={true} htmlFor="age" >" "</label>

                                        <button id="add" value='+' aria-label="Add Age" type="button" className="App button-AddSub text-button" onMouseDown={this.addOne} onMouseUp={this.stopTimer}>+</button>
                                    </div>
                                    <div>
                                        <p style={{fontSize: 11, color: '#000'}}>Click or press and hold buttons to set the age value; values will begin at 40.</p>
                                    </div>
                                    <div className="validationMsg">
                                        <Error name="age" />
                                    </div>
                                </div>
                                <div className="div-top col-sm-12" onChange={this.setAbnormalBloodTst.bind(this)}>
                                    <fieldset className="form-group">
                                        <legend >Abnormal blood test: low Hb, low ferritin, microcytosis, hypochromia, raised platelets</legend>
                                        <div className="padding-Radio  row col-sm-11">
                                            <div className=" col-sm-10">
                                                <Form.Check custom label="No" type={"radio"} id={`abnormalBloodTst-${"1"}`} checked={this.state.abnormalBloodTst === '1' ? true : false} name="optionAbnormalBldTest" value="1" />
                                                <Form.Check custom label="Yes" type={"radio"} id={`abnormalBloodTst-${"2"}`} name="optionAbnormalBldTest" value="2" checked={this.state.abnormalBloodTst === '2' ? true : false} />
                                            </div>
                                            <div className="validationMsg">
                                                <Error name="optionAbnormalBldTest" />
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                <div >
                                    <h2><b>INDICATION A: Symptoms or investigations </b></h2>
                                </div>
                                <div className="div-top col-sm-12" onChange={this.setDysphagia.bind(this)}>
                                    <fieldset className="form-group">
                                        <legend >Dysphagia</legend>
                                        <div className="padding-Radio  row col-sm-11">
                                            <div className=" col-sm-10">
                                                <Form.Check custom label="No" type={"radio"} id={`dysphagia-${"1"}`} checked={this.state.dysphagia === '1' ? true : false} name="optionDysphagia" value="1" />
                                                <Form.Check custom label="Yes" type={"radio"} id={`dysphagia-${"2"}`} name="optionDysphagia" value="2" checked={this.state.dysphagia === '2' ? true : false} />
                                            </div>
                                            <div className="validationMsg">
                                                <Error name="optionDysphagia" />
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>

                                <hr className="hr1" />

                                <div className="div-top col-sm-12" onChange={this.setHaematemesis.bind(this)}>
                                    <fieldset className="form-group">
                                        <legend >Haematemesis/melaena</legend>
                                        <div className="padding-Radio  row col-sm-11">
                                            <div className=" col-sm-10">
                                                <Form.Check custom label="No" type={"radio"} id={`haematemesis-${"1"}`} checked={this.state.haematemesis === '1' ? true : false} name="optionHaematemesis" value="1" />
                                                <Form.Check custom label="Yes" type={"radio"} id={`haematemesis-${"2"}`} name="optionHaematemesis" value="2" checked={this.state.haematemesis === '2' ? true : false} />
                                            </div>
                                            <div className="validationMsg">
                                                <Error name="optionHaematemesis" />
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>

                                <hr className="hr1" />

                                <div className="div-top col-sm-12" onChange={this.setGastroAnaemia.bind(this)}>
                                    <fieldset className="form-group">
                                        <legend >Anaemia and/or iron deficiency</legend>
                                        <div className="padding-Radio  row col-sm-11">
                                            <div className=" col-sm-10">
                                                <Form.Check custom label="No" type={"radio"} id={`gastroAnaemia-${"1"}`} checked={this.state.gastroAnaemia === '1' ? true : false} name="optionGastroAnaemia" value="1" />
                                                <Form.Check custom label="Yes" type={"radio"} id={`gastroAnaemia-${"2"}`} name="optionGastroAnaemia" value="2" checked={this.state.gastroAnaemia === '2' ? true : false} />
                                            </div>
                                            <div className="validationMsg">
                                                <Error name="optionGastroAnaemia" />
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>

                                <hr className="hr1" />

                                <div className="div-top col-sm-12" onChange={this.setGastroAbnormalImaging.bind(this)}>
                                    <fieldset className="form-group">
                                        <legend >Abnormal imaging</legend>
                                        <div className="padding-Radio  row col-sm-11">
                                            <div className=" col-sm-10">
                                                <Form.Check custom label="No" type={"radio"} id={`gastroAbnormalImaging-${"1"}`} checked={this.state.gastroAbnormalImaging === '1' ? true : false} name="optionGastroAbnormalImaging" value="1" />
                                                <Form.Check custom label="Yes" type={"radio"} id={`gastroAbnormalImaging-${"2"}`} name="optionGastroAbnormalImaging" value="2" checked={this.state.gastroAbnormalImaging === '2' ? true : false} />
                                            </div>
                                            <div className="validationMsg">
                                                <Error name="optionGastroAbnormalImaging" />
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>

{/* Hide Depending                                 */}

                                 <div className={this.state.hideOnAbnImgNO ? "hidden  col-sm-12 div-top " : "div-top col-sm-12"} onChange={this.setOesophagealCancer.bind(this)}>
                                    <fieldset className="form-group">
                                        <legend>Likely oesophageal or gastric cancer</legend>
                                        <div className=" padding-Radio row col-sm-11">
                                            <div className=" col-sm-10">
                                                <Form.Check custom label="No" type={"radio"} id={`positiveOesophageal-${"1"}`} checked={this.state.positiveOesophageal === '1' ? true : false} name="optionOesophageal" value="1" />
                                                <Form.Check custom label="Yes" type={"radio"} id={`positiveOesophageal-${"2"}`} checked={this.state.positiveOesophageal === '2' ? true : false} name="optionOesophageal" value="2" />

                                            </div>
                                            <div className="validationMsg">
                                                <Error name="optionOesophageal" />
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>

{/* Hide Depending                                 */}
                                
                                <hr className="hr1" />

                                <div className="div-top col-sm-12" onChange={this.setEarlySatiety.bind(this)}>
                                    <fieldset className="form-group">
                                        <legend >Early satiety or unexplained loss of appetite</legend>
                                        <div className="padding-Radio  row col-sm-11">
                                            <div className=" col-sm-10">
                                                <Form.Check custom label="No" type={"radio"} id={`earlySatiety-${"1"}`} checked={this.state.earlySatiety === '1' ? true : false} name="optionEarlySatiety" value="1" />
                                                <Form.Check custom label="Yes" type={"radio"} id={`earlySatiety-${"2"}`} name="optionEarlySatiety" value="2" checked={this.state.earlySatiety === '2' ? true : false} />
                                            </div>
                                            <div className="validationMsg">
                                                <Error name="optionEarlySatiety" />
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>

                                <hr className="hr1" />

                                <div className="div-top col-sm-12" onChange={this.setGastroWeightLoss.bind(this)}>
                                    <fieldset className="form-group">
                                        <legend >Weight loss, unexplained</legend>
                                        <div className="padding-Radio  row col-sm-11">
                                            <div className=" col-sm-10">
                                                <Form.Check custom label="No" type={"radio"} id={`gastroWeightLoss-${"1"}`} checked={this.state.gastroWeightLoss === '1' ? true : false} name="optionGastroWeightLoss" value="1" />
                                                <Form.Check custom label="Yes" type={"radio"} id={`gastroWeightLoss-${"2"}`} name="optionGastroWeightLoss" value="2" checked={this.state.gastroWeightLoss === '2' ? true : false} />
                                            </div>
                                            <div className="validationMsg">
                                                <Error name="optionGastroWeightLoss" />
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>

                                <hr className="hr1" />

                                <div className="div-top col-sm-12" onChange={this.setDyspepsia.bind(this)}>
                                    <fieldset className="form-group">
                                        <legend >Dyspepsia</legend>
                                        <div className="padding-Radio  row col-sm-11">
                                            <div className=" col-sm-10">
                                                <Form.Check custom label="No" type={"radio"} id={`dyspepsia-${"1"}`} checked={this.state.dyspepsia === '1' ? true : false} name="optionDyspepsia" value="1" />
                                                <Form.Check custom label="Yes" type={"radio"} id={`dyspepsia-${"2"}`} name="optionDyspepsia" value="2" checked={this.state.dyspepsia === '2' ? true : false} />
                                            </div>
                                            <div className="validationMsg">
                                                <Error name="optionDyspepsia" />
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
{/* Hide if No Dyspepsia */}
                                <div className={this.state.hideOnDyspepsiaNO ? "hidden  col-sm-12 div-top " : "div-top col-sm-12"} onChange={this.setAtrophicGastritis.bind(this)}>
                                    <fieldset className="form-group">
                                        <legend>Atrophic gastritis</legend>
                                        <div className=" padding-Radio row col-sm-11">
                                            <div className=" col-sm-10">
                                                <Form.Check custom label="No" type={"radio"} id={`positiveAtrophicGastritis-${"1"}`} checked={this.state.positiveAtrophicGastritis === '1' ? true : false} name="optionAtrophicGastritis" value="1" />
                                                <Form.Check custom label="Yes" type={"radio"} id={`positiveAtrophicGastritis-${"2"}`} checked={this.state.positiveAtrophicGastritis === '2' ? true : false} name="optionAtrophicGastritis" value="2" />

                                            </div>
                                            <div className="validationMsg">
                                                <Error name="optionAtrophicGastritis" />
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>

                                <div className={this.state.hideOnDyspepsiaNO ? "hidden  col-sm-12 div-top " : "div-top col-sm-12"} onChange={this.setUpperGICancer.bind(this)}>
                                    <fieldset className="form-group">
                                        <legend>Family history of upper GI cancer in 1st degree relative</legend>
                                        <div className=" padding-Radio row col-sm-11">
                                            <div className=" col-sm-10">
                                                <Form.Check custom label="No" type={"radio"} id={`positiveUpperGICancer-${"1"}`} checked={this.state.positiveUpperGICancer === '1' ? true : false} name="optionUpperGICancer" value="1" />
                                                <Form.Check custom label="Yes" type={"radio"} id={`positiveUpperGICancer-${"2"}`} checked={this.state.positiveUpperGICancer === '2' ? true : false} name="optionUpperGICancer" value="2" />

                                            </div>
                                            <div className="validationMsg">
                                                <Error name="optionUpperGICancer" />
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>

                                <div className={this.state.hideOnDyspepsiaNO ? "hidden  col-sm-12 div-top " : "div-top col-sm-12"} onChange={this.setNonResponsiveToPPI.bind(this)}>
                                    <fieldset className="form-group">
                                        <legend>Non-responsive to PPI and/or <i>H. pylori</i> therapy or <i>H. pylori</i>-negative</legend>
                                        <div className=" padding-Radio row col-sm-11">
                                            <div className=" col-sm-10">
                                                <Form.Check custom label="No" type={"radio"} id={`positiveNonResponsiveToPPI-${"1"}`} checked={this.state.positiveNonResponsiveToPPI === '1' ? true : false} name="optionNonResponsiveToPPI" value="1" />
                                                <Form.Check custom label="Yes" type={"radio"} id={`positiveNonResponsiveToPPI-${"2"}`} checked={this.state.positiveNonResponsiveToPPI === '2' ? true : false} name="optionNonResponsiveToPPI" value="2" />

                                            </div>
                                            <div className="validationMsg">
                                                <Error name="optionNonResponsiveToPPI" />
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>

                                <div className={this.state.hideOnDyspepsiaNO ? "hidden  col-sm-12 div-top " : "div-top col-sm-12"} onChange={this.setIntestinalMetaplasia.bind(this)}>
                                    <fieldset className="form-group">
                                        <legend>Known intestinal metaplasia/gastric dysplasia</legend>
                                        <div className=" padding-Radio row col-sm-11">
                                            <div className=" col-sm-10">
                                                <Form.Check custom label="No" type={"radio"} id={`positiveIntestinalMetaplasia-${"1"}`} checked={this.state.positiveIntestinalMetaplasia === '1' ? true : false} name="optionIntestinalMetaplasia" value="1" />
                                                <Form.Check custom label="Yes" type={"radio"} id={`positiveIntestinalMetaplasia-${"2"}`} checked={this.state.positiveIntestinalMetaplasia === '2' ? true : false} name="optionIntestinalMetaplasia" value="2" />

                                            </div>
                                            <div className="validationMsg">
                                                <Error name="optionIntestinalMetaplasia" />
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>

{/* Hide if No Dyspepsia END*/}

                                <hr className="hr1" />

                                <div className="div-top col-sm-12" onChange={this.setGord.bind(this)}>
                                    <fieldset className="form-group">
                                        <legend >GORD</legend>
                                        <div className="padding-Radio  row col-sm-11">
                                            <div className=" col-sm-10">
                                                <Form.Check custom label="No" type={"radio"} id={`gord-${"1"}`} checked={this.state.gord === '1' ? true : false} name="optiongord" value="1" />
                                                <Form.Check custom label="Yes,recent onset" type={"radio"} id={`gord-${"2"}`} name="optiongord" value="2" checked={this.state.gord === '2' ? true : false} />
                                                <Form.Check custom label="Yes,non-responsive" type={"radio"} id={`gord-${"3"}`} name="optiongord" value="3" checked={this.state.gord === '3' ? true : false} />
                                            </div>
                                            <div className="validationMsg">
                                                <Error name="optiongord" />
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>

                                <div className={this.state.hideOesophagus ? "hidden  col-sm-12 div-top " : "div-top col-sm-12"} onChange={this.setOesophagus.bind(this)}>
                                    <fieldset className="form-group">
                                        <legend>Known Barrett’s oesophagus</legend>
                                        <div className=" padding-Radio row col-sm-11">
                                            <div className=" col-sm-10">
                                                <Form.Check custom label="No" type={"radio"} id={`positiveBarretOesophagus-${"1"}`} checked={this.state.positiveBarretOesophagus === '1' ? true : false} name="optionOesophagus" value="1" />
                                                <Form.Check custom label="Yes" type={"radio"} id={`positiveBarretOesophagus-${"2"}`} checked={this.state.positiveBarretOesophagus === '2' ? true : false} name="optionOesophagus" value="2" />

                                            </div>
                                            <div className="validationMsg">
                                                <Error name="optionOesophagus" />
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                <hr className="hr1" />

                                <div className="div-top col-sm-12" onChange={this.setAbdominalPain.bind(this)}>
                                    <fieldset className="form-group">
                                        <legend >Upper abdominal pain</legend>
                                        <div className="padding-Radio  row col-sm-11">
                                            <div className=" col-sm-10">
                                                <Form.Check custom label="No" type={"radio"} id={`abdominalPain-${"1"}`} checked={this.state.abdominalPain === '1' ? true : false} name="optionAbdominalPain" value="1" />
                                                <Form.Check custom label="Yes" type={"radio"} id={`abdominalPain-${"2"}`} name="optionAbdominalPain" value="2" checked={this.state.abdominalPain === '2' ? true : false} />
                                            </div>
                                            <div className="validationMsg">
                                                <Error name="optionAbdominalPain" />
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>

                                <hr className="hr1" />

                                <div className="div-top col-sm-12" onChange={this.setNausea.bind(this)}>
                                    <fieldset className="form-group">
                                        <legend >Nausea/vomiting, persistent</legend>
                                        <div className="padding-Radio  row col-sm-11">
                                            <div className=" col-sm-10">
                                                <Form.Check custom label="No" type={"radio"} id={`nausea-${"1"}`} checked={this.state.nausea === '1' ? true : false} name="optionNausea" value="1" />
                                                <Form.Check custom label="Yes" type={"radio"} id={`nausea-${"2"}`} name="optionNausea" value="2" checked={this.state.nausea === '2' ? true : false} />
                                            </div>
                                            <div className="validationMsg">
                                                <Error name="optionNausea" />
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>

                                <hr className="hr1" />

                                <div className="div-top col-sm-12" onChange={this.setNewIbd.bind(this)}>
                                    <fieldset className="form-group">
                                        <legend >Newly diagnosed inflammatory bowel disease in adults and upper GI symptoms present</legend>
                                        <div className="padding-Radio  row col-sm-11">
                                            <div className=" col-sm-10">
                                                <Form.Check custom label="No" type={"radio"} id={`newIbd-${"1"}`} checked={this.state.newIbd === '1' ? true : false} name="optionNewIbd" value="1" />
                                                <Form.Check custom label="Yes" type={"radio"} id={`newIbd-${"2"}`} name="optionNewIbd" value="2" checked={this.state.newIbd === '2' ? true : false} />
                                            </div>
                                            <div className="validationMsg">
                                                <Error name="optionNewIbd" />
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>

                                <hr className="hr1" />

                                <div className="div-top col-sm-12" onChange={this.setPerniciousAnaemiaKnown.bind(this)}>
                                    <fieldset className="form-group">
                                        <legend >Known pernicious anaemia, endoscopically diagnosed</legend>
                                        <div className="padding-Radio  row col-sm-11">
                                            <div className=" col-sm-10">
                                                <Form.Check custom label="No" type={"radio"} id={`perniciousAnaemiaKnown-${"1"}`} checked={this.state.perniciousAnaemiaKnown === '1' ? true : false} name="optionPerniciousAnaemiaKnown" value="1" />
                                                <Form.Check custom label="Yes" type={"radio"} id={`perniciousAnaemiaKnown-${"2"}`} name="optionPerniciousAnaemiaKnown" value="2" checked={this.state.perniciousAnaemiaKnown === '2' ? true : false} />
                                            </div>
                                            <div className="validationMsg">
                                                <Error name="optionPerniciousAnaemiaKnown" />
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>

                                <hr className="hr1" />

                                <div className="div-top col-sm-12" onChange={this.setPerniciousAnaemiaSuspect.bind(this)}>
                                    <fieldset className="form-group">
                                        <legend >Suspected pernicious anaemia based on serology</legend>
                                        <div className="padding-Radio  row col-sm-11">
                                            <div className=" col-sm-10">
                                                <Form.Check custom label="No" type={"radio"} id={`perniciousAnaemiaSuspect-${"1"}`} checked={this.state.perniciousAnaemiaSuspect === '1' ? true : false} name="optionPerniciousAnaemiaSuspet" value="1" />
                                                <Form.Check custom label="Yes" type={"radio"} id={`perniciousAnaemiaSuspect-${"2"}`} name="optionPerniciousAnaemiaSuspet" value="2" checked={this.state.perniciousAnaemiaSuspect === '2' ? true : false} />
                                            </div>
                                            <div className="validationMsg">
                                                <Error name="optionPerniciousAnaemiaSuspet" />
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>

                                <hr className="hr1" />

                                <div className="div-top col-sm-12" onChange={this.setCoeliacdisease.bind(this)}>
                                    <fieldset className="form-group">
                                        <legend >Coeliac disease</legend>
                                        <div className="padding-Radio  row col-sm-11">
                                            <div className=" col-sm-10">
                                                <Form.Check custom label="No" type={"radio"} id={`coeliacdisease-${"1"}`} checked={this.state.coeliacdisease === '1' ? true : false} name="optionCoeliacdisease" value="1" />
                                                <Form.Check custom label="Yes, suspected coeliac disease with positive serology" type={"radio"} id={`coeliacdisease-${"2"}`} name="optionCoeliacdisease" value="2" checked={this.state.coeliacdisease === '2' ? true : false} />
                                                <Form.Check custom label="Yes, known coeliac disease with no exposure to gluten" type={"radio"} id={`coeliacdisease-${"3"}`} name="optionCoeliacdisease" value="3" checked={this.state.coeliacdisease === '3' ? true : false} />
                                            </div>
                                            <div className="validationMsg">
                                                <Error name="optionCoeliacdisease" />
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>

{/* Hide if No Coeliac disease */}
                                <div className={this.state.hideOnCoeliacDiseaseNO ? "hidden  col-sm-12 div-top " : "div-top col-sm-12"} onChange={this.setHighSerologicalTitres.bind(this)}>
                                    <fieldset className="form-group">
                                        <legend>Persistent high serological titres after 12 months</legend>
                                        <div className=" padding-Radio row col-sm-11">
                                            <div className=" col-sm-10">
                                                <Form.Check custom label="No" type={"radio"} id={`positiveHighSerologicalTitres-${"1"}`} checked={this.state.positiveHighSerologicalTitres === '1' ? true : false} name="optionHighSerologicalTitres" value="1" />
                                                <Form.Check custom label="Yes" type={"radio"} id={`positiveHighSerologicalTitres-${"2"}`} checked={this.state.positiveHighSerologicalTitres === '2' ? true : false} name="optionHighSerologicalTitres" value="2" />

                                            </div>
                                            <div className="validationMsg">
                                                <Error name="optionHighSerologicalTitres" />
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>

                                <div className={this.state.hideOnCoeliacDiseaseNO ? "hidden  col-sm-12 div-top " : "div-top col-sm-12"} onChange={this.setPersistentDiarrhoea.bind(this)}>
                                    <fieldset className="form-group">
                                        <legend>Persistent diarrhoea, abdominal pain, weight loss, fatigue, or anaemia</legend>
                                        <div className=" padding-Radio row col-sm-11">
                                            <div className=" col-sm-10">
                                                <Form.Check custom label="No" type={"radio"} id={`positivePersistentDiarrhoea-${"1"}`} checked={this.state.positivePersistentDiarrhoea === '1' ? true : false} name="optionPersistentDiarrhoea" value="1" />
                                                <Form.Check custom label="Yes" type={"radio"} id={`positivePersistentDiarrhoea-${"2"}`} checked={this.state.positivePersistentDiarrhoea === '2' ? true : false} name="optionPersistentDiarrhoea" value="2" />

                                            </div>
                                            <div className="validationMsg">
                                                <Error name="optionPersistentDiarrhoea" />
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>

{/* Hide if No Coeliac disease END */}
                                <hr className="hr1" />

                                <div className="div-top col-sm-12" onChange={this.setNewCirrhosis.bind(this)}>
                                    <fieldset className="form-group">
                                        <legend >Newly diagnosed cirrhosis (to assess for oesophageal varices)</legend>
                                        <div className="padding-Radio  row col-sm-11">
                                            <div className=" col-sm-10">
                                                <Form.Check custom label="No" type={"radio"} id={`newCirrhosis-${"1"}`} checked={this.state.newCirrhosis === '1' ? true : false} name="optionNewCirrhosis" value="1" />
                                                <Form.Check custom label="Yes" type={"radio"} id={`newCirrhosis-${"2"}`} name="optionNewCirrhosis" value="2" checked={this.state.newCirrhosis === '2' ? true : false} />
                                            </div>
                                            <div className="validationMsg">
                                                <Error name="optionNewCirrhosis" />
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>

                            </div> {/* Add inside */}
                            
                            <div className="button-strip">
                                <div className="button-start" />
                                <button id="category" type="submit" className="btn btn-primary button-width" type="submit" onClick={this.getGastroCategoryFromServer.bind(this)}>Categorise gastroscopy</button>
                                <div className="button-gap" />
                                <button className="btn btn-primary button-width" type="button" onClick={this.trigerInParent}>End session</button>
                            </div>
                        </div>
                    </div>
                </Wizard.Page>
                <Wizard.Page>
                    <p> Result Page for Gastroscopy</p>
                    <ColCategorisation finalCategory={this.state.finalCategory} symptomType={this.state.symptomType} comment={this.state.comment} />
                </Wizard.Page>    
                {/* <Wizard.Page>
                    <ColCategorisation finalCategory={this.state.finalCategory} symptomType={this.state.symptomType} comment={this.state.comment} />
                </Wizard.Page> */}
                
            </Wizard >



        )
    }
}