import React, {Component} from 'react';
import PropTypes from "prop-types";

export class Login extends Component {

    static propTypes = {
        dispatch: PropTypes.func,
        match: PropTypes.object,
        children: PropTypes.any
    };

    static contextTypes = {
        router: PropTypes.object
    }

    render() {
        return (
            <div>
                <h1>LOGIN</h1>
            </div>
        );
    }
}
