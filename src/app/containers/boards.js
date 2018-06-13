import React, {Component} from 'react';
import PropTypes from "prop-types";
import data from '../data/data.json';

export class Boards extends Component {

    static propTypes = {
        dispatch: PropTypes.func,
        match: PropTypes.object,
        children: PropTypes.any
    };

    static contextTypes = {
        router: PropTypes.object
    }

    render() {
        const {images} = data;

        return (
            <div className="grid-container">
                {images.map((item, index) => {
                    return (
                        <div
                            className="grid-box"
                            key={index}
                            style={{
                                backgroundImage: `url(\'${item.url}\')`
                            }}
                        >
                            { /*
                            <img src={item.url}/>
                            */ }
                            <div className="grid-box__details caption">{item.caption}</div>
                        </div>
                    );
                })}
            </div>
        );
    }
}
