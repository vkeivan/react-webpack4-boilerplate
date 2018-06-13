import classNames from 'classnames';
import { Link} from 'react-router-dom';
import {Grid, Row, Col} from 'react-bootstrap'
import PropTypes from 'prop-types';
import React, {Component, Fragment} from 'react';

export class PhotoGallery extends Component {
    static propTypes = {
        images: PropTypes.array
    };

    static defaultProps = {
        image: []
    }

    state = {
        slider_image_index: 0,
        thumbnail_pointer: 0
    }

    onChangeSliderIndex = (step) => {
        const {images} = this.props;
        let {slider_image_index} = this.state;
        if (slider_image_index + step >= 0 && slider_image_index + step < images.length ) {
            slider_image_index += step;
            this.setState({
                slider_image_index
            });
        }
    }

    onChangeThumbnailIndex = (step) => {
        const {images} = this.props;
        let {thumbnail_pointer} = this.state;
        if (thumbnail_pointer + step >= 0 && thumbnail_pointer + step < images.length ) {
            thumbnail_pointer += step;
            this.setState({
                thumbnail_pointer
            });
        }
    }

    onSelectThumbnail = (slider_image_index) => {
        this.setState({
            slider_image_index
        });
    }


    render() {
        const {images} = this.props;
        let {thumbnail_pointer, slider_image_index} = this.state;

        return (
            <Fragment>
                <Grid>
                    <Row>
                        <Col sm={12}>
                            <div className="slider-layout">
                                <div
                                    className={classNames('slider-left-nav', {disabled: slider_image_index === 0})}
                                    onClick={() => this.onChangeSliderIndex(-1)}
                                >
                                    <div className="arrow-left-icon md-48" />
                                </div>
                                <div className="slider-content">
                                    {images.map((item, index) => {
                                        if (index === slider_image_index) {
                                            return (
                                                <div className="slide-photo-box slide-down" key={index}
                                                     style={{display: 'block'}}>
                                                    <img src={item.url}/>
                                                    <div className="caption">{item.caption}</div>
                                                </div>
                                            );
                                        }
                                    })}
                                </div>
                                <div
                                    className={classNames('slider-right-nav', {disabled: slider_image_index === images.length -1})}
                                    onClick={() => this.onChangeSliderIndex(+1)}
                                >
                                    <div className="arrow-right-icon md-48" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className="thumbnails-grid-container">
                            <div className="slider-container">
                                <div className={'slider-thumbnails'}>
                                    {images.map((item, index) => {

                                        if (index >= thumbnail_pointer) {
                                            return (
                                                <Link
                                                    onClick={() => this.onSelectThumbnail(index)}
                                                    to={{
                                                        pathname: '/',
                                                        search: `?index=${index}`,
                                                        hash: `#${index}`
                                                    }}
                                                >
                                                    <div
                                                        className={classNames('photo-card fade-in', {selected: index === slider_image_index})}
                                                        key={index}
                                                    >
                                                        <img src={item.url}/>
                                                    </div>
                                                </Link>
                                            )
                                        }
                                        return null;

                                    })}
                                </div>
                            </div>
                    </div>
                </Grid>
            </Fragment>


        );
    }
}

PhotoGallery.propTypes = {
    images: PropTypes.array
}

PhotoGallery.defaultProps = {
    images: [],
    onClick: () => {}
}

export default PhotoGallery;
