import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
// import "./styles/styles.scss";
import Wizard from '../../src/Wizard.js'
import Welcome from './steps/Welcome.js'
import Guideline from './steps/Guideline.js'
import Symptoms from './steps/Symptoms.js'

export default class Colonoscopy extends React.Component {



    render() {



        return (
            <Wizard>
                <Wizard.Page>
                    <Welcome />

                </Wizard.Page>
                <Wizard.Page>
                    <Guideline/>

                </Wizard.Page>
                <Wizard.Page>
                    <Symptoms/>

                </Wizard.Page>

            </Wizard>

        )

    }
}

// ReactDOM.render(template, document.getElementById("app"));