import React from 'react'
import Link from 'gatsby-link'
import '../assets/scss/main.scss'

import Header from '../components/Header'

class Template extends React.Component {
    render() {
        const { children } = this.props

        return (
            <div>
                <Header />
                {children()}
            </div>
        )
    }
}

Template.propTypes = {
    children: React.PropTypes.func
}

export default Template
