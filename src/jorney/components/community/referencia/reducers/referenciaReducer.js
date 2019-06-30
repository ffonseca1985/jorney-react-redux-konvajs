import { actionReferenciaFormTypeConstant, actionPropertiesFormTypeConstant } from '../constants/index'

const initialState = {
    activeReferenciaForm: false,
    activePropertiesForm: false,
    data: null
}

const referenciaReducer = function (state = initialState, action) {

    var newState = Object.assign({}, state)

    switch (action.type) {
        case actionReferenciaFormTypeConstant.openInitForm:
            newState.activeReferenciaForm = true
            return newState
        case actionReferenciaFormTypeConstant.closeInitForm:
            newState.activeReferenciaForm = false
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

export { referenciaReducer  }