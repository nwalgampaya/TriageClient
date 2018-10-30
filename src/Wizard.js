import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-final-form'
// import FormContainer from './containers/FormContainer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import logo1 from '../src/img/logo1.png' ;
import logoM from '../src/img/logoM.png' ;
import Styles from './Styles'
import uniLogo from '../src/img/UniLogo.png';
import globalHealthLogo from '../src/img/globalHealth.png'
import proneImg from '../src/img/ProneProne.png';


export default class Wizard extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }
  static Page = ({ children }) => children

  constructor(props) {
    super(props)
    this.state = {
      page: 0,
      values: props.initialValues || {}
    }
  }
  next = values =>
    this.setState(state => ({
      page: Math.min(state.page + 1, this.props.children.length - 1),
      values
    }))

  previous = () =>
    this.setState(state => ({
      page: Math.max(state.page - 1, 0)
    }))

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
    if (isLastPage) {
      return onSubmit(values)
    } else {
      this.next(values)
    }
  }
 
  render() {
    const { children } = this.props
    const { page, values } = this.state
    const activePage = React.Children.toArray(children)[page]
    const isLastPage = page === React.Children.count(children) - 1
    return (
      <div > 
         <div className="container">
          <div className='content_body centered' >
          <table>
                    <tbody>
                        <tr>
                            <td>
                            <div className="pull-right top_menu container">
                                    <a ><img src={globalHealthLogo}  /> </a>
                                </div>
                            </td>
                            <td>
                                <div className="pull-left logo">
                                    <a><img src={uniLogo} alt={"logo"} /> </a>
                                </div>

                            </td>
                        </tr>
                    </tbody>
           </table> 
           <br/>      
      <Form 
        initialValues={values}
        validate={this.validate}
        onSubmit={this.handleSubmit}>
        {({ handleSubmit, submitting, values }) => (
          <form onSubmit={handleSubmit}>
            {activePage}
            <div className="buttons">
              {page > 0 && (
                <button className="btn btn-primary" styles={{ float: 'left', paddingLeft: '10px' }} type="button" onClick={this.previous}>
                   Previous
                </button>
              )}
              {!isLastPage && <button className="btn btn-primary pull-right "  type="submit">Next </button>}
              {isLastPage && (
                <button type="submit" disabled={submitting}>
                  Submit
                </button>
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
