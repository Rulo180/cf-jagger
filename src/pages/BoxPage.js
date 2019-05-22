import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class BoxPage extends Component {
    render() {
        return (
            <div>
                <h1>BOX - {this.props.place}</h1>
            </div>
        )
    }
}

BoxPage.propTypes = {

};

export default BoxPage
