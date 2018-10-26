import React from 'react';
// import React, { Component } from 'react';

import uniLogo from '../../../src/img/UniLogo.png';
import proneImg from '../../../src/img/ProneProne.png';

export default class Welcome extends React.Component {

    render() {

        return (
            <div>
                {/* <table>
                    <tbody>
                        <tr>
                        <td></td>    */}
                         <div class="row">
                            <div class="col-sm-12">
                     <div class="row">
                <div className="col-sm-6 App">
                            {/* <td className="App"> */}
                                <p className="predicted-risk">Endoscopy Categorisation Tool</p>
                         </div></div>
                            {/* </td> */}
                        {/* </tr> */}
                        
                        {/* <tr className="h"> */}
                        {/* <td></td> */}
                            {/* <td> */}
                            <div class="row">
                <div className="col-sm-4 App h">
                                <button className="App button-start text-button">Categorise colonoscopy</button>
                                
                                <button className="App button-start text-button">Categorise gastroscopy</button>
                                </div></div>
                            {/* </td> */}
                            
</div></div>
                        {/* </tr>

                    </tbody>
                </table> */}
                {/* <div class="row"></div>
                <div className="col-sm-6 App button App"> */}
                <div>
                    <p className="important-info">Important information:</p>
                    <ul>
                        <li> This tool is designed to be used by health regulators.</li>
                        <li> PRONE-HP provides estimates only and will need to be repeated if risk changes over time. </li>
                    </ul>
                </div>




            </div>
        )
    }
} 