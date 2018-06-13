import React, {Component} from 'react';
import PropTypes from "prop-types";

export class Settings extends Component {

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
                <h1>SETTINGS</h1>
            </div>
        );
    }
}
