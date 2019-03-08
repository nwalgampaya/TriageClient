import React from 'react';
import '../../App.css';
import { Field } from 'react-final-form'

class Symptoms extends React.Component {

    constructor(props) {
        super(props)
        // this.Symptoms= this.Symptoms.bind(this);
        this.state = {
            errors: {},
            SymptomsList:[]
            
        };
        param: 'ifobt'


        this.handleChange = this.handleChange.bind(this);

    }
    
    handleChange(e) {

       
       
        console.log("in check change is checked" + e.target.checked)
        console.log("in check change" + e.target.name)
        // console.log("in check change" + e.target.id)

     /** This functionality is used to get the checked values correctly when multiple boxes selected and deselected.   **/
        if(e.target.checked==true){
            console.log("in check change checked" + e.target.checked)
            var newArray = this.state.SymptomsList.slice();  
            newArray.push(e.target.name);   
            // this.setState({SymptomsList:newArray})
            this.state.SymptomsList=newArray
            // this.props.onSelectSymptom(this.state.SymptomsList)
        }else if(e.target.checked==false){
            console.log("in check change checked false" + e.target.checked)
            var removeArray = [...this.state.SymptomsList]; // make a separate copy of the array
            var index = removeArray.indexOf(e.target.name)
            removeArray.splice(index, 1);
        //  this.setState({SymptomsList: removeArray});
            this.state.SymptomsList=removeArray;
            
        }
        // this.state.SymptomsList=this.state.SymptomsList + e.target.name
        console.log("in check this.props.onSelectSymptom" + this.state.SymptomsList)

        this.props.onSelectSymptom(e.target.name);
        // this.setState({
            //   complete: !this.state.complete
            // });
        }
        
        
        render() {
            const grterThn ="<";
            const Error = ({ name }) => (
                <Field
                  name={name}
                  subscribe={{ touched: true, error: true }}
                  render={({ meta: { touched, error } }) =>
                    touched && error ? <span>{error}</span> : null
                  }
                />)

        return (
            <div  validate={this.validate} 
            > 
                {/* <div className="row"> */}
                <div className="col-sm-12 App para-heddings">
                    <p className="">Check all boxes that apply to the patient.</p>
                </div>
                {/* <br/> */}
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
                    {/* <input className="form-check-input form-control" onChange={this.handleChange} type="checkbox" name="Rctlbld" id="3" value="1" /> */}
                    <input className="form-check-input form-control" onChange={this.handleChange} type="checkbox" name="Altbh" id="4"/>
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
                </div>
                <div className="validationMsg">
                      <Error name="Abimg" />
                </div>
                {/* <label> <input onChange={this.handleChange} type="checkbox" name="Rctlbld" id="3" />  Rectal bleeding</label><br />
                <label> <input onChange={this.handleChange} type="checkbox" name="Abdpain" id="5" />  Abdominal pain (unexplained)</label><br />
                <label> <input onChange={this.handleChange} type="checkbox" name="Weightl" id="6" />  Weight loss (unexplained)</label><br />
                <label> <input onChange={this.handleChange} type="checkbox" name="Maspal" id="7" />  Mass palpable (abdominal or rectal) or present on rigid/flexible sigmoidoscopy</label><br />
                <label> <input onChange={this.handleChange} type="checkbox" name="IBD" id="8" />  Possible inflammatory bowel disease (IBD)</label><br />
                <label> <input onChange={this.handleChange} type="checkbox" name="Lferritin" id="9" />  Low MCV/MCH or ferritin</label><br />
                <label> <input onChange={this.handleChange} type="checkbox" name="unknown" id="10" />  Primary of unknown origin</label><br />
                <label> <input onChange={this.handleChange} type="checkbox" name="Abimg" id="11" />  Abnormal imaging</label><br /> */}
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>



        )
    }
}

export default Symptoms;