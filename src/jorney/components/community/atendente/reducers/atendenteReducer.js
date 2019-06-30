import { actionAtendenteFormTypeConstant, actionPropertiesFormTypeConstant } from '../constants/index'

const initialState = {
    activeInitialForm: false,
    activePropertiesForm: false,
    data: null
}

const atendenteReducer = function (state = initialState, action) {

    var newState = Object.assign({}, state)

    switch (action.type) {
        case actionAtendenteFormTypeConstant.openAtendenteForm:
            newState.activeInitialForm = true
            return newState
        case actionAtendenteFormTypeConstant.closeAtendenteForm:
            newState.activeInitialForm = false
            return newState
        case actionPropertiesFormTypeConstant.openPropertiesAtendenteForm:
            newState.activePropertiesForm = true
            return newState
        case actionPropertiesFormTypeConstant.closePropertiesAtendenteForm:
            newState.activePropertiesForm = false
            return newState
        default:
            return newState
    }
}

export { atendenteReducer }