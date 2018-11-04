import React, { Component } from 'react';
import Wizard from '../Wizard.js'
import { Field } from 'react-final-form'
import '../App.css';
import '../index.css';
import MyTable from './steps/PictoGram.js';
import Welcome from './steps/Welcome.js';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { properties } from '../properties.js';
import MultiForm from '../components/steps/DynamicBox'
import buttonPlus from '../img/error.png';

// var SampleComponent = React.createClass({
//   render: function() {
//       return (
//           <div>
//               <h1>Sample Component!</h1>
//           </div>
//       );json array
//   }
// });

export default class ProneApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: [],
      // selectedProfession :"1",
      profession: [],
      // speacialty: [],
      uniqueNames: [],
      arrayDoc: [],
      specialty: "111",
      age: "111",
      sex: "",
      location: "111",
      complaints: "111",
      selectedProfession: "111",
      locationData: [],
      specialtyData: [],
      jsonId: '',
      fields: {},
      errors: {},
      score: '',
      specialProf: 'specialists',
      complaintType: '111',
      complaintTypeData: [],
      specificComplaint: '111',
      specificComplaintData: [],
      ageData: [],
      complaintsData: [],
      // sexflag:boolean
      clearvalues: 0,
      startDate: moment(),
      show: true,
      hideSpecialty: true,
      isHiddenComplaints: true,
      returnArrayFromChild: [],
      duplArryFromChild: [],
      specificComplaintArr: '',
      multiComplaint:[],
    };

  }


  // createTableMale = () => {
  //   let table = [];
  //   let children = []

  //   this.setState({
  //     isHidden: !this.state.isHidden
  //   })
  //   console.log("In create table *****************")
  //   children.push(<div><td> <label className="control-margin-lbl"> Complaint issue type:  </label></td>
  //     <td></td>
  //     <td>
  //       <div>
  //         {/* onload={this.loadProfession.bind(this)}  */}
  //         <select className="form-control dorp-box" id="idCompType" value={this.state.complaintType} onChange={this.handleComplaintTypeChange.bind(this)} name="complaintTypecolumn">                            {
  //           this.state.complaintTypeData.map((read, i) => {
  //             // if (read.published == "1") {
  //             this.state.read = read.name;
  //             // this.state.selectedProfession=read.id;
  //             console.log("complaintTypeData ID 11 :  " + read.id);
  //             return <option key={read.value} value={read.id}>{read.name}</option>
  //             // }
  //             // return <option>{doctor.speaciality}</option>
  //           })
  //         }
  //         </select>
  //         <div className="validationMsg">
  //           {/* <Error name="complaintTypecolumn" /> */}
  //         </div>
  //       </div>
  //     </td></div>)
  //   table.push(<tr>{children}</tr>)
  //   children.push(
  //     <div>
  //       <td> <label className="control-margin-lbl"> Specific complaint issue:</label></td>
  //       <td>
  //         <select className="form-control dorp-box" value={this.state.specificComplaint} name="specificComplaintcolumn">{

  //           this.state.specificComplaintData.map((specificComplain, i) => {
  //             // this.state.selectedProfession
  //             if (specificComplain.typeid == this.state.complaintType) {
  //               // this.state.specificComplain = specificComplain.name;

  //               // this.state.specialty=specificComplain.id;
  //               // console.log("selectedProfession id :  " + this.state.selectedProfession.id);
  //               console.log("speacialty typeId&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& :  " + specificComplain.typeid);
  //               return (<option key={specificComplain.value} value={specificComplain.id}>{specificComplain.name}</option>)
  //             }
  //             // return <option>{doctor.speaciality}</option>
  //           })
  //         }
  //         </select>
  //         <div className="validationMsg">
  //           {/* <Error name="specificComplaintcolumn" /> */}
  //         </div>
  //       </td>
  //     </div>


  //   )
  //   return table
  // }
  handleChangeDate(date) {
    console.log("DATE" + date.format());
    // console.log("DATE" + date.target.value);
    this.setState({
      startDate: date
    });
    console.log("DATE" + moment().format());
    console.log("DATE typeof" + typeof moment().toString());
  }
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

  setClearValue() {
    this.setState({
      clearvalues: 1,
    });
  }
  setSex(event) {
    console.log("Sex :" + event.target.value);
    // this.setState
    this.setState({
      sex: event.target.value,
    });
  }
  setComplaints(event) {
    console.log("No of ss" + event.target.value);
    this.setState({
      complaints: event.target.value,
    });
  }


  postRequest() {
    console.log("in POST")
    method: 'POST';
    // this.state.specificComplaintArr= this.state.returnArrayFromChild
    this.state.multiComplaint= this.state.returnArrayFromChild

    // this.state.specificComplaintArr.map((specialProfArr, i) => {
    this.state.multiComplaint.map((specialProfArr, i) => {
      this.state.specificComplaintArr=  this.state.specificComplaintArr + specialProfArr+','
      console.log("+++++++++++++++++++++++++++++++++" + this.state.specificComplaintArr)
    })

    console.log("+++++++++++++++++ out post");
    let data = {
      // id:1,
      sex: this.state.sex, //'Male',
      age: this.state.age, //27,
      location: this.state.location, //'city',
      specialty: this.state.specialty, //"Surgery",
      complaints: this.state.complaints,
      // complaintType: this.state.complaintType,
      // specificComplaint: this.state.specificComplaintArr,
      issueType: this.state.specificComplaintArr,
      // multiComplaint : JSON.stringify( [1,2]),
      //  this.state.multiComplaint,
    }

    // const url = 'http://128.250.143.10:8080/ProneSpringBoot/api/practitioners/create/';
    // const = properties.baseUrl +"ucreate/';
    const url = properties.baseUrl + 'practitioners/create';


    var request = new Request(url, {
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
        console.log("CREATED ID :" + jsonObject.id);
        this.state.jsonId = jsonObject.id;
        // document.write(`ID ${jsonObject.id} was created!`);
      })
      .then(() => {
        if (this.state.jsonId.length !== 0) {
          this.fetchPractitionerId(this.state.jsonId)
        }
      })
      .catch((error) => {
        document.write(error);
      });



  }

  fetchPractitionerId(id) {
    // fetch saved practitioner rec id
    console.log("SEL this.jsonId%%%%%%%%%%%%%%%%%%% : " + this.state.jsonId)
    // const urlProfession = "http://128.250.143.10:8080/ProneSpringBoot/api/practitionerscore/"+id;
    const urlProfession = properties.baseUrl + "practitionerscore/" + id;
    fetch(urlProfession)
      .then(response => response.json())
      .then((data) => {

        console.log("score" + data);
        this.setState({
          score: data,

        });
        // this.state.profession.push(data);
      })

  }


  componentDidMount() {
    this.state.hideSpecialty=true
    console.log("SEL PROF : " + this.state.selectedProfession)

    // const urlProfession = "http://128.250.143.10:8080/ProneSpringBoot/api/professions/";
    // const urlProfession = "http://128.250.143.10:8080/ProneSpringBoot/api/professions/";
    const urlProfession = properties.baseUrl + "professions/";
    fetch(urlProfession)
      .then(response => response.json())
      .then((data) => {

        console.log(data);
        this.setState({
          profession: data,

        });
        // this.state.profession.push(data);
      })
    // const urlSpecialty = "http://128.250.143.10:8080/ProneSpringBoot/api/specialties/";
    const urlSpecialty = properties.baseUrl + "specialties/";
    fetch(urlSpecialty)
      .then(response => response.json())
      .then((dataa) => {
        // dataa.push({id: 0, profId: 1, name: "Choose one", description: "choose2", jsonId: 0})
        console.log(dataa);
        this.setState({

          // flats: data
          specialtyData: dataa

        });
      })
    // const urlLocation = "http://128.250.143.10:8080/ProneSpringBoot/api/locations/";
    const urlLocation = properties.baseUrl + "locations/";
    fetch(urlLocation)
      .then(response => response.json())
      .then((data) => {

        console.log(data);
        this.setState({

          // flats: data
          locationData: data

        });
      })

    // const urcomplaintType = "http://128.250.143.10:8080/ProneSpringBoot/api/complaintTypes/";
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

    // const urlAgegroup = "http://128.250.143.10:8080/ProneSpringBoot/api/ageRecs/";
    // const = properties.baseUrl +"uageRecs/";
    const urlAgegroup = properties.baseUrl + 'ageRecs';
    fetch(urlAgegroup)
      .then(response => response.json())
      .then((data) => {

        console.log(data);
        this.setState({

          // flats: data
          ageData: data

        });
      })

    // const urlComplaints = "http://128.250.143.10:8080/ProneSpringBoot/api/prevcomplaints/";
    const urlComplaints = properties.baseUrl + "prevcomplaints/";
    fetch(urlComplaints)
      .then(response => response.json())
      .then((data) => {

        console.log(data);
        this.setState({

          // flats: data
          complaintsData: data

        });
      })

    if (this.state.page == 0) {
      // alert("in"+ this.state.page)
      // let x= document.getElementById("specialty");
      // let y= document.getElementById("specialty2");
      // let z= document.getElementById("lineBreak");

      // x.style.display = "none";
      // y.style.display = "none";
      // z.style.display = "none";

      // hide the specialty select box at the load.


      var e = document.getElementById("idProf");
      this.state.selectedProfession = e.value;
      alert(e.value);
    }

    // if(this.state.page== 0){

    //   // hide the specialty select box at the load.
    //   let x= document.getElementById("specialty");
    //   let y= document.getElementById("specialty2");
    //   let z= document.getElementById("lineBreak");

    //   x.style.display = "none";
    //   y.style.display = "none";
    //   z.style.display = "none";
    // }

  }

  handleLocationChange = (e) => {
    this.setState({ location: e.target.value });
    console.log("location selected : " + e.target.value);
  }
  handleChangeSpeciality = (e) => {
    this.setState({ specialty: e.target.value });


    // Looping To get the Specialty Name from the id returned from above 'e.target.value' ( eg : "Dentists and Dental Prosthetis")
    this.state.specialtyData.map((specialProf, i) => {
      if (specialProf.profId == this.state.selectedProfession) {
        if (specialProf.id == e.target.value) {
          // this.setState({ specialProf: specialProf.name });
          this.setState({ specialProf: specialProf.description });
        }

      }
    })
  }



  handleChangeSpecificComplaint = (e) => {
    this.setState({ specificComplaint: e.target.value });
    console.log("specificComplaint id ******************8888" + this.state.specificComplaint);

    // Looping To get the Specialty Name from the id returned from above 'e.target.value' ( eg : "Dentists and Dental Prosthetis")
    // this.state.specificComplaintData.map((specialComplain, i) => {
    //   if (specialComplain.typeId == this.state.complaintType) {
    //     if(specialComplain.id==e.target.value){
    //       this.setState({ specialComplain: specialComplain.name });
    //     }

    //   }
    // })
  }

  // This function is used to hide the Specialty column, when there are only one Specialty exist for selected profession
  hideSpecialtyColumn = (e) => {
    let x = document.getElementById("specialty");
    let y = document.getElementById("specialty2");
    // let z = document.getElementById("lineBreak");
    let countSpecialty = 0;
    let specialProfDesc = '';
    let specialProfId = 0;

    // Loop through all the specialties, and count no of specialty entries for the selected profId, check the counter and hide if there are only
    // one entries in the Specialty table. (eg : midwife)
    this.state.specialtyData.map((specialProf, i) => {
      console.log("hide specialty" + e.target.value)
      if (specialProf.profId == e.target.value) {
        console.log("hide specialty ***************************888" + e.target.value);
        countSpecialty = countSpecialty + 1;
        specialProfDesc = specialProf.description;
        specialProfId = specialProf.id;

      }
      console.log("counter hide column" + countSpecialty);
    })
    console.log("hide specialty countSpecialty" + countSpecialty)

    // In the condition below we check equals to 2 since the response data contain a extra column call "chooes" in addition to the value ( eg : midwife)
    if (countSpecialty == 2) {
      this.setState({ specialProf: specialProfDesc });
      this.setState({ specialty: specialProfId })
      x.style.display = "none";
      y.style.display = "none";
      // z.style.display = "none";
      // }
      this.state.hideSpecialty = true;

    } else {
      x.style.display = "block";
      y.style.display = "block";
      // z.style.display = "block";
      // if(specialProf.id==e.target.value){
      // this.setState({ specialProf: specialProf.name });
      this.state.hideSpecialty = false;
    }
    countSpecialty = 0;
  }
  handleProfessionChange = (e) => {
    this.setState({ selectedProfession: e.target.value });
    console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii" + e.target.value)

    this.hideSpecialtyColumn(e);
    // let x= document.getElementById("specialty");
    // let y= document.getElementById("specialty2");
    // let z= document.getElementById("lineBreak");
    //   if ( e.target.value==3 || e.target.value==5 || e.target.value==6) {

    //     x.style.display = "none";
    //     y.style.display = "none";
    //     z.style.display = "none";

    //     if(e.target.value==3){
    //       this.setState({ specialProf: "midwives" });
    //       this.setState({ specialty:15})
    //     };
    //     if(e.target.value==5){
    //       this.setState({ specialProf: "psychologists" });
    //       this.setState({ specialty:16})
    //     };
    //     if(e.target.value==6){
    //       this.setState({ specialProf: "pharmacists" });
    //       this.setState({ specialty:17})
    //     };
    //     this.state.hideSpecialty= true;

    //    }else{
    //     this.state.hideSpecialty= false;
    //     x.style.display = "block";
    //     y.style.display = "block";
    //     z.style.display = "block";

    //    }


    console.log("selected Profession id : " + this.state.selectedProfession)
  }
  loadProfession = (e) => {
    alert("in load" + e.target.value)
  }

  handleComplaintTypeChange = (e) => {
    this.setState({ complaintType: e.target.value });

    console.log("selected complaintTypeData id : " + this.state.complaintType)
  }


  //To re-initialize the form when 'Finish' buttion is clicked
  returnToFirst() {
    // DrawPdf()
    this.state.sex = '',
      this.state.age = '111',
      this.state.complaints = '111',
      this.state.specialty = '111',
      this.state.location = '111',
      this.state.complaintType = '111',
      this.state.specificComplaint = '111',
      this.setState({
        selectedProfession: '111',
      }),

      this.setState({
        hideSpecialty: true,
      }),

      this.state.specificComplaintArr='',
      console.log("In end session *******88")
  }
  onSubmit(e) {
    // e.preventDefault();
    if (this.state.selectedProfession) {
      // this.setState({ selectedProfession: 1 });
      if (this.state.specialty == 111) {

      }
    }
    if (this.state.location) {

    }
    // this.setClearValue()
    this.postRequest();
    // if(this.handleValidation()){   
    // }else{
    // alert("Form has errors.");
    //  }
  }
  removeElementFromArray= (noOfClicks) => {

    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> :" + noOfClicks )

    this.state.returnArrayFromChild.splice(noOfClicks+1,1)

    this.state.returnArrayFromChild.map((speccompmulti, i) => {
      console.log("**********************************************************************###### PARENT REMOVE" + speccompmulti)
    })
  }

  setReturnValChild = (speccompValArr, noOfClicks) => {
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& PARENT" + speccompValArr)
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& PARENT length" + this.state.returnArrayFromChild.length)
    var specialVal;
    speccompValArr.map((arrVal, i) => {
      if (i == 0) {
        specialVal = arrVal;

        returnArrayFromChild: this.state.returnArrayFromChild.splice(noOfClicks, 0, specialVal)
        this.setState({

          // returnArrayFromChild:speccompValArr
          // returnArrayFromChild: this.state.returnArrayFromChild.concat(specialVal,noOfClicks)
        });
      }
    })

    console.log("************************* specialVal " + specialVal)
    // this.setState({

    //   returnArrayFromChild: this.state.returnArrayFromChild.splice(noOfClicks,0,specialVal)
    //   // returnArrayFromChild:speccompValArr
    //   // returnArrayFromChild: this.state.returnArrayFromChild.concat(specialVal,noOfClicks)
    // });

    // this.setState({
    // duplArryFromChild:  this.state.returnArrayFromChild
    // });
    // this.setState({
    //   duplArryFromChild: this.state.duplArryFromChild.concat(speccompValArr)
    // })

    // this.state.duplArryFromChild.splice(noOfClicks+1,1)

    for(var i = noOfClicks; i < this.state.returnArrayFromChild.length; i++){
      // var index = this.state.returnArrayFromChild[i];
      if(i>noOfClicks){

        returnArrayFromChild: this.state.returnArrayFromChild.splice(i,1)
      }
      // console.log("&&&&&&&&&&&&&& for : " +index)
      // this.splice(index, 1);
    } 


    this.state.returnArrayFromChild.map((speccompmulti, i) => {
      console.log("**********************************************************************###### PARENT" + speccompmulti)
    })
    // this.setState({ specificComplaint:speccompValArr});
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
      <Wizard
        initialValues={{ employed: true }}
        onSubmit={this.onSubmit.bind(this)}
        returnToFirst={this.returnToFirst.bind(this)}
      // {onSubmit}

      >
        <Wizard.Page>
          <Welcome />

        </Wizard.Page>
        {/* <Wizard.Page>
          <MyTable score={45}  specialProf ={this.state.specialProf}/>
        </Wizard.Page> */}
        <Wizard.Page validate={values => {
          const errors = {}
          console.log("in validation %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 1111")
            
          // if (!this.state.age) {
          //   errors.age = 'Please enter an appropriate value'
          // }else if (this.state.age) {
          //   console.log("in Age :" + this.state.age)
          //   if(!this.state.age.match(/^[\d]+$/)){ 
          //     errors.age =  "Please enter a numeric value";
          //   }
          //   if(this.state.age>75 || this.state.age<25){
          //     errors.age =  "Please enter value between 25 & 75";
          //   }

          // }  
          if (this.state.age == 111) {
            // alert("In error")
            errors.ageColumn = 'Please enter an appropriate value'
          }
          if (!this.state.sex) {
            errors.sex = 'Please select the appropriate option'
          }

          if (this.state.complaints == 111) {
            // alert("In error")
            errors.complaintsColumn = 'Please enter an appropriate value'
          }

          // if (!this.state.complaints) {
          //   errors.complaints = 'Please enter an appropriate value'
          // }else if (this.state.complaints) {
          //   console.log("in complaints :" + this.state.complaints)
          //   if(!this.state.complaints.match(/^[\d]+$/)){ 
          //     errors.complaints =  "Please enter a numeric value";
          //  }
          // }

          if (this.state.specialty == 111) {
            // alert("In error")
            errors.specialtycolumn = 'Please enter an appropriate value'
          }
          if (this.state.selectedProfession == 111) {
            // alert("In error")
            errors.professioncolumn = 'Please enter an appropriate value'
          }
          if (this.state.location == 111) {
            // alert("In error")
            errors.locationcolumn = 'Please enter an appropriate value'
          }
          // if (this.state.complaintType==111) {
          //   // alert("In error")
          //   errors.complaintTypecolumn = 'Please enter an appropriate value'
          // }
          
          // if (this.state.specificComplaint==111) {
          if ( this.state.returnArrayFromChild=="") {
            // alert("In error")
            console.log("in validation %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% if"+ this.state.returnArrayFromChild)
            errors.specificComplaintcolumn = 'Please enter an appropriate value'
          }else{
            console.log("in validation %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% else")
            // errors.specificComplaintcolumn =''
          }

          return errors
        }}>
          {/* <PersonApp /> */}
          <div>
            {/* <table>
              <tbody> */}

                {/* <tr>

                  <td> <label  className="control-margin-lbl"> Age </label></td>
                  <td> <div onChange={this.setAge.bind(this)}><input type="text"  className="box-text form-control" name="age" value ={this.state.clearvalues==0?this.state.age:''}></input> 
                 
                  </div> 
                  <div className="validationMsg">
                    <Error name="age" />
                  </div>
                  </td>
                </tr> <br></br>
                <tr><td></td></tr> */}

                {/* Age Select Box Start */}
                {/* <tr>
                  <td>
                  <td>
                  </td> */}
                  <div class="row">
              <div class="col-sm-8">
                     <div class="row">
                <div className="col-sm-6">
                    <label className="control-margin-lbl"> Age: </label>
                    </div>
                    <div className="col-sm-4">   
                    <select className="form-control dorp-box" value={this.state.age} onChange={this.setAge.bind(this)} name="ageColumn">{
                      this.state.ageData.map((ageGroup, i) => {

                        this.state.ageGroup = ageGroup.name;
                        console.log("location ID :  " + ageGroup.id);
                        return <option key={ageGroup.value} value={ageGroup.id}>{ageGroup.name}</option>

                      })
                    }
                    </select>
                    <div className="validationMsg">
                      <Error name="ageColumn" />
                    </div>
                    </div></div></div></div>
                  {/* </td>
                </tr> 
                  </tbody>
              </table> */}
                <br />
                {/* Age Select box end */}


                {/* <tr>
                  <td>
                  <td>
                     </td> */}
                      <div class="row">
              <div class="col-sm-8">
                     <div class="row">
                <div className="col-sm-6">
                     <label className="control-margin-lbl"   > Sex: </label>
                     </div>
                     <div className="col-sm-4">
                     <div className="form-check form-check-inline" onChange={this.setSex.bind(this)}>
                    <input className="form-check-input" type="radio" value="1" checked={this.state.sex == 1 ? true : false} name="sex" />
                    <label className="form-check-label" >Male</label>
                    <input className="form-check-input" type="radio" value="2" checked={this.state.sex == 2 ? true : false} name="sex" />
                    <label className="form-check-label" >Female</label></div>
                    <br></br>
                    <div className="validationMsg">
                      <Error name="sex" />
                    </div>
                    </div></div></div></div>
                  {/* </td> */}

                {/* </tr> */}
                {/* <div > */}
                <br />
                {/* <tr>

                  <td> */}
                  <div class="row">
                    <div class="col-sm-8">
                      <div class="row">
                        <div className="col-sm-6">
                          <label className="control-margin-lbl"> What is the profession? </label>
                          
                        </div>
                          <div className="col-sm-4">
                            <select className="form-control dorp-box" id="idProf" value={this.state.selectedProfession} onChange={this.handleProfessionChange.bind(this)} name="professioncolumn">                            {
                              this.state.profession.map((read, i) => {
                                this.state.read = read.name;
                                console.log("profession ID :  " + read.id);
                                return <option key={read.value} value={read.id}>{read.name}</option>
                              })
                            }
                            </select>
                            <div className="validationMsg">
                              <Error name="sex" />
                            </div>
                          </div></div></div></div>
                    <br/>
                  {/* </td>
                </tr> 
                <tr>
                
              <td>  */}
             {/* <div className={this.state.hideSpecialty ? "hidden" : "control-margin-lbl"}> <br /></div> */}
               <div class="row">
              <div class="col-sm-8">
                     <div class="row">
                <div className="col-sm-6">
                    <div id="specialty">
                {/* <br /> */}
                    
                    <label className={this.state.hideSpecialty ? "hidden" : "control-margin-lbl"}> What is the specialty?</label></div> 
                  </div>

                   <div className="col-sm-4">
                  <div id="specialty2">
                   {/* <br /> */}
                    {/* <td> */}
                      <select className={this.state.hideSpecialty ? "hidden" : "form-control dorp-box"} value={this.state.specialty} onChange={this.handleChangeSpeciality.bind(this)} name="specialtycolumn">{

                        this.state.specialtyData.map((specialProf, i) => {
                          // this.state.selectedProfession
                          if (specialProf.profId == this.state.selectedProfession) {
                            // this.state.specialProf = specialProf.name;

                            // this.state.specialty=specialProf.id;
                            // console.log("selectedProfession id :  " + this.state.selectedProfession.id);
                            // console.log("speacialty profid :  " + specialProf.profId);
                            return (<option key={specialProf.value} value={specialProf.id}>{specialProf.name}</option>)
                          }
                          // return <option>{doctor.speaciality}</option>
                        })
                      }
                      </select>
                      <div className={this.state.hideSpecialty ? "hidden" : "validationMsg"}>
                        <Error name="specialtycolumn" />
                      </div>
                    {/* </td> */}
                {/* <br/> */}
                  </div></div></div></div>
                  
                {/* <div className={!this.state.hideSpecialty ? "hidden":''} > <br /></div>  */}
                  </div>
                  {/* <div className={this.state.hideSpecialty ? "hidden" : ""} id="lineBreak"> <br /></div> */}
                {/* </tr> */}
                {/* <div className={this.state.hideSpecialty ?   "":"hidden"} id="lineBreak"> <br /></div> */}
                <div className={this.state.hideSpecialty ? "hidden":''} > <br /></div> 

                
                <div class="row">
              <div class="col-sm-8">
            <div class="row">
                <div className="col-sm-6">
                {/* <div className={this.state.hideSpecialty ? "hidden" : ""} id="lineBreak"> <br /></div> */}
                {/* <tr>
                  <td> */}
                    <label className="control-margin-lbl">What is the location of practice?</label>
                  {/* </td>
                  <td> */}
</div>

                <div className="col-sm-4">
                {/* <div className={this.state.hideSpecialty ? "hidden" : ""} id="lineBreak"> <br /></div> */}
                    <select className="form-control dorp-box" value={this.state.location} onChange={this.handleLocationChange.bind(this)} name="locationcolumn">{
                      this.state.locationData.map((area, i) => {

                        this.state.area = area.name;
                        console.log("location ID :  " + area.id);
                        return <option key={area.value} value={area.id}>{area.name}</option>

                      })
                    }
                    </select>
                    <div className="validationMsg">
                      <Error name="locationcolumn" />
                    </div>
                    </div></div></div></div>
                  {/* </td>
                </tr>  */}
                <br />
                {/* </tbody>
            </table> */}
          {/* </div>   */}

                {/* Start specific complaints */}
                {/* <div>
                <table>
              <tbody> */}
                {/* <tr>

                  <td> <label className="control-margin-lbl"> Complaint issue type:  </label></td>
                  <td>
                    <div>
                      <select className="form-control dorp-box" id="idCompType" value={this.state.complaintType} onChange={this.handleComplaintTypeChange.bind(this)} name="complaintTypecolumn">                            {
                        this.state.complaintTypeData.map((read, i) => {
                          this.state.read = read.name;
                          console.log("complaintTypeData ID 11 :  " + read.id);
                          return <option key={read.value} value={read.id}>{read.name}</option>
                        })
                      }
                      </select>
                      <div className="validationMsg">
                        <Error name="complaintTypecolumn" />
                      </div>
                    </div>
                  </td>
                </tr> <br />
                <tr>
                  <td> <label className="control-margin-lbl"> Specific complaint issue:</label></td>
                  <td>
                    <select className="form-control dorp-box" value={this.state.specificComplaint} onChange={this.handleChangeSpecificComplaint.bind(this)} name="specificComplaintcolumn">{
                      
                      this.state.specificComplaintData.map((specificComplain, i) => {
                        if (specificComplain.typeid == this.state.complaintType) {
                          console.log("speacialty typeId&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& :  " + specificComplain.typeid);
                          return (<option key={specificComplain.value} value={specificComplain.id}>{specificComplain.name}</option>)
                        }
                      })
                    }
                    </select>
                    <div className="validationMsg">
                        <Error name="specificComplaintcolumn" />
                      </div>
                  </td>
                  </tr> */}
                {/* <td> <button> <img src={buttonPlus} alt="my image" onClick={() => this.createTableMale()} /></button></td> */}
                {/* <input type="button" img src={buttonPlus} alt="my image" onClick={() => this.createTableMale()} ></input> */}
                {/* <div>
                  {this.state.isHidden && this.createTableMale()}

                      
                    
                  </div> */}

                {/* <tr> */}
                {/* specificComplaintData={this.state.specificComplaintData} */}

                <MultiForm onSpecCompToParent={this.setReturnValChild}  onRemoveElement={this.removeElementFromArray}/>
                {/* <div >
                        <input className="img-box plusButton" type="button" style={{ backgroundImage: `url(${buttonPlus})` }} alt="my image"  ></input>
                    </div> */}
                {/* </tr> */}
                {/* </tbody>
                  </table>
                  </div> */}
                {/* </tr> */}
                {/* <br /> */}
                {/* End specific complaints */}
                {/* <tr>
                  <td>
                    <label className="control-margin-lbl">How many previous complaints?</label>
                  </td>
                  <td> <div onChange={this.setComplaints.bind(this)}><input className="box-text  form-control" type="text" name="complaints"  value ={this.state.complaints}></input> </div> 
                  <br></br>  
                  <div className="validationMsg">
                      <Error name="complaints" />
                  </div>
                  </td>
                </tr> <br/> */}

                {/* Start selectbox Previous complaints */}
                {/* <div>
                <table>
              <tbody> */}
                {/* <tr>
                  <td> */}
                  {/* <br/> */}
                  {/* <div className={this.state.hideSpecialty ? "hidden" : ""} id="lineBreak"> <br /></div> */}
                    
                  
                  {/* <div className={this.state.hideSpecialty ? "" : "hidden"  } id="lineBreak"> <br /></div> */}
                    
                    
                  <div class="row">
                  <div class="col-sm-8"> 
                   <div class="row">
                   <div class="col-sm-6">                  
                    <label className="control-margin-lbl"> How many previous complaints? </label>
                  {/* </td>
                  <td> */}
                  </div>
                  <div class="col-sm-4">                  
                  
                    <select className="form-control dorp-box" value={this.state.complaints} onChange={this.setComplaints.bind(this)} name="complaintsColumn">{
                      this.state.complaintsData.map((prevComps, i) => {

                        this.state.prevComps = prevComps.name;
                        console.log("location ID :  " + prevComps.id);
                        return <option key={prevComps.value} value={prevComps.id}>{prevComps.name}</option>

                      })
                    }
                    </select>
                    <div className="validationMsg">
                      <Error name="complaintsColumn" />
                    </div>
                    </div>
                    </div>
                    <div className="col-sm-4">  
                            </div>
                            </div></div>
                  {/* </td>
                </tr>  */}
                <br />

                {/* End selectbox Previous complaints */}

                {/* <tr>
                  <td> <label className="control-margin-lbl">When was the last complaint?</label>
                
                  </td>

                  <td><DatePicker className="form-control"
                selected={this.state.startDate}
                onChange={this.handleChangeDate.bind(this)}
            /></td>
                </tr> */}

                {/* </tbody> </table>
                </td>
                </tr> */}
              {/* </tbody>
            </table> */}
          </div>
          {/* <Test /> */}
          {/* <Select/> */}
          {/* <Profesion/> */}
          {/* <MyTable /> */}
          {/* <p>Thank you for completing this research.</p><br></br>
                <p>If you have any questions please contact us at:<a href="mailto:ykim1@student.unimelb.edu.au"> ykim1@student.unimelb.edu.au</a> or <a href="mailto:walker@unimelb.edu.au">walker@unimelb.edu.au</a></p><br></br>
                <p>If you would like a copy of the final results of this study, please contact <a href="mailto:walker@unimelb.edu.au">walker@unimelb.edu.au</a></p> */}
        </Wizard.Page>
        <Wizard.Page>
          <MyTable score={this.state.score} specialProf={this.state.specialProf} />
        </Wizard.Page>
        {/* <DoctorSelect state={this.state}/> */}
      </Wizard>
    );
  }
}
