import React, {Component} from 'react';
import "./result.css";

class Result extends Component {
    render(){
        return(
            <div className="Result">
                {this.props.data}
            </div>
        );
    }
}

export default Result;