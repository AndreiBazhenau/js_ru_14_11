import { UPDATE_FILTER } from '../constants'

//лучше разбей это на 2 AC
export function updateFilter(filterParameters) {
    return {
        type: UPDATE_FILTER,
        payload: filterParameters
    }
}
