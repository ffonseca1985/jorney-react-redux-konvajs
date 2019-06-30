import { actionValidadorFormTypeConstant, actionPropertiesFormTypeConstant } from '../constants/index'

const initialState = {
    activeValidadorForm: false,
    activePropertiesForm: false,
    data: null
}

const validadorReducer = function (state = initialState, action) {

    var newState = Object.assign({}, state)

    switch (action.type) {
        case actionValidadorFormTypeConstant.openInitForm:
            newState.activeValidadorForm = true
            return newState
        case actionValidadorFormTypeConstant.closeInitForm:
            newState.activeValidadorForm = false
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

export { validadorReducer }