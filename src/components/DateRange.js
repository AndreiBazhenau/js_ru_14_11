import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import { changeDateRange } from '../AC/filters'

import 'react-day-picker/lib/style.css';

class DateRange extends Component {

    handleDayClick = (e, day) => {
        const { changeDateRange, range } = this.props
        changeDateRange(DateUtils.addDayToRange(day, range))
    }

    handleResetClick = e => {
        const { changeDateRange, range } = this.props
        changeDateRange({})
    }

    render() {
        const { from, to } = this.props.range;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        const resetLink = from && to && <a href="." onClick={ this.handleResetClick }>Reset</a>
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange} {resetLink}
            </div>
        );
    }

}

export default connect(state => ({
    range: state.filters.dateRange
}), { changeDateRange })(DateRange)