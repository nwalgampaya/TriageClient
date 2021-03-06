import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-final-form'
// import FormContainer from './containers/FormContainer';
//import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo1 from '../src/img/logo1.png';
import logoM from '../src/img/logoM.png';
// import background from '../src/img/headervector.png';
// // import uniLogo from '../src/img/UniLogo.png';
import DHHSLogo from '../src/img/DHHSLogo.png';

import globalHealthLogo from '../src/img/globalHealth.png'
import proneImg from '../src/img/ProneProne.png';

import Styles from './Styles'

import './App.css';


export default class Wizard extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }
  static Page = ({ children }) => children

  constructor(props) {
    super(props)
    this.state = {
      page: 0,
      values: props.initialValues || {},
      counter: 0
    }
    // this.baseState = this.state
  }

  rndno = (min, max) => {
    return Math.floor(Math.random() * (max - min));

  }
  next = values => {
    // console.log("this.page" + this.state.page);
    // if(this.state.page == 3 || this.state.page == 4 || this.state.page == 5 || this.state.page == 6){
    //   this.state.counter= this.state.counter+1;
    //   let rnd=  this.rndno(0,3);
    //   // console.log("******************* : " + this.state.counter);
    //   if(this.state.counter==5){
    //               console.log("******************* counter==5 : " + this.state.counter);
    //       // this.state.page = 7;
    //       rnd=3;
    //   }
    //   console.log("******************** If: "+rnd);
    //   this.setState(state => ({
    //   page: Math.min(4+rnd  , this.props.children.length - 1),
    //   values  
    // }))}
    // else{
    console.log("********************(Next) in else" + this.rndno(0, 4));
    this.setState(state => ({
      page: Math.min(state.page + 1, this.props.children.length - 1),
      values
    }))
    // }
  }
  // this.setState(state => ({
  //   page: Math.min(state.page + 1, this.props.children.length - 1),
  //   values
  // }))}

  previous = () =>
    this.setState(state => ({
      page: Math.max(state.page - 1, 0)
    }))

  endSession = () => {
    const { returnToFirst } = this.props
    this.setState(state => ({
      // page: Math.max(state.page - 1, 0)
      page: 0
    }))
    //  this.setState(this.baseState)
    // const { page } = this.state
    return returnToFirst();

  }
  /**
 * NOTE: Both validate and handleSubmit switching are implemented
 * here because 🏁 Redux Final Form does not accept changes to those
 * functions once the form has been defined.
 */

  validate = values => {
    const activePage = React.Children.toArray(this.props.children)[
      this.state.page
    ]
    return activePage.props.validate ? activePage.props.validate(values) : {}
  }

  handleSubmit = values => {
    const { children, onSubmit } = this.props
    const { page } = this.state
    const isLastPage = page === React.Children.count(children) - 1

    // if(isLastPage){
    if (this.state.page == 1) {
      this.next(values)
      // return onSubmit(values)
    } else {
      this.next(values)
    }
  }


  render() {

    // var sectionStyle = {
    //   width: "100%",
    //   height: "400px",
    // backgroundImage: `url(${background})`
    // };

    const { children } = this.props
    const { page, values } = this.state
    const activePage = React.Children.toArray(children)[page]
    const isLastPage = page === React.Children.count(children) - 1
    return (
      <div>
        <div className="container">

          {/* <div className="header"> */}
          {/* <div className="pull-left logo">
              <a><img src={uniLogo} alt={"logo"} /> </a>
            </div>
            <div className="pull-right top_menu">
              <a ><img src={proneImg} alt={"logoM"} /> </a>
            </div> */}
          {/* </div> */}
        </div>
        <p></p>
        <div >
        </div>
        <div className="container">
          <div className='content_body centered' >
            <table>
              <tbody>
                <tr>
                  <td>
                    <div className="pull-right top_menu container">
                      <a ><img src={globalHealthLogo} /> </a>
                    </div>
                  </td>
                  <td>
                    <div className="pull-left logo">
                      <a><img src={DHHSLogo} alt={"logo"} /> </a>
                    </div>

                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <Form
              initialValues={values}
              validate={this.validate}
              onSubmit={this.handleSubmit}>
              {({ handleSubmit, submitting, values }) => (

                <form onSubmit={handleSubmit}>
                  {activePage}
                  <br />
                  <div className="buttons">
                    {/* {page > 0 && (
                      <button type="button" onClick={this.previous}>
                        « Previous
                </button>

                    )} */}
                    {page == 0 && (
                      <button className="invisible" type="button" onClick={this.endSession}>
                        End session
                </button>


                    )}
                    {/* {page > 0 && (
                      <button className="btn btn-primary" styles={{ float: 'left', paddingLeft: '10px' }} type="button" onClick={this.previous}>
                        Previous
                </button>


                    )} */}
                    {page == 1 && (
                      <button className="btn btn-primary" hidden type="button" onClick={this.previous}>
                        Previous
                </button>


                    )}
                    {!page == 3 && (
                      <button className="btn btn-primary" type="button" onClick={this.previous}>
                        Back
                </button>
                    )}
                    {page == 2 && (
                      <button className="btn btn-primary pull-right" type="submit"  >
                        Next
                </button>
                    )}
                    {/* {!page == 0 && !page == 1 && !isLastPage && <button className="btn btn-primary pull-right " type="submit">  Next  </button>} */}
                    {/* {page == 1 && (<button className="btn btn-primary pull-right" type="submit" disabled={submitting}>
                      Start</button>
                    )} */}
                    {/* {(isLastPage ) && ( */}
                    {/* {(page == 3 &&
                      <button className="btn btn-primary pull-right" type="submit" disabled={submitting}>Next</button>
                    )} */}
                    {(isLastPage &&
                      <button className="btn btn-primary pull-right" type="button" disabled={submitting} onClick={this.endSession}>Finish</button>
                    )}

                  </div>

                  {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
                </form>
              )}
            </Form>
          </div>  </div>
      </div>
    )
  }
}
