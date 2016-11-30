import React, { Component, PropTypes } from 'react'
import Select from 'react-select'

import 'react-select/dist/react-select.css'


class SelectFilter extends Component {

    static propTypes = {
        items: PropTypes.array.isRequired,
        selected: PropTypes.array.isRequired,
        handleChange: PropTypes.func.isRequired
    };

    render() {
        const { items, selected, handleChange } = this.props

        return (
            <div>
                <Select options = {items} value = {selected} onChange = { handleChange } multi = {true}/>
            </div>
        )
    }
}

export default SelectFilter