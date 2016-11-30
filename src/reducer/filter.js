import { UPDATE_FILTER } from '../constants'

export default (filterState = { articles: [], dateRange: {} }, action) => {
    const { type, payload } = action

    switch (type) {
        case UPDATE_FILTER:
            return payload
    }

    return filterState
}
