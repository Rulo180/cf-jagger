import React, { Component } from 'react'
import PropTypes from 'prop-types'

import CoverBox from './CoverBox';

export class BoxPage extends Component {
    render() {
        return (
            <React.Fragment>
                <CoverBox />
            </React.Fragment>
        )
    }
}

BoxPage.propTypes = {

};

export default BoxPage
