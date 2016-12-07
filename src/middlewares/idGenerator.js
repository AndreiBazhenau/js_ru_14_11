import { ADD_COMMENT } from '../constants'

function generateId() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
    }

    return s4() + s4() + s4() + s4() + s4() + s4()
}

export default store => next => action => {
    const { type } = action
  //лучше придумать более общий способ; через мидлвару будут проходить все экшины, их стоит делать максимально реюзабельными
    switch (type) {
        case ADD_COMMENT:
            return next({ ...action, generatedId: generateId()})
    }
    
    next(action)
}
