import React, { Component } from 'react'
import PropTypes from 'prop-types'

import CoverBox from '../components/CoverBox';
import Coach from '../components/Coach';

export class BoxPage extends Component {
    render() {
        return (
            <React.Fragment>
                <CoverBox />
                <Coach separator />
            </React.Fragment>
        )
    }
}

BoxPage.propTypes = {

};

export default BoxPage
