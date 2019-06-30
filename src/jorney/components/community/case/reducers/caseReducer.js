import {actionCaseFormTypeConstant, actionPropertiesFormTypeConstant } from '../constants/index'

const initialState = {
    activeCaseForm: false,
    activePropertiesForm: false,
    data: null
}

const caseReducer = function (state = initialState, action) {

    var newState = Object.assign({}, state)

    switch (action.type) {
        case actionCaseFormTypeConstant.openCaseForm:
            newState.activeCaseForm = true
            return newState
        case actionCaseFormTypeConstant.closeCaseForm:
            newState.activeCaseForm = false
            return newState
        case actionPropertiesFormTypeConstant.openCasePropertiesForm:
            newState.activePropertiesForm = true
            return newState
        case actionPropertiesFormTypeConstant.closeCasePropertiesForm:
            newState.activePropertiesForm = false
            return newState
        default:
            return newState
    }
}

export { caseReducer }