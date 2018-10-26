import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { properties } from '../../properties.js';
import buttonPlus from '../../img/button-plus.png';
import buttonMinus from '../../img/button-minus.png';
import ProneApp from '../ProneApp'
import { Field } from 'react-final-form'
// import Form from 'MultiForm'
import Wizard from '../../Wizard.js'

class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            errors: {},
            complaintType: '111',
            complaintTypeData: [],
            specificComplaint: '111',
            specificComplaintData: [],
            initialClickCount: '',
            //   multiSpecComp:[]
            //   inputList: [],
            disableValue: false,
        };
        hideSpecialty: true

        // this.onAddBtnClick = this.onAddBtnClick.bind(this);

    }

    handleChangeSpecComplaint = (e) => {
        // this.setComplaintState();
        this.setState({ specificComplaint: e.target.value });

        console.log("btnClickCountbtnClickCountbtnClickCountbtnClickCountbtnClickCountbtnClickCount" + this.props.btnClickCount)
        console.log("specificComplaint id ******************8888" + e.target.value);


        this.props.onSelectSpecComp(e.target.value);


        // this.setState({
        //     multiSpecComp: this.state.multiSpecComp.concat(e.target.value)
        // });


        // this.state.multiSpecComp.map((speccompmulti, i) => {
        // console.log("**********************************************************************###### elements" + speccompmulti)  
        // })

    }


    handleComplaintTypeChange = (e) => {
        this.setState({ complaintType: e.target.value });
        // this.state.hideSpecialty=true;

        console.log("selected complaintTypeData id : " + this.state.complaintType)
    }

    onRemoveBtnClick(event) {

        this.props.onActionRemove(event);
        // const inputList = this.state.inputList;
        // this.state.multiSpecComp = this.state.multiSpecComp;
        // this.state.btnClickCount = this.state.btnClickCount + 1;
        // this.setState({
        //     inputList: inputList.concat(<Input onSelectSpecComp={this.setValueFromChild} btnClickCount={this.state.btnClickCount} />)
        // });
    }
    componentDidMount() {
        const urcomplaintType = properties.baseUrl + "complaintTypes/";
        fetch(urcomplaintType)
            .then(response => response.json())
            .then((data) => {

                console.log(data);
                this.setState({

                    // flats: data
                    complaintTypeData: data

                });
            })

        // const urspecificComplaint = "http://128.250.143.10:8080/ProneSpringBoot/api/specificComplaints/";
        const urspecificComplaint = properties.baseUrl + "specificComplaints/";
        fetch(urspecificComplaint)
            .then(response => response.json())
            .then((data) => {

                console.log(data);
                this.setState({

                    // flats: data
                    specificComplaintData: data

                });
            })

            
        // this.state.initialClickCount = this.props.btnClickCount
        // if (this.props.btnClickCount > 0) {
        //     // this.state.disableValue = true;
            for (var i = this.props.btnClickCount; i > 0; i--) {

                console.log(this.props.btnClickCount + "idCompType")
                // document.getElementById("idCompType").disabled = true;
                document.getElementById(i+ "idCompType").disabled = true;
                document.getElementById(i+ "idSpecComp").disabled = true;

                if (i == 0) {

                    document.getElementById(this.props.btnClickCount + "idCompType").disabled = false;
                    document.getElementById(this.state.initialClickCount + "idSpecComp").disabled = false;
                }

            }
        // }
        // for (var i = this.props.btnClickCount; i > 0; i--) {
        // if(this.state.initialClickCount<this.props.btnClickCount){
        //     console.log("MINUS button CLICKED in" + this.props.btnClickCount) 
        //     if(i>0){
        //         console.log("MINUS button CLICKED in : " +i+ "idCompType")
        //     document.getElementById(i + "idCompType").disabled = true;
        //                 document.getElementById(i + "idSpecComp").disabled = true;
        // }}
        // }
    }

