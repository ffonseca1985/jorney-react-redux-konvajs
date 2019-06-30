import { actionMenutFormTypeConstant, actionPropertiesFormTypeConstant } from '../constants/index'

const initialState = {
    activeMenuForm: false,
    activePropertiesForm: false,
    properties: {
        connections: []
    },
    data: null
}

const menuReducer = function (state = initialState, action) {

    var newState = Object.assign({}, state)

    switch (action.type) {
        case actionMenutFormTypeConstant.openMenuForm:
            newState.activeMenuForm = true
            return newState
        case actionMenutFormTypeConstant.closeMenuForm:
            newState.activeMenuForm = false
            return newState
        case actionPropertiesFormTypeConstant.openPropertiesForm:
            newState.activePropertiesForm = true
            return newState
        case actionPropertiesFormTypeConstant.changePropertiesForm:
            newState.properties = action.properties
        case actionPropertiesFormTypeConstant.closePropertiesForm:
            newState.activePropertiesForm = false
            return newState
        default:
            return newState
    }
}

export { menuReducer }