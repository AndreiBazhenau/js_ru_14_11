import React, { Component, PropTypes } from 'react'
import moment from 'moment'
import DayPicker, { DateUtils } from 'react-day-picker'

import 'react-day-picker/lib/style.css'

class DateFilter extends Component {

    static propTypes = {
        selected: PropTypes.object.isRequired,
        handleChange: PropTypes.func.isRequired
    };

    render() {
        const { selected } = this.props
        const from = selected.from
        const to = selected.to

        let selectedRange = null;
        if (from && to) {
            selectedRange =
                <p>
                    You chose from { moment(from).format('L') } to { moment(to).format('L') }.
                    <a href="." onClick={ this.handleResetClick }>Reset</a>
                </p>
        }

        return (
            <div>
                { selectedRange }
                <DayPicker
                    numberOfMonths={ 3 }
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
            </div>
        )
    }

    handleResetClick = e => {
        const { handleChange } = this.props
        e.preventDefault()
        handleChange({})
    }

    handleDayClick = (e, day) => {
        const { selected, handleChange } = this.props
        const range = DateUtils.addDayToRange(day, selected)
        handleChange(range)
    }
}

export default DateFilter