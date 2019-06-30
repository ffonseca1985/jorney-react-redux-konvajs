import { actionTypeConstant } from '../constants/index'

const initialState = {
    active: false,
    data: null
}

const endReducer = function (state = initialState, action) {

    var newState = Object.assign({}, state)

    switch (action.type) {
        case actionTypeConstant.open:
            newState.active = true
            return newState
        case actionTypeConstant.close:
            newState.active = false
            return newState
        default:
            return newState
    }
}

export { endReducer }