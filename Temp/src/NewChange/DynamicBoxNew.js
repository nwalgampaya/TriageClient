import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { properties } from '../../properties.js';
import buttonPlus from '../../img/button-plus.png';
import buttonMinus from '../../img/button-minus.png';
import ProneApp from '../ProneApp'
// import Form from 'MultiForm'

class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            complaintType: '111',
            complaintTypeData: [],
            specificComplaint: '111',
            specificComplaintData: [],
            //   multiSpecComp:[]
            //   inputList: [],
        };

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
    }
    render() {
        return <div>
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
                <div className="col-sm-2">
                    {/* onload={this.loadProfession.bind(this)}  */}
                    <select className="form-control dorp-box" id="idCompType" value={this.state.complaintType} onChange={this.handleComplaintTypeChange.bind(this)} name="complaintTypecolumn">                            {
                        this.state.complaintTypeData.map((read, i) => {
                            // if (read.published == "1") {
                            this.state.read = read.name;
                            // this.state.selectedProfession=read.id;
                            console.log("complaintTypeData ID 11 :  " + read.id);
                            return <option key={read.value} value={read.id}>{read.name}</option>
                            // }
                            // return <option>{doctor.speaciality}</option>
                        })
                    }
                    </select>
                    <div className="validationMsg">
                        {/* <Error name="complaintTypecolumn" /> */}
                    </div>

                </div>
                <div className="col-sm-2">
                </div>
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
                <div className="col-sm-6">

                    <select className="form-control dorp-box" id="idSpecComp" value={this.state.specificComplaint} onChange={this.handleChangeSpecComplaint.bind(this)} name="specificComplaintcolumn">{

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
                        {/* <Error name="specificComplaintcolumn" /> */}
                    </div>
                    {/* // </td> */}
                    {/* <td><input className="img-box" type="button" style={{ backgroundImage: `url(${buttonMinus})` }} alt="my image" onClick={() => this.onRemoveBtnClick()} ></input></td> */}
                    {/* <td><input type="button" img src={buttonPlus} alt="my image" onClick={() => this.onAddBtnClick()} ></input></td> */}
                    {/* // </tr>  */}
                </div>
                <br /><br /><br />
                {/* </div> */}




                {/* <input placeholder="Your input here" /> 
      <input placeholder="Your input here" />  */}

            </div>
            {/* </tbody>
            </table> */}
            {/* {this.state.inputList.map(function(input, index) {
                return input;
            })} */}
        </div>;
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

    createInputList() {
        const inputList = this.state.inputList;
        this.setState({
            inputList: inputList.concat(
                <div>
                    {/* <table>
        <tbody>
            <tr>
                <td> */}
                    <div class="row">
                        <div class="col-sm-11">
                            <Input onSelectSpecComp={this.setValueFromChild} btnClickCount={this.state.btnClickCount} onActionRemove={this.onRemoveBtnClick} />

                        </div>
                        {/* </td>
        <td> */}

                        <div class="col-sm-1">
                            <input className="img-box" type="button" style={{ backgroundImage: `url(${buttonMinus})` }} alt="my image" onClick={() => this.onRemoveBtnClick()} ></input>

                            <br /><br />
                            {/* </td>
            </tr>
        </tbody>
<
    </table> */}
                        </div>
                    </div>
                </div>
            )
        });
    }

    onAddBtnClick(event) {
        { this.createInputList() }
    }
    onAddBtnClickold(event) {
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
                    <div class="row">
                        <div class="col-sm-11">
                            <Input onSelectSpecComp={this.setValueFromChild} btnClickCount={this.state.btnClickCount} onActionRemove={this.onRemoveBtnClick} />

                        </div>
                        {/* </td>
                    <td> */}

                        <div class="col-sm-1">
                            <input className="img-box" type="button" style={{ backgroundImage: `url(${buttonMinus})` }} alt="my image" onClick={() => this.onRemoveBtnClick()} ></input>

                            <br /><br />
                            {/* </td>
                        </tr>
                    </tbody>
<
                </table> */}
                        </div>
                    </div>
                </div>
            )
        });
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
        // returnArrayFromChild: this.state.returnArrayFromChild.splice(i,1)

        // this.setState({
        //     inputList: inputList.concat(<Input onSelectSpecComp={this.setValueFromChild} btnClickCount={this.state.btnClickCount} />)
        // });
    }
    // key={inputList.length}
    render() {
        return (
            <div >
                {/* <table>
                    <tbody>
                        <tr>
                            <td> */}
                <div class="row">
                    <div class="col-sm-11">
                        {/* {this.createInputList()} */}
                        {/* <Input onSelectSpecComp={this.setValueFromChild} btnClickCount={this.state.btnClickCount} onActionRemove={this.onRemoveBtnClick}/> */}
                    </div>

                    {/* </td>
                            <td> */}
                    {/* {buttonPlus} */}
                    {/* <button> <img src={buttonPlus} alt="my image" onClick={() => this.onAddBtnClick()} /></button> */}
                    {/* <td> */}
                    <div class="col-sm-1">
                        <input className="img-box" type="button" style={{ backgroundImage: `url(${buttonPlus})` }} alt="my image" onClick={() => this.onAddBtnClick()} ></input>
                    </div>

                    {/* </td> */}
                    {/* <td><input className="img-box" type="button" style={{ backgroundImage: `url(${buttonMinus})` }} alt="my image" onClick={() => this.onRemoveBtnClick()} ></input></td> */}
                    {/* </td>
                        </tr>
                        </tbody>
                    </table> */}
                    {/* <button onClick={this.onAddBtnClick}>Add input</button> */}
                    {this.state.inputList.map(function (input, index) {
                        return input;
                    })}
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