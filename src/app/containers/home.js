import React, {Component} from 'react';
import PropTypes from "prop-types";
import PhotoGallery from "../components/photogallery";
import data from '../data/data.json';

export class Home extends Component {

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
                <div className="gallery-container">
                    <PhotoGallery images={data.images} />
                </div>
                {this.props.children}
            </div>
        );
    }
}
