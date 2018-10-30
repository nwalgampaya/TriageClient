import React from 'react';
import '../../App.css';

class Symptoms extends React.Component {

    constructor(props) {
        super(props)
        // this.Symptoms= this.Symptoms.bind(this);
        this.state = {
            errors: {},
            
        };
        param: 'ifobt'


        this.handleChange = this.handleChange.bind(this);

    }
    
    handleChange(e) {
        console.log("in check change" + e.target.checked)
        console.log("in check change" + e.target.name)
        console.log("in check change" + e.target.id)
        this.props.onSelectSymptom(e.target.name);
        // this.setState({
            //   complete: !this.state.complete
            // });
        }
        
        
        render() {
            const grterThn ="<";

        return (
            <div>
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
                    <input className="form-check-input form-control" onChange={this.handleChange} type="checkbox" name="ifobt" id="1" value="1" />
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

                {/* <label> <input onChange={this.handleChange} type="checkbox" name="Rctlbld" id="3" />  Rectal bleeding</label><br />
                <label> <input onChange={this.handleChange} type="checkbox" name="Abdpain" id="5" />  Abdominal pain (unexplained)</label><br />
                <label> <input onChange={this.handleChange} type="checkbox" name="Weightl" id="6" />  Weight loss (unexplained)</label><br />
                <label> <input onChange={this.handleChange} type="checkbox" name="Maspal" id="7" />  Mass palpable (abdominal or rectal) or present on rigid/flexible sigmoidoscopy</label><br />
                <label> <input onChange={this.handleChange} type="checkbox" name="IBD" id="8" />  Possible inflammatory bowel disease (IBD)</label><br />
                <label> <input onChange={this.handleChange} type="checkbox" name="Lferritin" id="9" />  Low MCV/MCH or ferritin</label><br />
                <label> <input onChange={this.handleChange} type="checkbox" name="unknown" id="10" />  Primary of unknown origin</label><br />
                <label> <input onChange={this.handleChange} type="checkbox" name="Abimg" id="11" />  Abnormal imaging</label><br /> */}
            </div>




        )
    }
}

export default Symptoms;