
import { actionTypesConstants } from '../constants'

const menuPrincipalState = {
    active: false
}

var menuPrincipalReducer = function (state = menuPrincipalState, action) {

    var newState = Object.assign({}, state)

    switch (action.type) {
        case actionTypesConstants.openModal:
            newState.active = true
            return newState
        case actionTypesConstants.closeModal:
            newState.active = false
            return newState
        case actionTypesConstants.createShape:
            newState.active = false
            return newState
        default:
            return newState
    }
}

export { menuPrincipalReducer }