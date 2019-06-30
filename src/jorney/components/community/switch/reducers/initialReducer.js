import { actionInitFormTypeConstant, actionPropertiesFormTypeConstant } from '../constants/index'

const initialState = {
    activeInitialForm: false,
    activePropertiesForm: false,
    data: null
}

const initialReducer = function (state = initialState, action) {

    var newState = Object.assign({}, state)

    switch (action.type) {
        case actionInitFormTypeConstant.openInitForm:
            newState.activeInitialForm = true
            return newState
        case actionInitFormTypeConstant.closeInitForm:
            newState.activeInitialForm = false
            return newState
        case actionPropertiesFormTypeConstant.openPropertiesForm:
            newState.activePropertiesForm = true
            return newState
        case actionPropertiesFormTypeConstant.closePropertiesForm:
            newState.activePropertiesForm = false
            return newState
        default:
            return newState
    }
}

export { initialReducer }