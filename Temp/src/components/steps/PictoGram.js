import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import '../../css/styles.css';
import '../../css/stylesHalfmf.css';

const styles = {
    color: "red",
    fontSize: "32px"
};
export default class MyTable extends React.Component {

    constructor(props) {
        super(props)
    }
    createTableMale = () => {
        let table = []
        let z = 0

        for (let i = 0; i < 20; i++) {
            let children = []

            for (let j = 0; j < 50; j++) {
                console.log("Score in PICTO **********8 : " + this.props.score)
                z = z + 1
                if (1000-z >= (this.props.score*10)) {
                    children.push(<td><i className="icon-halfmalefemale-halfmalefemale fa-man-blue"></i></td>)
                } else {
                    children.push(<td><i className="icon-halfmalefemale-halfmalefemale fa-man-red"  ></i></td>)
                }
            }
            table.push(<tr>{children}</tr>)
        }

        return table
    }

    componentDidMount() {

    }
    render() {
        return (
            <div>
                <h2>Risk score</h2>
                <p>Your risk of receiving a complaint in the next two years is {this.props.score}%. This means that {this.props.score*10} out of 1000 {this.props.specialProf} with the same risk as you will receive a complaint in the next two years.</p>
                <table >
                    <tbody>

                        <tr>
                           <td className="rect-box-outer"><table className= "c"></table></td>
                            <td className="rect-box">
                                <p className="para-center">Risk over the next two years</p>
                                <table className= "b">
                                    <tbody >
                                        {this.createTableMale()}
                                    </tbody>
                                </table>



                            </td>
                            <td className="rect-box-outer"><table className= "c"></table></td>
                       </tr>
                       <tr></tr>
                        <tr>
                            <td></td> 
                            <td>
                                <div>
                                <p className="icon-halfmalefemale-halfmalefemale fa-man-blue para-height">
                            {"  "+(1000-this.props.score*10)} – {this.props.specialProf} will not receive complaint
                                </p>
                                {/* </td>
                            <td></td>
                        </tr>    
                        <tr>
                        <td></td>  */}
                            {/* <td>         */}
                                <p className="icon-halfmalefemale-halfmalefemale fa-man-red">
                                {"  "+(this.props.score*10)} – {this.props.specialProf} will receive complaint
                                </p>
                            </div>
                            </td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <p>The diagram above represents 1000 {this.props.specialProf} with the same risk of a complaint as you.</p>
            </div>
        )
    }

}