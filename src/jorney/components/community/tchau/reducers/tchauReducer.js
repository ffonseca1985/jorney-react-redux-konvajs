import { actionTchauFormTypeConstant, actionPropertiesFormTypeConstant } from '../constants/index'

const initialState = {
    activeTchauForm: false,
    activePropertiesForm: false,
    data: null
}

const tchauReducer = function (state = initialState, action) {

    var newState = Object.assign({}, state)

    switch (action.type) {
        case actionTchauFormTypeConstant.openInitForm:
            newState.activeTchauForm = true
            return newState
        case actionTchauFormTypeConstant.closeInitForm:
            newState.activeTchauForm = false
            return newState
        case actionPropertiesFormTypeConstant.openTchauPropertiesForm:
            newState.activePropertiesForm = true
            return newState
        case actionPropertiesFormTypeConstant.closeTchauPropertiesForm:
            newState.activePropertiesForm = false
            return newState
        default:
            return newState
    }
}

export { tchauReducer}