import { render } from '@testing-library/react'
import React, { Component } from 'react'
import './CounterStyle.css'

class Counter extends Component {
    constructor() {
        super()

        this.increase = this.increase.bind(this)
        this.decrease = this.decrease.bind(this)
        this.reset = this.reset.bind(this)
    }

    state = {
        count: 0
    }

    increase() {
        this.setState({
            count: this.state.count += 1
        })
    }

    decrease() {
        this.setState({
            count: this.state.count -= 1
        })
    }

    reset() {
        this.setState({
            count: this.state.count = 0
        })
    }

    render() {
        return (
            <div className='Container'>

                <div className='subContainer1'>
                    <button className='buttons' onClick={this.increase}>increase</button>
                    <p className='p-tag'>{this.state.count}</p>
                    <button className='buttons' onClick={this.decrease} disabled={this.state.count == 0 ? true : false}>decrease</button>
                </div>

                <div className='subContainer2'>
                    <button id='reset-button' className='buttons' onClick={this.reset}>reset</button>
                </div>

            </div>
        )
    }
}

export default Counter