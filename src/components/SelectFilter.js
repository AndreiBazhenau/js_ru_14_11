import React, { Component, PropTypes } from 'react'
import Select from 'react-select'

import 'react-select/dist/react-select.css'


class SelectFilter extends Component {

    constructor(props) {
        super(props)

        const { defaultSelected } = this.props
        this.state = {
            selected: defaultSelected
        }
    }

    static propTypes = {
        items: PropTypes.array.isRequired
    };

    render() {
        const { items } = this.props
        const { selected } = this.state

        return (
            <div>
                <Select options = {items} value = {selected} onChange = {this.handleChange} multi = {true}/>
            </div>
        )
    }

    handleChange = selected => this.setState({ selected : selected })
}

export default SelectFilter