import React, { Component, PropTypes } from 'react'
import moment from 'moment'
import DayPicker, { DateUtils } from 'react-day-picker'

import 'react-day-picker/lib/style.css'

class DateFilter extends Component {

    constructor(props) {
        super(props)

        const { defaultFrom, defaultTo } = this.props
        this.state = {
            from: defaultFrom,
            to: defaultTo
        }
    }

    static propTypes = {
        defaultFrom: PropTypes.instanceOf(Date),
        defaultTo: PropTypes.instanceOf(Date)
    };

    render() {
        const { from, to } = this.state

        let selectedRange = null;
        if (from && to) {
            selectedRange =
                <p>
                    You chose from { moment(from).format('L') } to { moment(to).format('L') }.
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

    handleDayClick = (e, day) => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState( range );
    }
}

export default DateFilter