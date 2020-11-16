import React, { Component } from 'react'

class Animal extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul>
                <li>{this.props.cat}</li>
                <li>{this.props.dog}</li>
                <li>{this.props.fish}</li>
            </ul>

        )
    }
}

export default Animal