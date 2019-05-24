import React, { Component } from 'react'
import PropTypes from 'prop-types'

import CoverBox from '../components/CoverBox';
import Banner from '../components/Banner';

export class BoxPage extends Component {
    render() {
        return (
            <React.Fragment>
                <CoverBox />
                <Banner hasButton={true} />
            </React.Fragment>
        )
    }
}

BoxPage.propTypes = {

};

export default BoxPage