componentDidUpdate(){
    // console.log("MINUS button CLICKED out") 
    // for (var i = this.props.btnClickCount; i > 0; i--) {
    //     if(this.state.initialClickCount<this.props.btnClickCount){
    //         console.log("MINUS button CLICKED in" + this.props.btnClickCount) 
    //         if(i>0){
    //             console.log("MINUS button CLICKED in : " +i+ "idCompType")
    //         document.getElementById(i + "idCompType").disabled = false;
    //                     document.getElementById(i + "idSpecComp").disabled = false;
    //     }}}
}
    render() {
        const Error = ({ name }) => (
            <Field
                name={name}
                subscribe={{ touched: true, error: true }}
                render={({ meta: { touched, error } }) =>
                    touched && error ? <span>{error}</span> : null
                }
            />
        )
        return (
            <Wizard.Page
            // validate={values=>{
            //     const errors = {}
            //     console.log("in validation %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 22222")
            //     if (this.state.complaintType==111) {
            //         // alert("In error")
            //         errors.complaintTypecolumn = 'Please enter an appropriate value'
            //       }
            //       if (this.state.specificComplaint==111) {
            //         // alert("In error")
            //         errors.specificComplaintcolumn = 'Please enter an appropriate value'
            //       }
            //       return errors
            // }}
            >
                {/* <table>
                <tbody>
                    <tr> */}

                {/* <td> */}

                <div class="row">
                    <div className="col-sm-6">
                        <label className="control-margin-lbl"> Complaint issue type:  </label>
                        {/* </td> */}
                        {/* // <td> */}
                    </div>
                    <div className="col-sm-4">
                        {/* onload={this.loadProfession.bind(this)}  */}
                        <select disabled={this.state.disableValue} className="form-control dorp-box" id={this.props.btnClickCount == '' ? "idCompType" : this.props.btnClickCount + "idCompType"} value={this.state.complaintType} onChange={this.handleComplaintTypeChange.bind(this)} name="complaintTypecolumn">                            {
                            this.state.complaintTypeData.map((read, i) => {
                                // if (read.published == "1") {
                                this.state.read = read.name;
                                // this.state.selectedProfession=read.id;
                                console.log("complaintTypeData ID 11 :  " + read.id);
                                console.log("complaintTypeData ID click:  " + this.props.btnClickCount);

                                return <option key={read.value} value={read.id}>{read.name}</option>
                                // }
                                // return <option>{doctor.speaciality}</option>
                            })
                        }
                        </select>
                        <div className="validationMsg">
                            <Error name="complaintTypecolumn" />
                        </div>

                    </div>
                    {/* <div className="col-sm-2">
                </div> */}
                </div>
                {/* </td>
                     </tr> */}
                <br />
                {/* // <tr> */}
                {/* //     <td> */}
                <div class="row">

                    <div className="col-sm-6">
                        <label className="control-margin-lbl"> Specific complaint issue:</label>
                        {/* </td> */}
                        {/* // <td> */}
                    </div>
                    <div className="col-sm-4">

                        <select disabled={this.state.disableValue} className="form-control dorp-box" id={this.props.btnClickCount == '' ? "idSpecComp" : this.props.btnClickCount + "idSpecComp"} value={this.state.specificComplaint} onChange={this.handleChangeSpecComplaint.bind(this)} name="specificComplaintcolumn">{

                            this.state.specificComplaintData.map((specificComplain, i) => {
                                // this.state.selectedProfession
                                if (specificComplain.typeid == this.state.complaintType) {
                                    // this.state.specificComplain = specificComplain.name;

                                    // this.state.specialty=specificComplain.id;
                                    // console.log("selectedProfession id :  " + this.state.selectedProfession.id);
                                    console.log("speacialty typeId&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& :  " + specificComplain.typeid);
                                    return (<option key={specificComplain.value} value={specificComplain.id}>{specificComplain.name}</option>)
                                }
                                // return <option>{doctor.speaciality}</option>
                            })
                        }
                        </select>
                        <div className="validationMsg">
                            <Error name="specificComplaintcolumn" />
                        </div>
                        {/* // </td> */}
                        {/* <td> */}
                        {/* <input className="img-box" type="button" style={{ backgroundImage: `url(${buttonMinus})` }} alt="my image" onClick={() => this.onRemoveBtnClick()} ></input> */}
                        {/* </td> */}
                        {/* <td><input type="button" img src={buttonPlus} alt="my image" onClick={() => this.onAddBtnClick()} ></input></td> */}
                        {/* // </tr>  */}
                    </div>
                    {/* <br/><br /> */}
                    {/* </div> */}




                    {/* <input placeholder="Your input here" /> 
      <input placeholder="Your input here" />  */}

                </div>
                {/* </tbody>
            </table> */}
                {/* {this.state.inputList.map(function(input, index) {
                return input;
            })} */}
                <br />
            </Wizard.Page>);
        <br />
    }
}

class MultiForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputList: [],
            multiSpecComp: [],
            btnClickCount: 0,
        };
        this.onAddBtnClick = this.onAddBtnClick.bind(this);
    }

    setValueFromChild = (speccompVal) => {
        console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& : " + speccompVal)

        if (this.state.inputList.length == this.state.btnClickCount) {
            console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& multiSpecComp lenth" + this.state.multiSpecComp.length)
            console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& btnclicked" + this.state.btnClickCount)
            // array.splice(2, 0, "three");
            this.setState({
                multiSpecComp: this.state.multiSpecComp.splice(this.state.inputList.length, 1, speccompVal)
                // multiSpecComp: this.state.multiSpecComp.concat(speccompVal)
            });
        }
        // console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& multiSpecComp lenth"+ this.state.multiSpecComp.length)

        this.props.onSpecCompToParent(this.state.multiSpecComp, this.state.btnClickCount);

        this.state.multiSpecComp.map((speccompmulti, i) => {
            console.log("**********************************************************************###### elements" + speccompmulti)
        })
        // this.setState({ specificComplaint:speccompVal});
    }

    onAddBtnClick(event) {
        const inputList = this.state.inputList;
        this.state.multiSpecComp = this.state.multiSpecComp;
        this.state.btnClickCount = this.state.btnClickCount + 1;
        this.setState({
            inputList: inputList.concat(
                <div>
                    {/* <table>
                    <tbody>
                        <tr>
                            <td> */}

                    {/* <div class="row">
                        <div class="col-sm-11"> */}
                    <Input onSelectSpecComp={this.setValueFromChild} btnClickCount={this.state.btnClickCount} onActionRemove={this.onRemoveBtnClick} />

                    {/* </div> */}
                    {/* </td>
                    <td> */}

                    {/* <div class="col-sm-1">
                    <input className="img-box" type="button" style={{ backgroundImage: `url(${buttonMinus})` }} alt="my image" onClick={() => this.onRemoveBtnClick()} ></input>
                        </div> */}


                    {/* </td>
                        </tr>
                    </tbody>
<
                </table> */}
                    {/* // </div> */}
                </div>
            )
        });
        let divMinus = document.getElementById("minusButton");
        if (this.state.btnClickCount > 0) {
            divMinus.style.display = "block"
        }

    }

    onRemoveBtnClick(event) {
        console.log("in Remove")
        var arrayInputList = [...this.state.inputList];
        var index = arrayInputList.indexOf(this.state.btnClickCount)
        // this.state.multiSpecComp = this.state.multiSpecComp;
        // this.state.btnClickCount = this.state.btnClickCount + 1;
        arrayInputList.splice(index, 1)
        this.setState({
            inputList: arrayInputList

            // inputList: inputList.concat(<Input onSelectSpecComp={this.setValueFromChild} btnClickCount={this.state.btnClickCount} />)
        });

        // this.state.btnClickCount= this.state.btnClickCount-1
        this.setState({
        })

        this.state.btnClickCount = this.state.btnClickCount - 1
        this.props.onRemoveElement(this.state.btnClickCount)

        let divMinus = document.getElementById("minusButton");
        if (this.state.btnClickCount == 0) {
            divMinus.style.display = "none"
        }

    }

    componentDidMount() {
        let divMinus = document.getElementById("minusButton");
        if (this.state.btnClickCount == 0) {
            divMinus.style.display = "none"
        }
    }

    // createSpecificComplaintsGroup = () => {

    //     let 
    // }
    // key={inputList.length}
    render() {
        return (
            <div >

                <div className="row">
                    <div className="col-sm-8">
                        <Input onSelectSpecComp={this.setValueFromChild} btnClickCount={this.state.btnClickCount} onActionRemove={this.onRemoveBtnClick} />
                        {this.state.inputList.map(function (input, index) {
                            return input;
                        })}


                        {/* <div id="minusButton" class="col-sm-1" >
                            <input className="img-box" type="button" style={{ backgroundImage: `url(${buttonMinus})` }} alt="my image" onClick={() => this.onRemoveBtnClick()} ></input>
                        </div> */}
                    </div>
                    {/* <div className="plusButton"> */}

                    <div className="col-sm-1">
                        <input className="img-box plusButton" type="button" style={{ backgroundImage: `url(${buttonPlus})` }} alt="my image" onClick={() => this.onAddBtnClick()} ></input>
                    </div>
                    {/* </div> */}



                    <div className="row">
                        <div className="col-sm-8">
                            {/* {this.state.inputList.map(function (input, index) {
                    return input;
                })} */}
                            {/* </div> */}
                        </div></div>
                </div>
                <div className="row">
                    <div className="col-sm-8">

                    </div>

                    <div id="minusButton" className="col-sm-1" >
                        <input className="img-box" type="button" style={{ backgroundImage: `url(${buttonMinus})` }} alt="my image" onClick={() => this.onRemoveBtnClick()} ></input>
                    </div>
                </div>
            </div>
        );
    }
}


// ReactDOM.render(
//   <Form />,
//   document.getElementById('container')
// );


export default MultiForm;