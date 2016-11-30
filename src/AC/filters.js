import { UPDATE_FILTER } from '../constants'

export function updateFilter(filterParameters) {
    return {
        type: UPDATE_FILTER,
        payload: filterParameters
    }
}
